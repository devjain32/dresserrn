import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors.js";
import CardModal from "./CardModal.js";
import lists from "../config/lists";
import SectionTitle from "./SectionTitle";

function ListModal({ text, size, navigation, data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.list}
        keyExtractor={(listings) => listings.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <CardModal
            // title={item.title}
            // subtitle={"$" + item.price}
            // image={item.image}
            information={item}
          />
        )}
        ListHeaderComponent={
          <SectionTitle text={text} size={size} navigation={navigation} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    // padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.backgroundColor,
    paddingBottom: 25,
  },
  column: {
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ListModal;
