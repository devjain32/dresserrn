import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import Specific from "../pages/Specific";
import ItemDetails from "../pages/ItemDetails";
import SectionTitle from "../components/SectionTitle";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ItemDetails"
      component={ItemDetails}
      options={({ route }) => ({
        headerTitle: <SectionTitle text={route.params.title} size={20} />,
        headerTintColor: colors.secondary,
      })}
    />
    <Stack.Screen
      name="Specific"
      component={Specific}
      options={({ route }) => ({
        headerTitle: <SectionTitle text={route.params.name} size={20} />,
        headerTintColor: colors.secondary,
      })}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
