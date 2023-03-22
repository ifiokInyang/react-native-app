import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={headerStyles.container}>
      {/* number of lines restricts the text to the number of 
      lines specified and anything beyond that is cut off on the screen */}
      <Text style={headerStyles.text} numberOfLines={1}>
        Little Lemon
      </Text>
      {/* <Text
        style={{ padding: 40, fontSize: 30, color: 'black' }}
        numberOfLines={3}>
        Welcome
        <Text style={{ fontWeight: 'bold' }}> Little Lemon</Text>     {' '}
      </Text> */}
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    // backgroundColor: "#F4CE14", #EE9972, #333333, #EDEFEE,
    backgroundColor: "#EE9972",
    width: "100%"
  },
  text: {
    paddingTop: 50,
    fontSize: 29,
    textAlign: "center"
  },
});
