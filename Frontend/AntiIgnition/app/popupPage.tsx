import React, {useRef} from 'react';
import {View, Text, PanResponder, Animated} from 'react-native';
import MainPage from './MainPage';
//not sure how well this works
import currentRiskLevel from './MainPage';


const SwipeableMainPage = () => {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Set the pan responder to be activated only if the gesture is a vertical swipe from the top of the screen
        return (
          (gestureState.dy < -45 && Math.abs(gestureState.dx) < 45) ||
          (gestureState.dy > 45 && Math.abs(gestureState.dx) < 45)
        );
      },
      onPanResponderRelease: (evt, gestureState) => {
        // If the swipe is released before reaching the threshold, animate the component back to its original position
        if (gestureState.dy < -45 || gestureState.dy > 45) {
          Animated.timing(animatedValue, {
            toValue: gestureState.dy < -45 ? -300 : 0,
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

  const animatedValue = useRef(new Animated.Value(-300)).current;

  return (
    <View style={{flex: 1}}>
        <View style={{height: 50, backgroundColor: 'red'}}>
            <Text id="risklevel">RISK LEVEL GOES HERE</Text>
        </View>
      <Animated.View
        style={{
          transform: [{translateY: animatedValue}],
          height: '100%',
        }}
        {...panResponder.panHandlers}>
        <MainPage />
      </Animated.View>
    </View>
  );
};

export default SwipeableMainPage;
