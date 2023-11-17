import React from 'react';
import {withTheme} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';

function App({theme}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
