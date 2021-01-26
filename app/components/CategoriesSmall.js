import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";

import CategoryItemSmall from "./CategoryItemSmall";
import colors from "../config/colors";
import lists from "../config/lists";

function CategoriesSmall({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CategoryItemSmall category={item.name} />}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 100,
  },
});

export default CategoriesSmall;
