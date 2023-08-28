import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./src/navigation/TabNavigation";
import AuthenticatorNavigation from "./src/navigation/AuthenticatorNavigation";
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

const Stack = createNativeStackNavigator();

function App() {
  const [islogged, setIsLogged] = useState(false);

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
