import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors.js";
import Card from "../components/Card.js";
import HomeScreenHeader from "../components/HomeScreenHeader";
import lists from "../config/lists";
import { DataStore } from "@aws-amplify/datastore";
import { Item } from "../../src/models";

function HomeScreen({ navigation }) {
  
  const [items, setItems] = useState([]);

  useEffect( () => {
    const fetchItems = async () => {
      const itemsResults = await DataStore.query(Item)
      setItems(itemsResults);
      console.log(itemsResults);
    }
    fetchItems();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        contentContainerStyle={styles.list}
        keyExtractor={(items) => items.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <Card
            title={item.Name} 
            subtitle={"$" + item.Price}
            image={item.Images[0]} // this will only display the first image
            onPress={() => navigation.navigate("ItemDetails", item)}
          />
        )}
        ListHeaderComponent={<HomeScreenHeader navigation={navigation} />}
        bounces={false}
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
