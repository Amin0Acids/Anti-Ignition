import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import MapView, {Marker, Polygon, Heatmap} from 'react-native-maps';
import introPage from "./IntroPage";

const HelloWorldApp = () => {
  
  //how this works: latitude will control the up and down movement of the map, longitude will control the left and right movement of the map, latitudeDelta will control the zoom in and out of the map, longitudeDelta will control the zoom in and out of the map, the higher the number the more zoomed in it is
  const [region, setRegion] = useState({
    latitude: 71.35776357679594,
    longitude: -156.04503184533167,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  //add a list of random coordinates for the marker to display on

  const alaskaCoordinates = [
    {latitude: 71.35776357679594, longitude: -156.04503184533167},
    {latitude: 71.35776357679594, longitude: -147.97728634533167},
    {latitude: 72.35776357679594, longitude: -147.97728634533167},
    {latitude: 71.85776357679594, longitude: -147.97728634533167},
    {latitude: 60.293065, longitude: -19.907666},
    {latitude: 60.306396, longitude: -159.527015},
  ];

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} region={region}>
        <Heatmap points={alaskaCoordinates} />
      </MapView>

      <Text>BA</Text>
    </View>
  );
};
export default HelloWorldApp;
