import { StyleSheet } from 'react-native';
import {colors, spacing, fonts} from './variables'

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  // Añade más estilos según sea necesario
});

export default globalStyles;