import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function SectionTitle({ text, size, fontColor = colors.dark }) {
  return (
    <View style={styles.box}>
      <Text style={([styles.text], { fontSize: size, color: fontColor })}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    paddingLeft: 20,
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
});

export default SectionTitle;
