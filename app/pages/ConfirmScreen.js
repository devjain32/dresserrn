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
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../src/models";

const validationSchema = Yup.object().shape({
  input_code: Yup.string().required().label("Input Code"),
});

function ConfirmScreen({ route, navigation }) {
  const { userFirstName, userLastName, userEmail, userPhoneNumber, userPassword } = route.params;
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
            <Text style={styles.name}>Confirm your Email</Text>
            <AppForm
              initialValues={{
                input_code: "",
              }}
              onSubmit={(values) => {
                async function confirmSignUp() {
                  try {
                    await Auth.confirmSignUp(userEmail, values.input_code);
                    await DataStore.save(
                      new User({
                        "FirstName": userFirstName,
                        "LastName": userLastName,
                        "PhoneNumber": userPhoneNumber,
                        "Email": userEmail,
                        "PurchasedItems": [],
                        "CartItems": []
                      })
                    );
                    Auth.signIn(userEmail, userPassword)
                  } catch (error) {
                      console.log('error confirming sign up', error);
                  }
                }
                confirmSignUp();
              }}
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
              onPress={() => {
                async function resendConfirmationCode() {
                  try {
                      await Auth.resendSignUp(userEmail);
                      console.log('code resent successfully');
                  } catch (err) {
                      console.log('error resending code: ', err);
                  }
                }
                resendConfirmationCode();
              }}
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
