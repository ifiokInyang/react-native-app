import { View, Text, StyleSheet } from "react-native";
import { yellow } from "./MenuItemsArray";

const Item = ({ name }: { name: string }) => {
    return (
      <View style={menuStyles.menuContainer}>
        <Text style={menuStyles.listItems}>{name}</Text>
      </View>
    );
  };

  export default Item;

  const menuStyles = StyleSheet.create({
    menuContainer: {
      flex: 0.75,
      paddingLeft: 22

    },
    menuText: {
        fontSize: 40,
        flexWrap: "wrap",
        color: "white",
      },
      listItems: {
        color: yellow,
        fontSize: 22,
      },
})