import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../pages/WelcomeScreen";
import LoginScreen from "../pages/LoginScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;