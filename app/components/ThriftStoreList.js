import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ThriftStoreList({ category }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>{category}</Text>
      <View style={styles.iconBox}>
        <MaterialIcons
          name="arrow-forward-ios"
          size={18}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.arrowColor,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 3,
  },
  textBox: {
    marginBottom: 10,
    color: colors.secondary,
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default ThriftStoreList;
