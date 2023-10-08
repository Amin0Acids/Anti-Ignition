import React, {useState, useRef} from "react";
import { View, Text, TextInput, StyleSheet, PanResponder, Animated } from "react-native";
import dropdown from "../App";

interface dropdownProps {
    topBoundary: number; //relative to the top of the box
    bottomBoundary: number; //position is relative to the top of the box
    height: number;
}

//add default props
Dropdown.defaultProps = {
    topBoundary: 0,
    bottomBoundary: 500,
    height: 600,
}

var counter = 0;

function Dropdown (props: dropdownProps){
    let extended = false;
    let inAnimation = false;

    const [targetPosition, setTarget] = useState(props.topBoundary); //init position of dropdown
    const [gesturePosition, setGesturePosition] = useState({x: 0, y: 0}); //init position of gesture
  
    const animatedValue = useRef(new Animated.Value(props.topBoundary + 150)).current;
  
    const panResponder = useRef(
    
      PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
          // Set to be pan responder to be activated only if the gesture is on box (or top of screen)
          
          console.log("activated",counter++);
          return (
            (extended? gestureState.y0 < (props.bottomBoundary + props.height) : 
            gestureState.y0 < (props.bottomBoundary + props.height + 150)) //if at top, check if gesture is on box + 150 pixels leeway
            //check if gesture is on box
            );
        },
        onPanResponderMove: (evt, gestureState) => {
          // Update the position of the dropdown based on the gesture's dy value
          
        //save gesture position in a variable
          setGesturePosition({x: gestureState.x0, y: gestureState.y0});

          //when moving, set position to be the box position + the gesture's change in Y value
          setTarget(targetPosition + gestureState.dy);

          console.log("position", {x: gestureState.x0, y: gestureState.y0});
          // console.log(gestureState.dy);
        },
        onPanResponderRelease: (evt, gestureState) => {
          // Animate the dropdown to either its open or closed position based on the gesture's dy value
          if (gestureState.dy > 25) {
            console.log('Going down');
            
            extended = true;
            //go to bottom 
            
            //find the gap between current and final location 
            animatedValue.setValue(targetPosition - props.bottomBoundary); //update it to current position
            


            setTarget(props.bottomBoundary); //update it to target
            Animated.timing(animatedValue, {
              //down
              // toValue: Math.abs(Math.abs(currentPos) - 700),
              toValue: 0, //animate the gap
              duration: 300,
              useNativeDriver: true,
            }).start();

          } else if (gestureState.dy < -25) {
            console.log('going up');

            extended = false;

            animatedValue.setValue(targetPosition - props.topBoundary); //update it to current position

            Animated.timing(animatedValue, {
              //up
              // toValue: Math.abs(Math.abs(currentPos) - 700),
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start();
          } else if(gestureState.dy < 25 && gestureState.dy > -25){
            //if not moved, animate back to original position
            console.log("not moved");

            if(extended){
                animatedValue.setValue(targetPosition - props.topBoundary); //update it to current position
            } else {
                animatedValue.setValue(targetPosition - props.bottomBoundary); //update it to current position
            }
            Animated.timing(animatedValue, {
              //up
              // toValue: Math.abs(Math.abs(currentPos) - 700),
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start();
          }
        },
      }),
    ).current;

    return (
      <View style={{flex: 1}}>
        
        <Animated.View
          style={{
            transform: [{translateY: animatedValue}],
            height: 500,
            position: 'absolute',
            top: targetPosition,
            left: 0,
            right: 0,
            backgroundColor: 'black',
            padding:5,
          }}
          {...panResponder.panHandlers}>
            <View style={{height: 50, backgroundColor: '#acc3e8', flex:1}}>
              <Text id="risklevel">RISK LEVEL GOES HERE</Text>
            </View>
        </Animated.View>
      </View>
    );
};
  
const styles = StyleSheet.create({
animatedView: {

    

}
});


export default Dropdown;
