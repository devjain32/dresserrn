import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
} from "react-native";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ListItem({
  title,
  subtitle,
  name,
  size = 50,
  backgroundColor = "#ececec",
  iconColor = "#cecece",
}) {
  return (
    <TouchableHighlight underlayColor={colors.light}>
      <View style={styles.container}>
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name={name}
            color={iconColor}
            size={size * 0.5}
          />
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
