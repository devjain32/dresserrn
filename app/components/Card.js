import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

import colors from "../config/colors";

function Card({ title, image, subtitle, onPress, onPressDelete }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.box}>
        <ImageBackground style={styles.image} source={{ uri: image }}>
          {onPressDelete && (
            <View style={styles.xcontainer}>
              <TouchableWithoutFeedback onPress={onPressDelete}>
                <BlurView intensity={100} tint="default">
                  <Feather name="x" size={20} color="black" />
                </BlurView>
              </TouchableWithoutFeedback>
            </View>
          )}
        </ImageBackground>
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
  xcontainer: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
