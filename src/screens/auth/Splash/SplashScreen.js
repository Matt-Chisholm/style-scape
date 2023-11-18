import {Text, View, Image} from 'react-native';
import React from 'react';
import logo from '../../../assets/images/logo-color.png';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>
        The world's leading online furniture retailer
      </Text>
    </View>
  );
};

export default SplashScreen;
