import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../pages/HomeScreen";
import ItemDetails from "../pages/ItemDetails";
import FeedNavigator from "./FeedNavigator";
import CustomDrawer from "../components/CustomDrawer";
import OrdersNavigator from "./OrdersNavigator";
import AccountNavigator from "./AccountNavigator";
import CartNavigator from "./CartNavigator";

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    drawerType="slide"
  >
    <Drawer.Screen
      name="Feed"
      component={FeedNavigator}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="Cart"
      component={CartNavigator}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="Orders"
      component={OrdersNavigator}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="Account"
      component={AccountNavigator}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>
);

export default AppNavigator;
