import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";

import HeaderPrimary from "../components/HeaderPrimary";
import BannerDonate from "../components/BannerDonate";

const SettingsScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation(); // Usa useTranslation para obtener t y i18n

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderPrimary />
      <Text style={globalStyles.title}>{t('settings')}</Text>
      <Text style={globalStyles.paragraph}>
        {t('selectLanguage')}
      </Text>
      <TouchableOpacity onPress={() => changeLanguage('en')}>
        <Text style={globalStyles.languageButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('es')}>
        <Text style={globalStyles.languageButtonText}>Español</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('fr')}>
        <Text style={globalStyles.languageButtonText}>Français</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('ja')}>
        <Text style={globalStyles.languageButtonText}>日本語</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
