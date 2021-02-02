import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      showNext={false}
      showSkip={false}
      bottomBarHighlight={false}
      onDone={() => navigation.navigate("Welcome")}
      transitionAnimationDuration={300}
      pages={[
        {
          backgroundColor: "#EFCF9F",
          image: (
            <Image
              source={require("../assets/onboarding1.png")}
              style={{ width: 400, height: 400, resizeMode: "contain" }}
            />
          ),
          title: "welcome to dresser",
          subtitle: "search your favorite Austin thrift stores right here",
        },
        {
          backgroundColor: "#EBEAFF",
          image: (
            <Image
              source={require("../assets/onboarding2.png")}
              style={{ width: 400, height: 400, resizeMode: "contain" }}
            />
          ),
          title: "delivered",
          subtitle: "we deliver to you by the next day",
        },
        {
          backgroundColor: "#FDF074",
          image: (
            <Image
              source={require("../assets/onboarding3.png")}
              style={{ width: 400, height: 400, resizeMode: "contain" }}
            />
          ),
          title: "not what you expected?",
          subtitle: "no problem! returns are completely free",
        },
        {
          backgroundColor: "#A0C3FF",
          image: (
            <Image
              source={require("../assets/onboarding3.png")}
              style={{ width: 400, height: 400, resizeMode: "contain" }}
            />
          ),
          title: "stay tuned!",
          subtitle: "we are always adding more stuff",
        },
      ]}
    />
    // <Screen style={styles.container}>
    //   <Text>Onboarding Screen</Text>
    //   <TouchableWithoutFeedback onPress={() => navigation.navigate("Welcome")}>
    //     <Text>Login</Text>
    //   </TouchableWithoutFeedback>
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
