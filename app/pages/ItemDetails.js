import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";

function ItemDetails({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={{ uri: listing.image }} /> */}

      <Text>{listing.id}</Text>
      <Text>{listing.title}</Text>
      <Text>{listing.price}</Text>
      <Text>{listing.image}</Text>
      <Text>{listing.category}</Text>
      <Text>{listing.brand}</Text>
      <Text>{listing.thriftStore}</Text>
      <Text>{listing.tags}</Text>
      <Text>{listing.status.progress}</Text>
      <Text>{listing.status.destination}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginTop: -100,
  },
});

export default ItemDetails;
