import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fetchCoordinate} from './IntroPageUI';

const navigation = useNavigation;

const infoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>get me the fire risk for...</Text>
      <TextInput
        style={styles.input}
        placeholder="enter address / leave blank for current location"
      />
      <Button
        title="Submit"
        onPress={() => {
          navigation.navigate('IntroPage');
          fetchCoordinate();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 40,
    // in the center of the screen top-down wise
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default infoScreen;
