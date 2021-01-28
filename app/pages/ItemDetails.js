import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";

function ItemDetails({ route }) {
  const listing = route.params;
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: listing.image }} />
      </View>
      <View style={styles.text}>
        <Text>{listing.id}</Text>
        <Text>{listing.title}</Text>
        <Text>{listing.price}</Text>
        <Text>{listing.category}</Text>
        <Text>{listing.brand}</Text>
        <Text>{listing.thriftStore}</Text>
        <Text>{listing.tags}</Text>
        <Text>{listing.status.progress}</Text>
        <Text>{listing.status.destination}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {},
});

export default ItemDetails;
