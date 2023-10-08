// import React, {useRef} from 'react';
// import {View, Text, PanResponder, Animated} from 'react-native';
import MainPage from './MainPage';
//not sure how well this works
import currentRiskLevel from './MainPage';

import React, {useState, useRef} from 'react';
import {View, Text, PanResponder, Animated} from 'react-native';

const Dropdown = () => {
  const [position, setPosition] = useState(0);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Set the pan responder to be activated only if the gesture is a vertical swipe from the top of the screen
        return (gestureState.dy < -45 && Math.abs(gestureState.dx) < 459) ||
        (gestureState.dy > 45 && Math.abs(gestureState.dx) < 459);
      },
      onPanResponderMove: (evt, gestureState) => {
        // Update the position of the dropdown based on the gesture's dy value
        console.log(gestureState.dy)
        if(gestureState.dy > 0){
          if(position < 0){
            setPosition(0);
          }
          else{
            setPosition(gestureState.dy);
          }
          console.log(position)
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Animate the dropdown to either its open or closed position based on the gesture's dy value
        if (gestureState.dy < -100) {
          Animated.timing(animatedValue, {
            toValue: gestureState.dy < 100 ? -300 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          transform: [{translateY: animatedValue}],
          height: '100%',
          position: 'absolute',
          top: position,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
        }}
        {...panResponder.panHandlers}>
        <Text>Dropdown content goes here</Text>
      </Animated.View>
    </View>
  );
};

export default Dropdown;