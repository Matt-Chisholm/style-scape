import {Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import bg from '../../../assets/images/bg.jpg';

import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg} />
      <Text style={styles.title}>StyleScape</Text>
    </View>
  );
};

export default SplashScreen;
