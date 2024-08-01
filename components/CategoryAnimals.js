import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

const CategoryAnimals = ({ childName }) => {
  const { t, i18n } = useTranslation();

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t("titlecat1")}!`,
    `¡${t("categorywelcome2")} ${t("titlecat1")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat1")}!`,
    `¡${t("titlecat1")} ${t("categorywelcome4")}!`,
  ];

  useEffect(() => {
    // Detener cualquier reproducción de audio en curso
    Speech.stop();

    // Elegir una frase aleatoria
    const randomPhrase = phrasesWithName[Math.floor(Math.random() * phrasesWithName.length)];

    // Reproducir la frase seleccionada en el idioma actual
    Speech.speak(randomPhrase, {
      language: i18n.language, // Cambiar el idioma según la configuración actual
      pitch: 1,
      rate: 1,
    });
  }, [childName, t, i18n.language]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{t("titlecat1")}</Text>
    </View>
  );
};

export default CategoryAnimals;
