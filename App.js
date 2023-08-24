import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./src/navigation/TabNavigation";
import AuthenticatorNavigation from "./src/navigation/AuthenticatorNavigation";

const Stack = createNativeStackNavigator();

function App() {
  const [islogged, setIsLogged] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"#1e1e1e"}
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {islogged ? (
          <Stack.Screen name="Tab" component={TabNavigation} />
        ) : (
          <>
            <Stack.Screen
              name="Authentication"
              component={AuthenticatorNavigation}
            />
            <Stack.Screen name="Tab" component={TabNavigation} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
