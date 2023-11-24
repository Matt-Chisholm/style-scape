import * as React from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from './ButtonStyles';

const onPress = () => {
  console.log('CustomButton Pressed!');
};

const CustomButton = ({title, onPress}) => (
  <Pressable onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </Pressable>
);

export default CustomButton;
