import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../pages/CartScreen";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default CartNavigator;
