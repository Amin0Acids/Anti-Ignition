import React, {useEffect, useState} from 'react';
import {View, Text, PanResponder, Animated} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import SwipeableMainPage from './popupPage';
export let longitudes: number[];
export let latitudes: number[];
export let riskLevels: number[];

function IntroPageUI() {
  function fetchCoordinate() {
    fetch('', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        latitudes = data.latitudes;
        longitudes = data.longitudes;
        riskLevels = data.riskLevels;
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    // Get the user's current location
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <SwipeableMainPage />
        <Text style={{fontSize: 8}}>AntiIgnition</Text>
      </View>
    </View>
  );
}
export default IntroPageUI;
