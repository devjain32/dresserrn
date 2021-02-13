import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { beginAsyncEvent } from "react-native/Libraries/Performance/Systrace";
import ListCategories from "../components/ListCategories";
import Screen from "../components/Screen";
import appStyles from "../config/styles";
import { filterLists } from "../config/filter";
import lists from "../config/lists";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { API } from 'aws-amplify';
import { getThriftStore } from '../../src/graphql/queries';


function ItemDetails({ route, navigation }) {
  const listing = route.params;
  const [thriftStore, setThriftStore] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      const store = await API.graphql({ query: getThriftStore, variables: { id : listing.thriftstoreID }});
      setThriftStore(store.data.getThriftStore.Name);
      
    };
    fetchStore();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: listing.Images[0] }} />
      </View>
      <View style={styles.titleprice}>
        <Text style={styles.title}>{listing.Name}</Text>
        <View style={styles.pricebox}>
          <Text style={styles.price}>{"$" + listing.Price}</Text>
        </View>
      </View>
      <ListCategories
        title={"Category"}
        subtitle={listing.ItemCategory}
        onPress={() =>
          navigation.push("Specific", { name: listing.ItemCategory })
        }
        // onPress={() => console.log(listing)}
      />
      <ListCategories
        title={"Brand"}
        subtitle={listing.Brand}
        onPress={() => navigation.push("Specific", { name: listing.Brand })}
      />
      <ListCategories
        title={"Thrift Store"}
        subtitle={thriftStore} // need to query the thriftstores as well so we can access that here based on thriftStoreID
        onPress={() =>
          navigation.push("Specific", { name: thriftStore })
        }
      />
      <ListCategories title={"Tags"} tags={listing.tags} />
      <View style={styles.cartContainer}>
        <View style={styles.addtocart}>
          {/*This is for the add to cart button. 
        I need to conditionally render it based on if the item is already in the cart. 
        I'll do that once we load the data and I can view what's already in the cart.*/}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Add " + listing.title + " to cart")}
          >
            <MaterialCommunityIcons
              name="cart"
              size={20}
              color={appStyles.colors.primary}
            />
            <Text style={styles.cartText}> add to cart</Text>
          </TouchableOpacity>
        </View>
        {/* <ListCategories
          title={"Tags"}
          tags={
            listing.tags
          }  we dont have tags in the current database schema 
        />
        <View style={styles.addtocart}>
          This is for the add to cart button. 
        I need to conditionally render it based on if the item is already in the cart. 
        I'll do that once we load the data and I can view what's already in the cart.
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Add " + listing.Name + " to cart")}
          >
            <MaterialCommunityIcons
              name="cart"
              size={20}
              color={appStyles.colors.primary}
            />
            <Text style={styles.cartText}> add to cart</Text>
          </TouchableOpacity> 
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    // alignSelf: "flex-start",
  },
  titleprice: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: appStyles.colors.secondary,
    marginLeft: 10,
  },
  price: {
    fontSize: 18,
    color: appStyles.colors.arrowColor,
  },
  pricebox: {
    backgroundColor: appStyles.colors.primary,
    padding: 10,
    marginRight: 10,
    borderRadius: 6,
  },
  addtocart: {
    width: "80%",
    height: 50,
    backgroundColor: appStyles.colors.arrowColor,
    alignSelf: "center",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: appStyles.colors.primary,
    fontSize: 20,
    fontFamily: appStyles.fontFamily,
  },
  column: {
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  cartContainer: {
    height: "30%",
    width: "100%",
    flexDirection: "column-reverse",
    paddingBottom: 20,
  },
});

export default ItemDetails;
