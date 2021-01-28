import React from "react";
import {
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Platform,
  View,
} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import SectionTitle from "../components/SectionTitle";

import colors from "../config/colors";
import { Auth } from 'aws-amplify'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
      <View style={styles.textBox}>
        <Text style={styles.text}>dresser</Text>
      </View>

      <AppForm
        initialValues={{ email: "", password: "" }}
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
        <SubmitButton title="Login" />
      </AppForm>
      <Button title="Login with Google" onPress = {() => Auth.federatedSignIn({ provider: "Google"})}/>
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

export default LoginScreen;
