import * as React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function Footer(){
    return(
        <View style={footerStyles.footerContainer}>
            <Text style={footerStyles.footerText}>All rights reserved by Little Lemon, 2023</Text>
        </View>
    )
}

const footerStyles = StyleSheet.create({
    footerContainer: {
        backgroundColor: "#EE9972",
        width: "100%",
        
    },
    footerText: {
        fontSize: 18,
        textAlign: "center",
        fontStyle: 'italic'
    }
})