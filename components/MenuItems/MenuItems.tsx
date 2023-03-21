import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { ItemProp } from "../../utils/Interfaces";
import { green, menuItemsToDisplay, yellow } from "./MenuItemsArray";
import Item from "./SingleMenuItem";



const MenuItems = () => {
  const renderItem = ({item}:ItemProp) => <Item name={item.name} />;

  return (
    <View style={menuStyles.menuContainer}>
      {/* <ScrollView
        style={menuStyles.scrollView}
        horizontal={false}
        indicatorStyle={"white"}
      > */}
        <Text style={menuStyles.menuText}>View Menu</Text>
        <FlatList data={menuItemsToDisplay} renderItem={renderItem} />
      {/* </ScrollView> */}
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  menuContainer: {
    flex: 0.75,
  },
  scrollView: {
    padding: 40,
    backgroundColor: green,
  },
  menuText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: "white",
    textAlign: "center"
  },
  listItems: {
    color: yellow,
    fontSize: 22,
  },
});
