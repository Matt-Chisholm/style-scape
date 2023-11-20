import {Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import splash from '../../../assets/images/splash.png';

import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={splash} style={styles.image} />
      <Text style={styles.title}>StyleScape</Text>
    </View>
  );
};

export default SplashScreen;
