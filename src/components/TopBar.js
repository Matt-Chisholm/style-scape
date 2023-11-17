import * as React from 'react';
import {Appbar, StyleSheet} from 'react-native-paper';

const TopBar = ({backAction, title}) => {
  return (
    <Appbar.Header style={styles.topBar}>
      {backAction && <Appbar.BackAction onPress={backAction} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

export default TopBar;
