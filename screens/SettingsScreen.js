import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";

import HeaderSettings from "../components/HeaderSettings";
import BannerDonate from "../components/BannerDonate";

const SettingsScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation(); // Usa useTranslation para obtener t y i18n

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Obtener el idioma actualmente seleccionado
  const currentLanguage = i18n.language;

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderSettings />
      <View style={globalStyles.containercenterdash}>
        <BannerDonate />
        <View style={globalStyles.contoptionssettings}>
          <Text style={globalStyles.subtitle}>{t("titlelang")}</Text>
          <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
            {t("desclang")}
          </Text>
          <View style={globalStyles.contlangselect}>
            <TouchableOpacity
              onPress={() => changeLanguage("en")}
              style={globalStyles.borderbottom}
            >
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "en" && globalStyles.activeLanguage,
                ]}
              >
                🇺🇸 {t("en")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeLanguage("es")}
              style={globalStyles.borderbottom}
            >
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "es" && globalStyles.activeLanguage,
                ]}
              >
                🇪🇸 {t("es")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeLanguage("fr")}
              style={globalStyles.borderbottom}
            >
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "fr" && globalStyles.activeLanguage,
                ]}
              >
                🇫🇷 {t("fr")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage("ja")}>
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "ja" && globalStyles.activeLanguage,
                ]}
              >
                🇯🇵 {t("ja")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
