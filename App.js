import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Roadmaps from "./src/screens/Roadmaps/Roadmaps";
import DashBoard from "./src/screens/Dashboard/Dashboard";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Roadmaps"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#ACE894" },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Roadmaps"
          component={Roadmaps}
          options={{
            tabBarIcon: () => {
              return <Image source={require("./assets/mapIcon.png")} />;
            },
          }}
        />
        <Tab.Screen
          name="DashBoard"
          component={DashBoard}
          options={{
            tabBarIcon: () => {
              return <Image source={require("./assets/dashboardcon.png")} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
