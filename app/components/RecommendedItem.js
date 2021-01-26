import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

function RecommendedItem({ source, item, price }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          height: 60,
          width: 60,
          uri: source,
        }}
      />
      <View style={styles.itemContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.length >= 30 ? item.substring(0, 30 - 3) + "..." : item}
        </Text>
        <View style={styles.priceBox}>
          <Text style={styles.priceColor}>${price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 11,
  },
  image: {
    borderRadius: 60,
    resizeMode: "cover",
  },
  itemContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    height: 50,
    margin: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  priceBox: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.arrowColor,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  priceColor: {
    color: colors.secondary,
  },
  title: {
    color: colors.arrowColor,
    marginLeft: 20,
  },
});

export default RecommendedItem;
