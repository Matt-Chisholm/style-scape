import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const CustomButton = ({title, onPress}) => (
  <Button mode="contained" onPress={onPress}>
    {title}
  </Button>
);

const styles = StyleSheet.create({});

export default CustomButton;
