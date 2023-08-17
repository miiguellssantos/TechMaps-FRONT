import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import Roadmaps from "./src/screens/Roadmaps/Roadmaps";
import DashBoard from "./src/screens/Dashboard/Dashboard";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Roadmaps"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "#ACE894" },
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let iconName
            switch (route.name){
              case "Roadmaps":
              iconName = focused ? "map" : "map-outline"
              break;
              case "DashBoard":
              iconName = focused? "chart-line-stacked" : "chart-line"
            }

            return <Icon name={iconName} size={35} color={"#306B34"} />
          }
        })}
        
      >
        <Tab.Screen
          name="Roadmaps"
          component={Roadmaps}
        />
        <Tab.Screen
          name="DashBoard"
          component={DashBoard}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
