import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function ListCategories({ title, subtitle, tags }) {
  return (
    <View style={styles.container}>
      <Text>{title + ": "}</Text>
      {tags && (
        <View style={styles.listTags}>
          <FlatList
            data={tags}
            horizontal={true}
            keyExtractor={(tags) => tags.id.toString()}
            renderItem={({ item }) => (
              <Text style={[styles.tagBox, styles.textBox]}>{item.tag}</Text>
            )}
          />
        </View>
      )}
      {subtitle && <Text style={styles.textBox}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    alignItems: "center",
  },
  listTags: {},
  textBox: {
    backgroundColor: "red",
    padding: 10,
  },
  tagBox: {
    marginRight: 10,
  },
});

export default ListCategories;
