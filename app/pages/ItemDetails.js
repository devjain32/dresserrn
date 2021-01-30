import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ListCategories from "../components/ListCategories";
import Screen from "../components/Screen";
import colors from "../config/colors";

function ItemDetails({ route }) {
  const listing = route.params;
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
      <ListCategories title={"Category"} subtitle={listing.category} />
      <ListCategories title={"Brand"} subtitle={listing.brand} />
      <ListCategories title={"Thrift Store"} subtitle={listing.thriftStore} />
      <ListCategories title={"Tags"} tags={listing.tags} />
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
});

export default ItemDetails;
