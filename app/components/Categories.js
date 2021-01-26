import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";

import CategoryItem from "./CategoryItem";
import colors from "../config/colors";
import lists from "../config/lists";

// const categories = [
//   {
//     id: 1,
//     name: "Jackets",
//   },
//   {
//     id: 2,
//     name: "Suits",
//   },
//   {
//     id: 3,
//     name: "Hoodies",
//   },
//   {
//     id: 4,
//     name: "Party",
//   },
// ];

function Categories({ data, height }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CategoryItem category={item.name} height={height} />
      )}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});

export default Categories;
