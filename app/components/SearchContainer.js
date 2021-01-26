import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import colors from "../config/colors";

import { Feather } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

function SearchContainer(props) {
  const word = "search...";
  return (
    <View style={styles.container}>
      <Feather name="search" color={colors.arrowColor} size={40} />
      <View style={styles.searchbox}>
        <TextInput
          style={styles.searchText}
          placeholder={word}
          placeholderTextColor={colors.secondary}
          keyboardType="default"
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginLeft: 20,
    marginRight: 17,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  searchbox: {
    height: "80%",
    width: "85%",
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: colors.primary,
    opacity: 1.0,
    alignItems: "flex-start",
    justifyContent: "center",
    // shadowColor: "gray",
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 0.2,
  },
  searchText: {
    paddingLeft: 20,
    color: colors.secondary,
  },
});

export default SearchContainer;
