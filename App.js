import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

function App() {

  const [authState, setAuthState] = useState("loading")  
  useEffect(() => {
    const updateAuthState = async () => {
      try {
          // Get current auth user, this throw error if not authenticated
          let user = await Auth.currentAuthenticatedUser({bypassCache: false});
          // No error, change auth state to show page content
          setAuthState("authenticated");
     }
     catch(error){
         // Error, change auth state to redirect user to login page
         setAuthState("unauthenticated");
     }
    }
    // Call AuthState Once
    updateAuthState();
    // Set up Hub to listen for auth event in case user log out
    Hub.listen('auth', updateAuthState);
    return () => Hub.remove('auth', updateAuthState); // cleanup
  }, []);


  return (
    <NavigationContainer theme={navigationTheme}>
      { (authState == "unauthenticated") && <AuthNavigator />}
      { (authState == "authenticated") && <AppNavigator />}
    </NavigationContainer>
  );
}

export default App;
