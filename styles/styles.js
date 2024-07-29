import { StyleSheet } from 'react-native';
import {colors, spacing, fonts} from './variables'

const globalStyles = StyleSheet.create({
  containerglobal: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containercenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  containerbutton: {
    flex: 0.15,
    paddingHorizontal: 32,
  },
  contheader: {
    textAlign: "center",
    top: 0,
    left: 0,
    width: "100%",
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
  },
  parents: {
    marginTop: -32,
    width: 200,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'nunito-black',
    fontSize: 25,
    color: colors.title,
    marginBottom: spacing.large,
  },

  paragraph: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    color: colors.text,
    textAlign: "center",
  },
  button: {
    fontFamily: 'nunito-black',
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: colors.secondary,
    color: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  buttonText: {
    fontFamily: 'nunito-black',
    fontSize: 16,
  },
});

export default globalStyles;