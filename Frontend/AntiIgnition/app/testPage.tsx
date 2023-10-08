import React from 'react';
import {View, Text} from 'react-native';


const testPage = () => {
    return (
        <View>
        <Text>Test Page</Text>
        </View>
    );
}
"use strict";

function initMap() {
  const myLatLng = {
    lat: 43.83235549926758,
    lng: -79.37151336669922
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
}
export default testPage();