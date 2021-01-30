import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../pages/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
