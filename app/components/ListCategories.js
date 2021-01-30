import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";

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
              <View style={styles.box}>
                <Text style={[styles.tagBox, styles.textBox]}>{item.tag}</Text>
              </View>
            )}
          />
        </View>
      )}
      {subtitle && (
        <View style={styles.box}>
          <Text style={styles.textBox}>{subtitle}</Text>
        </View>
      )}
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
    padding: 10,
  },
  tagBox: {},
  box: {
    backgroundColor: colors.primary,
    marginRight: 10,
    borderRadius: 8,
  },
});

export default ListCategories;
