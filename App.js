import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from './src/screens/auth/Splash/SplashScreen';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SplashScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default App;
