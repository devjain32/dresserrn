import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import Screen from "./Screen";
import CategoryItemSmall from "./CategoryItemSmall";
import Constants from "expo-constants";

function SortBy({ placeholder, data, onSelectItem, selectedItem, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{placeholder}</Text>
          <AntDesign name="right" size={20} color={colors.dark} />
        </View>
      </TouchableWithoutFeedback>
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}
          style={styles.touchableContainer}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CategoryItemSmall
                  category={
                    item.name.length >= 19
                      ? item.name.substring(0, 19) + "..."
                      : item.name
                  }
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("Specific", item);
                    console.log(item);
                  }}
                />
              )}
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight * 3.1,
    backgroundColor: colors.primary,
    width: "50%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 30,
    margin: 20,
    opacity: 1,
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  touchableContainer: {
    width: "100%",
    height: "100%",
  },
});

export default SortBy;
