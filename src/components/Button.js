import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const MyComponent = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

const styles = StyleSheet.create({});

export default MyComponent;
