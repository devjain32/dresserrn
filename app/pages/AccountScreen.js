import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import MenuOpener from "../components/MenuOpener";
import SectionTitle from "../components/SectionTitle";
import Profile from "../components/Profile";
import { Auth } from "aws-amplify";
import AppInput from "../components/AppInput";
import ListItem from "../components/lists/ListItem";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.topPart}>
        <MenuOpener onPress={() => navigation.toggleDrawer()} />
        <SectionTitle text="account" size={50} />
        <Profile link="https://images.unsplash.com/photo-1611410987022-a30a8ff82da3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
      </View>
      <View style={styles.container}>
        <AppInput
          title="Email Address"
          subtitle="devrjain32200@gmail.com"
          name="email"
        />
        <View
          style={{ width: "100%", height: 1, backgroundColor: colors.primary }}
        />
        <AppInput
          title="Delivery Address"
          subtitle="500 Dulles Ave. Sugar Land, TX 77074"
          name="address"
        />
        <View
          style={{ width: "100%", height: 1, backgroundColor: colors.primary }}
        />
        <AppInput title="Phone Number" subtitle="(832) 523-1603" name="phone" />
      </View>
      <ListItem title="Logout" name="logout" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // alignItems: "center",
    marginBottom: 5,
  },
});

export default AccountScreen;
