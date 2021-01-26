import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function CategoryItemSmall({ category, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        color={colors.dark}
        activeOpacity={0.1}
        onPress={onPress}
      >
        <Text style={styles.text}>{category}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 100,
    height: 35,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  iconBox: {
    width: 20,
    height: 16,
    borderRadius: 10,
    backgroundColor: colors.arrowColor,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 2,
  },
  text: {
    color: colors.secondary,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: "400",
  },
});

export default CategoryItemSmall;
