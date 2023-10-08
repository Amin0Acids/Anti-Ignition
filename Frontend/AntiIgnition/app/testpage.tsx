import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
    return( 
    <View style={{ backgroundColor: "#f77481", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.getMeThe}>Get me the fire risk at </Text>

        <TextInput onSubmitEditing={updateTextBox} style={styles.locationTextBox} placeholder="locationPutHere"></TextInput>
        <Text id="ahaha" > </Text>
    </View>
    );  
}

//styles
function updateTextBox(){
//update the ahaha id textbox to the submitted text
    

}

const styles = StyleSheet.create({
    
    locationTextBox: {
        borderColor:"black",
        borderWidth:5,
        justifyContent:"center", 
        textAlign:"center"
    },
    getMeThe: {
      fontSize: 20,
      fontWeight: 'bold',
    },
});