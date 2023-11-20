import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  title: {
    position: 'absolute',
    top: 200,
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
