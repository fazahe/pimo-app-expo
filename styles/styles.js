import { StyleSheet } from "react-native";
import { colors, spacing, fonts } from "./variables";

const globalStyles = StyleSheet.create({
  containerglobal: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containercenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containercenterdash: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerbutton: {
    flex: 0.15,
    paddingHorizontal: 20,
  },
  contheader: {
    textAlign: "center",
    top: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  settingsheader: {
    top: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:50,
    justifyContent: "left",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 8, 
  },
  settingstitle: {
    marginStart: spacing.large,
    marginTop: spacing.medium,
  },
  logo: {
    width: 100,
    resizeMode: "contain",
  },
  contheaderprimary: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    marginTop: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  columnheader: {
    flex: 1,
    alignItems: "center",
  },
  logoprim: {
    width: 80,
    resizeMode: "contain",
    alignSelf: "flex-start",
    marginBottom: -20,
  },
  avatar: {
    borderColor: colors.secondary,
    marginTop: 10,
    borderWidth: 4,
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative'
  },
  imgavatar: {
    width: 60,
    resizeMode: "contain",
  },
  btnheader: {
    borderColor: colors.secondary,
    marginTop: 10,
    borderWidth: 4,
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: 'flex-end',
    justifyContent: "center",
    alignItems: "center",
  },
  parents: {
    marginTop: -100,
    width: 200,
    resizeMode: "contain",
    marginBottom: spacing.large,
  },
  sons: {
    marginTop: -100,
    width: 180,
    resizeMode: "contain",
    marginBottom: spacing.small,
  },
  title: {
    fontFamily: "nunito-black",
    fontSize: 25,
    color: colors.title,
    marginBottom: spacing.small,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "nunito-black",
    fontSize: 20,
    color: colors.title,
    marginBottom: spacing.small,
    position: 'relative',
    zIndex: 2,
    lineHeight: 22,
  },
  paragraph: {
    fontFamily: "poppins-regular",
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
  paragraph_small: {
    fontFamily: "poppins-regular",
    fontSize: 12,
    color: colors.text,
  },
  button: {
    fontFamily: "nunito-black",
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: colors.secondary,
    color: colors.text,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  },
  buttonText: {
    fontFamily: "nunito-black",
    fontSize: 18,
    color: colors.white,
  },
  input: {
    fontFamily: "nunito-black",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
    width: "100%",
    textAlign: "center",
    paddingVertical: 16,
    marginTop: spacing.medium,
  },
  textdash: {
    textAlign: 'center',
    marginBottom: spacing.large,
  },
  textleft: {
    textAlign: 'left',
  },
  banner: {
    width: '100%',
  },
  buttonbanner: {
    width: '100%',
    backgroundColor: colors.color1,
    padding: spacing.large,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    marginVertical: spacing.large,
    alignItems: "center",
    paddingHorizontal: spacing.medium,
  },
  contbanner: {
    width: '60%',
  },
  contimgbanner: {
    width: '40%',
    alignItems: "center",
    justifyContent: "center",
  },
  imagebanner: {
    width: '80%',
    resizeMode: "contain",
  },
  contlangselect: {
    backgroundColor: colors.white,
    padding: spacing.large,
    marginTop: spacing.medium,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
  },
  conteditname: {
    backgroundColor: colors.white,
    padding: spacing.large,
    marginTop: spacing.medium,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "top",
    justifyContent: "center",
  },
  blockeditname: {
    marginRight: spacing.medium,
    width: '80%',
  },
  languageButtonText: {
    fontFamily: "nunito-bold",
    fontSize: 16,
    paddingVertical: spacing.small,
  },
  borderbottom: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  activeLanguage: {
    color: colors.primary,
  },
  contoptionssettings: {
    marginBottom: 40
  },
  link: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: "poppins-bold",
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 40
  },
  footersettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "top",
    justifyContent: "left",
    marginBottom: spacing.large,
  },
  footerimg: {
    width: '15%',
    resizeMode: "contain",
    marginRight: '5%',
  },
  footercont: {
    width: '80%',
  },
  textfooter: {
    fontFamily: "poppins-regular",
    fontSize: 10,
    opacity: 0.5,
  },
  textopacity: {
    opacity: 0.5,
  },
  footergen: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    textAlign: 'center',
    borderTopColor: colors.border,
    borderTopWidth: 1,
    paddingVertical: spacing.large,
    marginVertical: spacing.large,
  },
  footerlogo: {
    width: 50,
    resizeMode: "contain",
  },
  linkfooter: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    textAlign: 'center',
  },
  contcategory: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  BoxCategory: {
    width: '45.8%', // Ajusta según sea necesario
    height: 200,
    backgroundColor: '#eee',
    borderRadius: 8,
    margin: spacing.small,
    position: 'relative',
    overflow: 'hidden',
  },
  imagboxcat: {
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: -40,
    right: -40,
    zIndex: 1,
  },
  touchboxcat: {
    width: '100%',
    height: '100%',
    position: "relative",
    overflow: 'hidden',
    padding: spacing.medium
  },
  color1: {
    backgroundColor: colors.color1,
  },
  color2: {
    backgroundColor: colors.color2,
  },
  color3: {
    backgroundColor: colors.color3,
  },
  color4: {
    backgroundColor: colors.color4,
  },
  color5: {
    backgroundColor: colors.color5,
  },
  color6: {
    backgroundColor: colors.color6,
  },
  color7: {
    backgroundColor: colors.color7,
  },
  color8: {
    backgroundColor: colors.color8,
  },
});

export default globalStyles;
