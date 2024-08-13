import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxElements from "./BoxElements";

const CategoryInsects = ({ childName }) => {
  const { t, i18n } = useTranslation();
  const translateY = useRef(new Animated.Value(50)).current;

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t(
      "titlecat12"
    )}!`,
    `¡${t("categorywelcome2")} ${t("titlecat12")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat12")}!`,
    `¡${t("titlecat12")} ${t("categorywelcome4")}!`,
  ];

  useEffect(() => {
    Speech.stop();

    const randomPhrase =
      phrasesWithName[Math.floor(Math.random() * phrasesWithName.length)];

    Speech.speak(randomPhrase, {
      language: i18n.language,
      pitch: 1,
      rate: 1,
    });

    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [childName, t, i18n.language]);

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.bannercategory, globalStyles.color5]}>
        <View style={globalStyles.contbannetcat}>
          <Text style={[globalStyles.paragraph, globalStyles.alingtextleft]}>
            {t("titlecat0")}
          </Text>
          <Text style={[globalStyles.title, globalStyles.alingtextleft]}>
            {t("titlecat12")}
          </Text>
        </View>

        <Animated.Image
          style={[globalStyles.bannerimg, { transform: [{ translateY }] }]}
          source={require("../assets/items/insects/butterfly.png")}
        />
      </View>
      <View style={globalStyles.contcategory}>
        <BoxElements
          name={t("bee")}
          image={require("../assets/items/insects/bee.jpg")}
          voice={t("bee")}
        />
        <BoxElements
          name={t("ant")}
          image={require("../assets/items/insects/ant.jpg")}
          voice={t("ant")}
        />
        <BoxElements
          name={t("snail")}
          image={require("../assets/items/insects/snail.jpg")}
          voice={t("snail")}
        />
        <BoxElements
          name={t("ladybug")}
          image={require("../assets/items/insects/ladybug.jpg")}
          voice={t("ladybug")}
        />
        <BoxElements
          name={t("cricket")}
          image={require("../assets/items/insects/cricket.jpg")}
          voice={t("cricket")}
        />
        <BoxElements
          name={t("fly")}
          image={require("../assets/items/insects/fly.jpg")}
          voice={t("fly")}
        />
        <BoxElements
          name={t("spider")}
          image={require("../assets/items/insects/spider.jpg")}
          voice={t("spider")}
        />
        <BoxElements
          name={t("butterfly")}
          image={require("../assets/items/insects/butterfly.png")}
          voice={t("butterfly")}
        />
      </View>
    </View>
  );
};

export default CategoryInsects;
