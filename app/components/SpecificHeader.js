import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";
import SectionTitle from "../components/SectionTitle";
import { AntDesign } from "@expo/vector-icons";

function Specific({ name }) {
  return (
    <View style={styles.view}>
      <TouchableWithoutFeedback>
        <View style={styles.iconContainer}>
          <AntDesign name="left" size={40} color={colors.dark} />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <SectionTitle text={name} size={50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.backgroundColor,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 15,
  },
  text: {
    color: colors.dark,
    fontSize: 10,
  },
});

export default Specific;
