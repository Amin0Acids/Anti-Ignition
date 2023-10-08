import React, { useEffect, useState } from 'react';
import { View, Text, PanResponder } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
export let longitudes: number[];
export let latitudes: number[];
export let riskLevels: number[];


interface draggableWindowProps{
  color?: string; //color of the draggable window
  height?: number; //height of the draggable window
  dragY?: boolean;
  dragX?: boolean;  // if you want to limit drag to one axis
  limitY?: number;
  limitX?: number; //if you want to limit the swipping distance
  snapY?: number; //if swiping fast enough, it will go fully to the limit
  snapX?: number;
}


export function Draggable(props: draggableWindowProps){
  const [dragging, setDragging] = useState(false); //set dragging variable to false and link a function to change it
  const [position, setPosition] = useState({x:0, y:0}); //same thing except for position

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: (event, gestureState) => {
      if(props.dragY){
        setPosition({x: 0, y: gestureState.dy});
      }
      
    },

    onPanResponderRelease: (event, gestureState) => {
      setDragging(false);
      setPosition({x:0, y:0});
    }
    
  });

  return(
    <View>
      <View style={{backgroundColor: props.color, height: props.height}}>
        <Text>Draggable Window</Text>
      </View>
    </View>
  );
}


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
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={{flex:1}}>
      <View style={{flex:1, backgroundColor:"red"}}>
          <Text style={{fontSize:8}}>AntiIgnition</Text>
      </View>
      <View style={{flex:2}}>
      </View>
    </View>
  );
}
export default IntroPageUI;
