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

// const phoneRegExp = /^(\+\d{1,2})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const validationSchema = Yup.object().shape({
  input_code: Yup.string().required().label("Input Code"),
});

function ConfirmScreen({ navigation }) {
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
            <Text style={styles.name}>Confirm your Number</Text>
            <AppForm
              initialValues={{
                input_code: "",
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                keyboardType="phone-pad"
                name="input_code"
                placeholder="Security Code"
                textContentType="oneTimeCode"
              />
              <SubmitButton title="Submit" />
            </AppForm>
            <AppButton
              title={"Resend Code"}
              onPress={() => console.log("Resend code")}
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
    fontSize: 50,
    justifyContent: "center",
    fontWeight: "bold",
  },
});

export default ConfirmScreen;
