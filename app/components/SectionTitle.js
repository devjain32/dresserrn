import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function SectionTitle({ text, size, icon, fontColor = colors.dark }) {
  return (
    <View style={styles.box}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={size} color={fontColor} />
      )}
      <Text style={([styles.text], { fontSize: size, color: fontColor })}>
        {" " + text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
});

export default SectionTitle;
