import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxElements from "./BoxElements";

const CategoryAnimals = ({ childName }) => {
  const { t, i18n } = useTranslation();
  const translateY = useRef(new Animated.Value(50)).current; // Inicializa el valor de la animación

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t(
      "titlecat1"
    )}!`,
    `¡${t("categorywelcome2")} ${t("titlecat1")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat1")}!`,
    `¡${t("titlecat1")} ${t("categorywelcome4")}!`,
  ];

  useEffect(() => {
    // Detener cualquier reproducción de audio en curso
    Speech.stop();

    // Elegir una frase aleatoria
    const randomPhrase =
      phrasesWithName[Math.floor(Math.random() * phrasesWithName.length)];

    // Reproducir la frase seleccionada en el idioma actual
    Speech.speak(randomPhrase, {
      language: i18n.language, // Cambiar el idioma según la configuración actual
      pitch: 1,
      rate: 1,
    });

    // Iniciar la animación de la imagen
    Animated.timing(translateY, {
      toValue: 0, // Mover la imagen a su posición final
      duration: 300, // Duración de la animación en milisegundos
      useNativeDriver: true, // Usa el driver nativo para mejor rendimiento
    }).start();
  }, [childName, t, i18n.language]);

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.bannercategory, globalStyles.color2]}>
        <View style={globalStyles.contbannetcat}>
          <Text style={[globalStyles.paragraph, globalStyles.alingtextleft]}>
            {t("titlecat0")}
          </Text>
          <Text style={[globalStyles.title, globalStyles.alingtextleft]}>
            {t("titlecat1")}
          </Text>
        </View>

        <Animated.Image
          style={[globalStyles.bannerimg, { transform: [{ translateY }] }]} // Aplica la animación de traducción
          source={require("../assets/items/animals/cat.png")}
        />
      </View>
      <View style={globalStyles.contcategory}>
        <BoxElements
          name={t("horse")}
          image={require("../assets/items/animals/horse.jpg")}
          voice={t("horse")}
        />
        <BoxElements
          name={t("dog")}
          image={require("../assets/items/animals/dog.jpg")}
          voice={t("dog")}
        />
        <BoxElements
          name={t("cat")}
          image={require("../assets/items/animals/cat.png")}
          voice={t("cat")}
        />
        <BoxElements
          name={t("cow")}
          image={require("../assets/items/animals/cow.jpg")}
          voice={t("cow")}
        />
        <BoxElements
          name={t("bird")}
          image={require("../assets/items/animals/bird.jpg")}
          voice={t("bird")}
        />
      </View>
    </View>
  );
};

export default CategoryAnimals;
