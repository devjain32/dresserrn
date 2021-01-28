import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";

function CardModal({ title, image, subtitle, information }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.box}>
          <Image style={styles.image} source={{ uri: information.image }} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{information.title}</Text>
            <Text style={styles.subtitle}>{"$" + information.price}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <Screen style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            {/* <Text></Text> */}
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 15,
    backgroundColor: colors.primary,
    marginBottom: 20,
    overflow: "hidden",
    flex: 0.48,
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  modalContainer: {
    // alignItems: "center",
    justifyContent: "flex-end",
    // marginTop: 100,
  },
  modalBox: {
    width: "100%",
    height: "90%",
    backgroundColor: colors.backgroundColor,
    opacity: 0.9,
  },
});

export default CardModal;
