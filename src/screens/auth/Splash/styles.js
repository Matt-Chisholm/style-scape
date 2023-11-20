import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bg: {
    width: '10%',
    height: '10%',
    opacity: 0.7,
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 50,
    fontFamily: 'Dosis-Regular',
    fontWeight: 'bold',
    color: colors.black,
  },
});
