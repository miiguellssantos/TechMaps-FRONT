import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

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
    <AuthContext.Provider value={{ isLoading, userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
