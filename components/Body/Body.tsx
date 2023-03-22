import * as React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import Footer from "../Footer/Footer";

export default function Body() {
  const [firstName, onChangeFirstName] = React.useState<string>("");

  return (
    <>
      {/* <ScrollView indicatorStyle={'white'} style={bodyStyles.bodyContainer} > */}
      <ScrollView style={bodyStyles.bodyContainer}
      keyboardDismissMode="on-drag">
        <View style={{flex: 5}}>
        <Text style={bodyStyles.welcomeText}>Welcome to Little Lemon</Text>
        <Text style={bodyStyles.descriptionText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
          <TextInput
            value={firstName}
            placeholder="your first name here..."
            onChangeText={onChangeFirstName}
            style={bodyStyles.inputField}
            // keyboardType="default"             
          />
          </View>
        {/* </ScrollView> */}
       
      </ScrollView>
      {/* <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "position" : "height"}> */}
        <View style={bodyStyles.footerContainer}>

          <Footer />
        </View>
        {/* </KeyboardAvoidingView> */}
    </>
  );
}

const bodyStyles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "red"
  },
  welcomeText: {
    fontSize: 38,
    color: "#EDEFEE",
    paddingBottom: 42,
    paddingTop: 52,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 25,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputField: {
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "blue",
    marginHorizontal: 12,
    marginVertical: 12,
    padding: 8,
  },
 
  footerContainer: {
    // flex: 1,
    backgroundColor: "#EE9972",
    width: "100%",
    paddingHorizontal: 23,
    // position: "absolute",
    // top: 100
    // bottom: 0,
    // marginTop: 104
  },
});
