import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../pages/OrdersScreen";

const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Orders"
      component={OrdersScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default OrdersNavigator;
