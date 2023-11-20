import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    opacity: 0.7,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.black,
  },
  subtitle: {
    fontSize: 20,
    color: colors.black,
  },
});
