import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";
import {
  ItemProp,
  SectionListProps,
  SectionDataProps,
  TitleProps,
} from "../../utils/Interfaces";
import Footer from "../Footer/Footer";
import {
  green,
  menuItemsArray,
  menuItemsToDisplay,
  yellow,
} from "./MenuItemsArray";
import Item from "./SingleMenuItem";

const Separator = () => <View style={menuStyles.separator} />;
const Header = () => <Text style={menuStyles.menuText}>View Menu</Text>;
const ListFooter = () => {
  return (
    <View style={menuStyles.footerContainer}>
      <Text
        style={{
          color: "white",
          fontSize: 22,
          textAlign: "center",
          paddingHorizontal: 23,
        }}
      >
        All Rights Reserved @ Little Lemon 2023
      </Text>
    </View>
  );
};

const MenuItems = () => {
  //   const renderItem = ({item}:ItemProp) => <Item name={item.name} price={item.price} />;

  const renderItems = ({ item }: SectionDataProps) => {
    return <Item name={item.name} price={item.price} />;
  };

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: TitleProps;
  }) => <Text style={menuStyles.sectionText}>{title}</Text>;

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
      {/* <SectionList
      keyExtractor={(item, index) => item + index}
        sections={menuItemsArray}
        renderItem={renderItems}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={ListFooter}
      /> */}
      <SectionList
        keyExtractor={(item, index) => item.name + index}
        sections={menuItemsArray}
        renderItem={renderItems}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        // ListFooterComponent={ListFooter}
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
  footerContainer: {
    flex: 2.5,
    // backgroundColor: "red"
  },
  scrollView: {
    padding: 40,
    backgroundColor: green,
  },
  menuText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: "white",
    textAlign: "center",
  },
  listItems: {
    color: yellow,
    fontSize: 22,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  sectionText: {
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 27,
  },
});

// backgroundColor: '#fbdabb',
