// import React, {useRef} from 'react';
// import {View, Text, PanResponder, Animated} from 'react-native';
import MainPage from './MainPage';
//not sure how well this works
import currentRiskLevel from './MainPage';
import React, {useState, useRef} from 'react';
import {View, Text, PanResponder, Animated} from 'react-native';

const Dropdown = () => {
  let currentPos = -700;
  let lastState = -700;
  const [position, setPosition] = useState(-700);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Set the pan responder to be activated only if the gesture is a vertical swipe from the top of the screen
        lastState = currentPos;
        return (
          (gestureState.dy < -45 && Math.abs(gestureState.dx) < 459) ||
          (gestureState.dy > 45 && Math.abs(gestureState.dx) < 459)
        );
      },
      onPanResponderMove: (evt, gestureState) => {
        // Update the position of the dropdown based on the gesture's dy value
        currentPos = lastState + gestureState.dy;
        //limiter
        if (currentPos < -700) {
          currentPos = -700;
        } else if (currentPos > -300) {
          currentPos = -300;
        }
        // setPosition(currentPos);
        console.log(currentPos);
        // console.log(gestureState.dy);
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Animate the dropdown to either its open or closed position based on the gesture's dy value
        if (gestureState.dy > 25) {
          console.log('Going down');
          Animated.timing(animatedValue, {
            //down
            // toValue: Math.abs(Math.abs(currentPos) - 700),
            // toValue: 400 - (700 + currentPos),
            toValue: 400,
            duration: 300,
            useNativeDriver: true,
          }).start();
          lastState = -300;
        } else if (gestureState.dy < -25) {
          console.log('going up');
          Animated.timing(animatedValue, {
            //up
            // toValue: Math.abs(Math.abs(currentPos) - 700),
            // toValue: 700 + currentPos,
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
          lastState = -700;
        }
      },
    }),
  ).current;

  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, height:"50%"}}>
      <View style={{height: 50, backgroundColor: 'red'}}>
        <Text id="risklevel">RISK LEVEL GOES HERE</Text>
      </View>
      <Animated.View
        style={{
          transform: [{translateY: animatedValue}],
          height: '100%',
          position: 'absolute',
          top: animatedValue,
          left: 0,
          right: 0,
          backgroundColor: 'brown',
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
