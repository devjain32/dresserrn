import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";
import CategoryItemSmall from "./CategoryItemSmall";

function MenuOpener({ onPress }) {
  // const [modal, setModal] = useState(false);
  return (
    /* <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}> */
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="grip-lines" size={20} color={colors.dark} />
      </View>
    </TouchableWithoutFeedback>

    /* </TouchableWithoutFeedback> 
         <Modal visible={modal} transparent={true} animationType="fade">
        <TouchableWithoutFeedback
          style={styles.touchableContainer}
          onPress={() => setModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalVisible}>
              <View style={styles.textContainer}>
                {/* <Text style={[styles.text, { fontSize: 30 }]}>Home</Text>
                <Text style={styles.text}>Orders</Text>
                <Text style={styles.text}>Profile</Text>
                <Text style={[styles.text, { color: "red" }]}>Log Out</Text>
                <CategoryItemSmall category="Home" color="red" />
                <CategoryItemSmall category="Orders" />
                <CategoryItemSmall category="Profile" />
                <CategoryItemSmall category="Logout" />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    elevation: 10,
    // width: "100%",
    // height: "100%",
  },
  modalVisible: {
    backgroundColor: colors.primary,
    marginTop: Constants.statusBarHeight + 10,
    marginLeft: 20,
    // borderTopRightRadius: 30,
    // borderBottomLeftRadius: 100,
    // borderTopLeftRadius: 10,
    // borderBottomRightRadius: 10,
    borderRadius: 30,
    width: 180,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
  },
  touchableContainer: {
    width: "100%",
    height: "100%",
  },
  text: {
    padding: 10,
    fontSize: 25,
    color: colors.secondary,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MenuOpener;
