import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { filterSearch } from "../config/filter";
import lists from "../config/lists";

function SearchScreen(props) {
  const [searchTerm, setSearchTerm] = useState("");
  //   console.log(filterSearch(lists.listings, searchTerm));
  return (
    <View>
      <Text>{searchTerm}</Text>
      <TextInput
        placeholder="Hello"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
    </View>
  );
}

export default SearchScreen;
