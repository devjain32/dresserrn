import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
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
import { Keyboard } from "react-native";

const phoneRegExp = /^(\+\d{1,2})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\s?$/;

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  phone_number: Yup.string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid")
    .label("Phone Number"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignupScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                password: "",
              }}
              onSubmit={(values) => {
                if (values.phone_number.charAt(0) != "+") {
                  values.phone_number = values.phone_number.match(/\d/g);
                  values.phone_number = values.phone_number.join("");
                  values.phone_number = "+1" + values.phone_number; // fine for now since assuming the number will be a USA number
                }
                console.log(values.phone_number);
                async function signUp() { 
                  try {
                    const { user } = await Auth.signUp({
                      username: values.email,
                      password: values.password,
                      attributes: {
                        email: values.email,
                        phone_number: values.phone_number, // optional - E.164 number convention
                        given_name: values.first_name,
                        family_name: values.last_name,
                      },
                    });
                    console.log(user);
                    navigation.navigate("Confirm", { 
                      userFirstName: values.first_name, 
                      userLastName: values.last_name,
                      userEmail: values.email, 
                      userPhoneNumber: values.phone_number, 
                      userPassword: values.password })
                  } catch (error) {
                    console.log("error signing up:", error);
                  }
                }
                signUp();
              }}
              validationSchema={validationSchema}
            >
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="account-circle"
                keyboardType="default"
                name="first_name"
                placeholder="First Name"
                textContentType="givenName"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="account-circle-outline"
                keyboardType="default"
                name="last_name"
                placeholder="Last Name"
                textContentType="familyName"
              />
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
                icon="phone"
                keyboardType="phone-pad"
                name="phone_number"
                placeholder="Phone Number"
                textContentType="telephoneNumber"
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
              <SubmitButton title="Sign Up" />
            </AppForm>
            <AppButton
              title={"Back to Login"}
              onPress={() => navigation.navigate("Welcome")}
              color="arrowColor"
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
});

export default SignupScreen;
