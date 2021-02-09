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

import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import SectionTitle from "../components/SectionTitle";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { Auth } from "aws-amplify";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = Yup.object().shape({	
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  phone_number: Yup.string().required().matches(phoneRegExp, 'Phone number is not valid').label("Phone Number"),
  address: Yup.string().required().label("Delivery Address"),	
  password: Yup.string().required().min(4).label("Password"),	
});

function WelcomeScreen(props) {
  return (
    <Screen style={styles.container}>
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
      <View style={styles.textBox}>
        <Text style={styles.text}>dresser</Text>
      </View>

      <AppForm	
        initialValues={{ given_name: "", family_name: "", email: "", phone_number: "", address: "", password: "" }}	
        onSubmit={(values) => console.log(values)}	
        validationSchema={validationSchema}	
      >	
        <AppFormField	
          autoCapitalize="none"	
          autoCorrect={false}	
          icon="account-circle"	
          keyboardType="default"	
          name="given_name"	
          placeholder="First Name"	
          textContentType="givenName"	
        />	
        <AppFormField	
          autoCapitalize="none"	
          autoCorrect={false}	
          icon="account-circle-outline"	
          keyboardType="default"	
          name="family_name"	
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
          icon="map-marker"	
          keyboardType="default"	
          name="address"	
          placeholder="Delivery Address"	
          textContentType="fullStreetAddress"	
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
        <SubmitButton title="Sign Up"/>	
      </AppForm>  

      {/* <TouchableOpacity
        onPress={() => Auth.federatedSignIn({ provider: "Google" })}
      >
        <Image
          style={{ width: "50%", resizeMode: "contain", alignSelf: "center" }}
          source={require("../assets/google.png")}
        />
      </TouchableOpacity> */}
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
