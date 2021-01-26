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
import Screen from "./Screen";
import SectionTitle from "./SectionTitle";
import Profile from "./Profile";
import MenuOpener from "./MenuOpener";
import SearchContainer from "./SearchContainer";
import SectionTitleWithButton from "./SectionTitleWithButton";
import Categories from "./Categories";
import CategoriesSmall from "./CategoriesSmall";
import ThriftStores from "./ThriftStores";
import colors from "../config/colors";
import lists from "../config/lists";
import SortBy from "./SortBy";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <View style={styles.topPart}>
        <MenuOpener onPress={() => navigation.toggleDrawer()} />
        <SectionTitle text="dresser" size={50} />
        <Profile link="https://images.unsplash.com/photo-1611410987022-a30a8ff82da3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
      </View>
      <SearchContainer />
      <View style={styles.sortby}>
        <SortBy
          placeholder="categories"
          data={lists.categories}
          navigation={navigation}
        />
        <SortBy
          placeholder="brands"
          data={lists.brands}
          navigation={navigation}
        />
        <SortBy
          placeholder="thrift stores"
          data={lists.thriftstores}
          navigation={navigation}
        />
      </View>

      {/* <SectionTitle text="categories" size={20} />
      <CategoriesSmall data={lists.categories} />
      <SectionTitle text="brands" size={20} />
      <CategoriesSmall data={lists.brands} />
      <SectionTitle text="thrift stores" size={20} />
      <CategoriesSmall data={lists.thriftstores} />
      <SectionTitle text="recommended for Dev" size={20} /> */}
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

export default HomeScreen;
