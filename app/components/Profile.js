import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Profile({ link }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          height: 60,
          width: 60,
          uri: link,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    marginRight: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 60,
    resizeMode: "cover",
  },
});

export default Profile;
