import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import OnBoardingScreen from "../screens/OnBoarding/OnBoardingScreen";
import LoginScreen from "../screens/Authorization/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/Authorization/RegisterScreen.js/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthenticatorNavigation = () => {
  const SCREEN_NAMES = {
    ONBOARDING: "ONBOARDINGSCREEN",
    LOGIN: "LOGIN",
    REGISTER: "REGISTER"
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SCREEN_NAMES.ONBOARDING}
          component={OnBoardingScreen}
        />
        <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={SCREEN_NAMES.REGISTER} component={RegisterScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatorNavigation;
