import { StatusBar } from "expo-status-bar";
import 'intl-pluralrules';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import globalStyles from "./styles/styles";
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from "./lang/i18n";

const HomeScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{t('hello')}</Text>
      <Text style={globalStyles.text}>{t('welcome')}</Text>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Español" onPress={() => changeLanguage('es')} />
    </View>
  );
};

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HomeScreen />
    </I18nextProvider>
  );
}