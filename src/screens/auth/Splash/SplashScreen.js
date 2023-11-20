import {Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/Button';
import splash from '../../../assets/images/splash.png';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={splash} style={styles.image} />
      <Text style={styles.title}>StyleScape</Text>
      <Text style={styles.subtitle}>Beautiful Furniture for you.</Text>
      <CustomButton title="Get Started" onPress={() => {}} />
      <CustomButton title="Login" onPress={() => {}} />
    </View>
  );
};

export default SplashScreen;
