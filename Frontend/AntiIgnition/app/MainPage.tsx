import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import MapView, {Marker, Polygon, Heatmap} from 'react-native-maps';

const HelloWorldApp = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  //add a list of random coordinates for the marker to display on
  const markers = [
    {latitude: 37.78825, longitude: -122.4324},
    {latitude: 38.7896386, longitude: -122.421646},
    {latitude: 31.785834, longitude: -122.406417},
    {latitude: 35.798443, longitude: -122.405927},
    {latitude: 39.794302, longitude: -122.39997},
  ];

  const alaskaCoordinates = [
    {latitude: 71.35776357679594, longitude: -156.04503184533167},
    {latitude: 71.35776357679594, longitude: -147.97728634533167},
    {latitude: 60.293065, longitude: -19.907666},
    {latitude: 60.306396, longitude: -159.527015},
  ];

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} region={region}>
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker} />
        ))}
        <Heatmap points={alaskaCoordinates} />
      </MapView>

      <Text>BA</Text>
    </View>
  );
};
export default HelloWorldApp;
