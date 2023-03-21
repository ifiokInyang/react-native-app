import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Body() {
  return (
    <>
          {/* <ScrollView indicatorStyle={'white'} style={bodyStyles.bodyContainer} > */}
      <View style={bodyStyles.bodyContainer}>
        <Text style={bodyStyles.welcomeText}>Welcome to Little Lemon</Text>
        <Text style={bodyStyles.descriptionText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </View>
    </>
  );
}

const bodyStyles = StyleSheet.create({
  welcomeText: {
    fontSize: 38,
    color: "#EDEFEE",
    paddingBottom: 42,
    paddingTop: 52,
    textAlign: "center"

  },
  descriptionText: {
    fontSize: 25,
    color: "#EDEFEE",
    textAlign: "center"

  },
  bodyContainer: {
    // backgroundColor: "blue",
    paddingHorizontal: 12
    // alignItems: "center",
    // justifyContent: "center"
  },
});
