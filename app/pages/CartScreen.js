import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
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
import ListModal from "../components/ListModal";
import { calcTotal, filterLists } from "../config/filter";
import Card from "../components/Card";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function CartScreen({ navigation }) {
  const newList = filterLists(lists, "Jackets");
  const total = calcTotal(newList);
  return (
    <View style={styles.view}>
      <View style={styles.topPart}>
        <MenuOpener onPress={() => navigation.toggleDrawer()} />
        <SectionTitle text="cart" size={50} />
        <Profile
          onPress={() => navigation.navigate("Account")}
          link="https://images.unsplash.com/photo-1611410987022-a30a8ff82da3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        />
      </View>
      <View style={styles.box}>
        <View style={styles.priceBox}>
          <Text style={styles.totalPriceMessage}>Total Price: </Text>
          <Text style={styles.totalPrice}>{"$" + total}</Text>
        </View>
        <View style={styles.checkout}>
          <View style={styles.checkoutBox}>
            <TouchableWithoutFeedback>
              <Text style={{ color: "black" }}>Hello</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <FlatList
        data={newList}
        keyExtractor={(listings) => listings.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ItemDetails", item)}
            onPressDelete={() => console.log("Delete " + item.title)}
          />
        )}
      />
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
  column: {
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  box: {
    backgroundColor: colors.primary,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 30,
    height: 80,
    borderRadius: 20,
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  totalPriceMessage: {
    marginLeft: 20,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  totalPrice: {
    marginRight: 10,
    fontSize: 20,
    marginRight: 20,
  },
  checkout: {
    width: "100%",
    // height: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutBox: {
    width: "70%",
    height: "50%",
    backgroundColor: "black",
    opacity: 0.1,
    borderRadius: 10,
  },
});

export default CartScreen;
