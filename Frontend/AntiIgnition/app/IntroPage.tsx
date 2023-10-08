import './main.css';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
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
  function postCoordinate(latitude: number, longitude: number) {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: String(latitude),
        longitude: String(longitude),
      }),
    })
      .then(response => response.json())
      .then(data => {})
      .catch(error => console.log(error));
  }

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    // Get the user's current location
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AntiIgnition</h1>
      </header>
    </div>
  );
}
export default IntroPageUI;
