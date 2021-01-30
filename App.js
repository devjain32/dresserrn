import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
<<<<<<< HEAD

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
=======
import AuthNavigator from "./app/navigation/AuthNavigator";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
>>>>>>> 3b8fa04ad4840d5be915dfe76f74657c6565385f
Amplify.configure(awsconfig);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
