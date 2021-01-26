import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";

import ThriftStoreList from "./ThriftStoreList";
import colors from "../config/colors";

function ThriftStores({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ThriftStoreList category={item.name} />}
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

export default ThriftStores;
