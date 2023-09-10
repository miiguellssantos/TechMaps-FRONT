import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [dashboardId, setDashboardId] = useState(null)
  const [dashboardInfo, setDashboardInfo] = useState(null)

  const postDashboard = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      const userId = userInfo.uuid;
      
      // Obtém o token de autorização armazenado
      const authorizationHeader = await AsyncStorage.getItem("userToken");
      
      const response = await axios.post(`http://192.168.0.102:8080/api/v1/dashboard/${userId}`, null, {
        headers: {
          Authorization: authorizationHeader,
        },
      });
  
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
  
      const body = response.data;
  
      // Verifica se as informações foram retornadas corretamente
      if (body) {
        setDashboardInfo(body);
        AsyncStorage.setItem("dashboardInfo", JSON.stringify(body));
        console.log("Dashboard Info: ", body);
  
        setDashboardId(body.dashboardId);
        AsyncStorage.setItem("dashboardID", body.dashboardId.toString()); // Converte para string se necessário
        console.log("Dashboard ID: ", body.dashboardId);
      } else {
        console.error("Dashboard data is missing in the response.");
      }
  
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (username, senha) => {
    try {
      const response = await axios.post(`http://192.168.0.102:8080/login`, {
        username: username,
        password: senha,
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const authorizationHeader = response.headers.authorization;
      setUserToken(authorizationHeader);
      AsyncStorage.setItem("userToken", authorizationHeader);
      console.log("JWT:", authorizationHeader);

      const body = response.data;
      setUserInfo(body);
      AsyncStorage.setItem("userInfo", JSON.stringify(body));
      console.log("Response Body:", body);

      postDashboard()
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null)
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, userToken, userInfo, dashboardId, dashboardInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
