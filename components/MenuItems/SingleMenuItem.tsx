import { View, Text, StyleSheet } from "react-native";
import { SectionListProps } from "../../utils/Interfaces";
import { yellow } from "./MenuItemsArray";

// const Item = ({ name, price }: { name: string, price: string }) => {
    const Item =({ name, price }: {name: string, price: string}) => {
    return (
      <View style={menuStyles.menuContainer}>
        <Text style={menuStyles.listItems}>{name}</Text>
        <Text style={menuStyles.listPrice}>{price}</Text>
      </View>
    );
  };

  export default Item;

  const menuStyles = StyleSheet.create({
    menuContainer: {
      flex: .75,
    //   paddingLeft: 22,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 19,
      paddingHorizontal: 23
    },
      listItems: {
        color: yellow,
        fontSize: 22,
        marginBottom: 18
      },
      listPrice: {
        color: yellow,
        fontSize: 22,
      },
})