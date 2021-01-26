import React from "react";
import { View, Text, Button } from "react-native";
import Screen from "../components/Screen";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </Screen>
  );
}

export default WelcomeScreen;
