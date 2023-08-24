import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import OnBoardingScreen from "../screens/OnBoarding/OnBoardingScreen";
import LoginScreen from "../screens/Authorization/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthenticatorNavigation = () => {
  const SCREEN_NAMES = {
    ONBOARDING: "ONBOARDINGSCREEN",
    LOGIN: "LOGIN",
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SCREEN_NAMES.ONBOARDING}
          component={OnBoardingScreen}
        />
        <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatorNavigation;
