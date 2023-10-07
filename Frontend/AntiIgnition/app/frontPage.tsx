import React from "react";
import { View, Text, TextInput} from "react-native";


export default function frontPage() {
    return (
        <View>
        <Text>Front Page</Text>
        <TextInput placeholder="Username"></TextInput>
        <TextInput placeholder="Password"></TextInput>
        </View>
    );
}

