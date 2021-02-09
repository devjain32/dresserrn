import React from "react";
import {
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import colors from "../config/colors";
import appStyles from "../config/styles";
import { Auth } from "aws-amplify";
import Constants from "expo-constants";
import { BlurView } from "expo-blur";

function WelcomeScreen(props) {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 150,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#EC5E3A",
        }}
      >
        <Text
          style={{
            fontSize: 80,
            fontFamily: appStyles.fontFamily,
            color: "#FFD280",
          }}
        >
          dresser
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: "#FFD280",
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <ImageBackground
          source={require("../assets/cycling-crop.png")}
          style={{ width: "100%", height: "100%", resizeMode: "center" }}
        ></ImageBackground>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 300,
        }}
      >
        <TouchableOpacity
          onPress={() => Auth.federatedSignIn({ provider: "Google" })}
          style={{
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: "80%",
              resizeMode: "contain",
            }}
            source={require("../assets/google.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;
