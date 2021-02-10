import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import * as Yup from "yup";

import AppForm from "../components/Forms/AppForm";
import AppButton from "../components/Forms/AppButton";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import SectionTitle from "../components/SectionTitle";

import Screen from "../components/Screen";
import colors from "../config/colors";
import appStyles from "../config/styles";
import { Auth } from "aws-amplify";
import Constants from "expo-constants";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/loginscreenbg.jpg")}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
          }}
        >
          <Text style={styles.name}>Dresser</Text>
          <AppForm
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Log In" />
          </AppForm>
          <TouchableOpacity onPress={() => console.log("Forgot Password")}>
            <View style={styles.forgotContainer}>
              <Text style={{ color: colors.primary, fontSize: 15 }}>
                Forgot Password
              </Text>
            </View>
          </TouchableOpacity>
          <AppButton
            title={"Don't have an account? Sign Up"}
            onPress={() => navigation.navigate("Signup")}
            color="arrowColor"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  name: {
    fontFamily: appStyles.fontFamily,
    color: colors.primary,
    fontSize: 80,
    fontWeight: "bold",
  },
  forgotContainer: {
    marginVertical: 10,
  },
});

export default WelcomeScreen;
