import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";

function Card({ title, image, subtitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.box}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 15,
    backgroundColor: colors.primary,
    marginBottom: 20,
    overflow: "hidden",
    flex: 0.48,
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default Card;
