import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { beginAsyncEvent } from "react-native/Libraries/Performance/Systrace";
import ListCategories from "../components/ListCategories";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { filterLists } from "../config/filter";
import lists from "../config/lists";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

function ItemDetails({ route, navigation }) {
  const listing = route.params;
  const newList = filterLists(lists, listing.category);
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: listing.image }} />
      </View>
      <View style={styles.titleprice}>
        <Text style={styles.title}>{listing.title}</Text>
        <View style={styles.pricebox}>
          <Text style={styles.price}>{"$" + listing.price}</Text>
        </View>
      </View>
      <ListCategories
        title={"Category"}
        subtitle={listing.category}
        onPress={() =>
          navigation.navigate("Specific", { name: listing.category })
        }
        // onPress={() => console.log(listing)}
      />
      <ListCategories
        title={"Brand"}
        subtitle={listing.brand}
        onPress={() => navigation.navigate("Specific", { name: listing.brand })}
      />
      <ListCategories
        title={"Thrift Store"}
        subtitle={listing.thriftStore}
        onPress={() =>
          navigation.navigate("Specific", { name: listing.thriftStore })
        }
      />
      <ListCategories title={"Tags"} tags={listing.tags} />
      <View style={styles.addtocart}>
        {/*This is for the add to cart button. 
        I need to conditionally render it based on if the item is already in the cart. 
        I'll do that once we load the data and I can view what's already in the cart.*/}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => console.log("Add " + listing.title + " to cart")}
        >
          <MaterialCommunityIcons
            name="cart"
            size={20}
            color={colors.primary}
          />
          <Text style={styles.cartText}> add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    // alignSelf: "flex-start",
  },
  titleprice: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: colors.secondary,
    marginLeft: 10,
  },
  price: {
    fontSize: 18,
    color: colors.arrowColor,
  },
  pricebox: {
    backgroundColor: colors.primary,
    padding: 10,
    marginRight: 10,
    borderRadius: 6,
  },
  addtocart: {
    width: "80%",
    height: "5%",
    backgroundColor: colors.arrowColor,
    alignSelf: "center",
    marginTop: "3%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "4%",
  },
  cartText: {
    color: colors.primary,
  },
  column: {
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ItemDetails;
