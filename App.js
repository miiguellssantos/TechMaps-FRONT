import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Roadmaps from "./src/screens/Roadmaps/Roadmaps";
import DashBoard from "./src/screens/Dashboard/Dashboard";
import Profile from "./src/screens/Profile/Profile";
import SettingsPage from "./src/screens/SettingsPage/SettingsPage";
import OnBoardingPage from "./src/screens/OnBoardingScreen";
import TabNavigation from "./src/navigation/TabNavigation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [islogged, setIsLogged] = useState(false)

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} translucent={true} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        { islogged 
        ? (
        <Stack.Screen name="Tab" component={TabNavigation} />
        ) : (
          <Stack.Screen name="OnboardingPage" component={OnBoardingPage} />
        )}
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
