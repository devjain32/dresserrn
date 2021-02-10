import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors.js";
import Card from "../components/Card";
import SpecificHeader from "../components/SpecificHeader";
import lists from "../config/lists";
import { filterLists } from "../config/filter";

function Specific({ route, navigation }) {
  const category = route.params;
  const newList = filterLists(lists, category.name);
  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        data={newList}
        contentContainerStyle={styles.list}
        keyExtractor={(listings) => listings.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.push("ItemDetails", item)}
          />
        )}
        // ListHeaderComponent={<SpecificHeader name={category.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.backgroundColor,
    marginTop: 20,
  },
  column: {
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Specific;
