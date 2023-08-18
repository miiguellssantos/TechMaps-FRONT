import React from "react";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Roadmaps from "./src/screens/Roadmaps/Roadmaps";
import DashBoard from "./src/screens/Dashboard/Dashboard";
import Profile from "./src/screens/Profile/Profile";
import SettingsPage from "./src/screens/SettingsPage/SettingsPage";
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} translucent={true} />
      <Tab.Navigator
        initialRouteName="Roadmaps"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "#ACE894" },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            switch (route.name) {
              case "Roadmaps":
                iconName = focused ? "map" : "map-outline";
                break;
              case "DashBoard":
                iconName = focused ? "chart-line-stacked" : "chart-line";
            }

            return <Icon name={iconName} size={35} color={"#306B34"} />;
          },
        })}
      >
        <Tab.Screen name="Roadmaps" component={RoadmapsStackScreen} />
        <Tab.Screen name="DashBoard" component={DashboardStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const RoadmapsStack = createNativeStackNavigator();
function RoadmapsStackScreen() {
 return (
   <RoadmapsStack.Navigator screenOptions={{headerShown:false}}>
    <RoadmapsStack.Screen name="Roadmaps" component={Roadmaps} />
    <RoadmapsStack.Screen name="Profile" component = {Profile} />
    <RoadmapsStack.Screen name="SettingsPage" component = {SettingsPage} />
   </RoadmapsStack.Navigator>
  );
}

const DashboardStack = createNativeStackNavigator();
function DashboardStackScreen() {
 return (
   <DashboardStack.Navigator screenOptions={{headerShown:false}}>
    <DashboardStack.Screen name="Dashboard" component={DashBoard} />
    <DashboardStack.Screen name="Profile" component = {Profile} />
    <DashboardStack.Screen name="SettingsPage" component = {SettingsPage} />
   </DashboardStack.Navigator>
  );
}

export default App;
