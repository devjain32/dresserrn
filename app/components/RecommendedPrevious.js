import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import RecommendedItem from "./RecommendedItem";

function RecommendedPrevious(props) {
  return (
    <View style={styles.container}>
      <RecommendedItem
        item="Jacket"
        price="15.46"
        source="https://picsum.photos/200/300"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
});

export default RecommendedPrevious;
