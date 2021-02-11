import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(awsconfig);

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
