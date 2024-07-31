import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";

import HeaderPrimary from "../components/HeaderPrimary";
import BannerDonate from "../components/BannerDonate";

const DashboardScreen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation(); // Obtén t y i18n para traducciones y cambios de idioma
  const { childName } = route.params; // Recibir el valor del nombre

  useEffect(() => {
    const greetingText = `${t("greeting")}, ${childName}!, ${t(
      "greetingcomplement"
    )}`; // Saludo con nombre

    // Usar la función de hablar con el idioma especificado
    Speech.speak(greetingText, {
      language: i18n.language, // Configurar el idioma actual
      pitch: 1,
      rate: 1,
    });
  }, [childName, t, i18n.language]); // Dependencias para ejecutar el efecto cuando cambie el nombre del niño o el idioma

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderPrimary navigation={navigation} childName={childName} />
      <View style={globalStyles.containercenterdash}>
        <Text style={globalStyles.title}>
          {t("titledash")} {childName}
        </Text>
        <Text style={globalStyles.paragraph}>{t("textdash")}</Text>
        <BannerDonate />
      </View>
    </View>
  );
};

export default DashboardScreen;
