import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import MapView, { Marker, Polygon} from "react-native-maps";

const HelloWorldApp = () => {
    //this function
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    //add a list of random coordinates for the marker to display on
    const alaskaCoordinates = [
        { latitude: 71.35776357679594, longitude: -156.04503184533167 },
        { latitude: 71.35776357679594, longitude: -147.97728634533167 },
        { latitude: 60.293065, longitude: -19.907666 },
        { latitude: 60.306396, longitude: -159.527015 },
    ];

    return (
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }} region={region}>
                <Polygon coordinates={alaskaCoordinates} fillColor="rgba(220, 200, 0, 0.3)" />
            </MapView>

            <Text>BA</Text>
        </View>
    );
};
export default HelloWorldApp;
