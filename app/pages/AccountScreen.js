import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Button } from 'react-native-elements';

import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import MenuOpener from "../components/MenuOpener";
import SectionTitle from "../components/SectionTitle";
import Profile from "../components/Profile";
import { Auth } from "aws-amplify";
import AppInput from "../components/AppInput";
import ListItem from "../components/lists/ListItem";

import { API } from 'aws-amplify';
import { listUsers } from '../../src/graphql/queries';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen({ navigation }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchAccDetails = async () => {
      const currUser = await Auth.currentAuthenticatedUser({bypassCache: false});
      let filter = {
        Email: {eq: currUser.attributes.email}
      };
      const accDetails = await API.graphql({ query: listUsers, variables: { filter: filter}});
      setDetails(accDetails.data.listUsers.items[0]);
    };
    fetchAccDetails();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.topPart}>
        <MenuOpener onPress={() => navigation.toggleDrawer()} />
        <SectionTitle text="account" size={50} />
        <Profile link="https://images.unsplash.com/photo-1611410987022-a30a8ff82da3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
      </View>
      <View style={styles.container}>
        <AppInput
          title="Email Address"
          subtitle={details.Email}
          name="email"
        />
        <View
          style={{ width: "100%", height: 1, backgroundColor: colors.primary }}
        />
        <AppInput
          title="Delivery Address"
          subtitle={details.Address}
          name="address"
        />
        <View
          style={{ width: "100%", height: 1, backgroundColor: colors.primary }}
        />
        <AppInput title="Phone Number" subtitle={details.PhoneNumber} name="phone" />
      </View>
      <Button title="Logout" name="logout" onPress={() => Auth.signOut()}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // alignItems: "center",
    marginBottom: 5,
  },
});

export default AccountScreen;
