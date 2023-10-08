import React, {PropsWithChildren, useState} from 'react';
//import button
import {StyleSheet, Text, TextInput, StyleProp, Button, View} from 'react-native';

interface ButtonProps {
    color?: string;
}
ComponentButton.defaultProps = {
    color: 'black',
};
  

// export default function ComponentButton(props: PropsWithChildren<ButtonProps>) {
//     return (
        
//         <Button title={props.children} color={props.color} />
//         <Text style={styles.baseText}>{props.children}</Text>
//     );
// }

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },   
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
});