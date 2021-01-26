import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.drawer,
  },
});

export default CustomDrawer;
