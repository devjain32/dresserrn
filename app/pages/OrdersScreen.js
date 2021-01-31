import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import SectionTitle from "../components/SectionTitle";
import Profile from "../components/Profile";
import MenuOpener from "../components/MenuOpener";
import SearchContainer from "../components/SearchContainer";
import SectionTitleWithButton from "../components/SectionTitleWithButton";
import Categories from "../components/Categories";
import CategoriesSmall from "../components/CategoriesSmall";
import ThriftStores from "../components/ThriftStores";
import colors from "../config/colors";
import lists from "../config/lists";
import SortBy from "../components/SortBy";
import List from "../components/List";

function OrdersScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <View style={styles.topPart}>
        <MenuOpener onPress={() => navigation.toggleDrawer()} />
        <SectionTitle icon="car-hatchback" text="orders" size={50} />
        <Profile
          onPress={() => navigation.navigate("Account")}
          link="https://images.unsplash.com/photo-1611410987022-a30a8ff82da3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        />
      </View>
      <List text="Orders in Progress" size={30} navigation={navigation} />
      <List text="Previous Orders" size={30} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  sortby: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // alignItems: "center",
    marginBottom: 5,
  },
  view: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.backgroundColor,
  },
});

export default OrdersScreen;
