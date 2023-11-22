import * as React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';

const CustomButton = ({title, onPress}) => (
  <Pressable onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
