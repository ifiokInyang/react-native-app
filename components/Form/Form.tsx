import * as React from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";


export default function FeedbackForm () {

    const [firstName, onChangeFirstName] = React.useState<string>("");
    const [lastName, onChangeLastName] = React.useState<string>("");
    const [message, onChangeMessage] = React.useState<string>("");


    return(
    <ScrollView style={formStyles.container}>
        <Text style={formStyles.headerText}>
            How was your visit to Little lemon?
        </Text>
        <Text style={formStyles.descriptionText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>    
        <TextInput 
        value={firstName}
        placeholder="enter your first name here..."
        onChangeText={onChangeFirstName}
        style={formStyles.inputField}
        keyboardType="default"
        />
         <TextInput 
        value={lastName}
        placeholder="enter your last name here..."
        onChangeText={onChangeLastName}
        style={formStyles.inputField}
        keyboardType="default"
        />
         <TextInput 
        value={message}
        placeholder="message..."
        onChangeText={onChangeMessage}
        style={formStyles.inputField}
        keyboardType="default"
        />
    </ScrollView>
    )
}

const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#495E57"
    },
    headerText: {
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
      inputField: {
        borderRadius: 15,
        backgroundColor: "#F4CE14",
        borderWidth: 2,
        borderColor: "blue",
        marginHorizontal: 12,
        marginVertical: 12,
        padding: 8,
      }
})