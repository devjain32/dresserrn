import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

import { MaterialIcons } from "@expo/vector-icons";

function SectionTitleWithButton({ text, size, fontColor = colors.primary }) {
  return (
    <View style={styles.box}>
      <Text style={([styles.text], { fontSize: size, color: fontColor })}>
        {text}
      </Text>
      <View style={styles.seeallbox}>
        <Text style={styles.seealltext}>see all</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={18}
          color={colors.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeallbox: {
    width: 110,
    height: 30,
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  seealltext: {
    color: colors.secondary,
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.primary,
  },
});

export default SectionTitleWithButton;
