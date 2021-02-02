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
import { Auth } from "aws-amplify";

function WelcomeScreen(props) {
  return (
    <Screen style={styles.container}>
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
      <View style={styles.textBox}>
        <Text style={styles.text}>dresser</Text>
      </View>
      <TouchableOpacity
        onPress={() => Auth.federatedSignIn({ provider: "Google" })}
      >
        <Image
          style={{ width: "50%", resizeMode: "contain", alignSelf: "center" }}
          source={require("../assets/google.png")}
        />
      </TouchableOpacity>
      {/* <Button
        title="Login with Google"
        onPress={() => Auth.federatedSignIn({ provider: "Google" })}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  formBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
    fontSize: 80,
  },
  textBox: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default WelcomeScreen;
