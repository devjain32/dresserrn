import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../pages/CartScreen";
import ItemDetails from "../pages/ItemDetails";
import SectionTitle from "../components/SectionTitle";
import colors from "../config/colors";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Item"
      component={CartScreen}
      name="ItemDetails"
      component={ItemDetails}
      options={({ route }) => ({
        headerTitle: <SectionTitle text={route.params.title} size={20} />,
        headerTintColor: colors.secondary,
      })}
    />
  </Stack.Navigator>
);

export default CartNavigator;
