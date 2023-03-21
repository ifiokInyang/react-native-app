import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList, SectionList } from "react-native";
import { ItemProp } from "../../utils/Interfaces";
import Footer from "../Footer";
import { green, menuItemsArray, menuItemsToDisplay, yellow } from "./MenuItemsArray";
import Item from "./SingleMenuItem";



const Separator = () => <View style={menuStyles.separator} />
const Header = () =>  <Text style={menuStyles.menuText}>View Menu</Text>
const ListFooter = () => <Footer />


const MenuItems = () => {
  const renderItem = ({item}:ItemProp) => <Item name={item.name} price={item.price} />;

  const renderItems = ({item}: ) => <Item name={item} />
  return (
    <View style={menuStyles.menuContainer}>
      {/* <ScrollView
        style={menuStyles.scrollView}
        horizontal={false}
        indicatorStyle={"white"}
      > */}
        {/* <FlatList data={menuItemsToDisplay} 
        keyExtractor={Item => Item.id} 
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={ListFooter}
        /> */}
        <SectionList 
        sections={menuItemsArray}
        renderItem={renderItems}
        />
      {/* </ScrollView> */}
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  menuContainer: {
    flex: 1,
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
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE"
  }
});
