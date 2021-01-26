import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function CategoryItem({ category, height, color = colors.secondary }) {
  return (
    <View style={[styles.container, { height }]}>
      <Text style={([styles.textBox], { color: { color } })}>
        {category.length >= 11
          ? category.substring(0, 11 - 3) + "..."
          : category}
        {/* {category} */}
      </Text>
      <View style={styles.iconBox}>
        <MaterialIcons
          name="arrow-forward-ios"
          size={12}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    // height: 100,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  iconBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.arrowColor,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 2,
  },
  textBox: {
    marginBottom: 10,
    color: colors.secondary,
    fontSize: 16,
  },
});

export default CategoryItem;
