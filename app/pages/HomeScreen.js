import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors.js";
import Card from "../components/Card.js";
import HomeScreenHeader from "../components/HomeScreenHeader";
import lists from "../config/lists";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={lists.listings}
        contentContainerStyle={styles.list}
        keyExtractor={(listings) => listings.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ItemDetails", item)}
          />
        )}
        ListHeaderComponent={<HomeScreenHeader navigation={navigation} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default HomeScreen;
