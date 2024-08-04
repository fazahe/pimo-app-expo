import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxElements from "./BoxElements";

const CategoryFood = ({ childName }) => {
  const { t, i18n } = useTranslation();
  const translateY = useRef(new Animated.Value(50)).current;

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t(
      "titlecat2"
    )}!`,
    `¡${t("categorywelcome2")} ${t("titlecat2")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat2")}!`,
    `¡${t("titlecat2")} ${t("categorywelcome4")}!`,
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
      <View style={[globalStyles.bannercategory, globalStyles.color4]}>
        <View style={globalStyles.contbannetcat}>
          <Text style={[globalStyles.paragraph, globalStyles.alingtextleft]}>
            {t("titlecat0")}
          </Text>
          <Text style={[globalStyles.title, globalStyles.alingtextleft]}>
            {t("titlecat2")}
          </Text>
        </View>

        <Animated.Image
          style={[globalStyles.bannerimg, { transform: [{ translateY }] }]}
          source={require("../assets/items/food/sandwich.png")}
        />
      </View>
      <View style={globalStyles.contcategory}>
        <BoxElements
          name={t("pizza")}
          image={require("../assets/items/food/pizza.jpg")}
          voice={t("pizza")}
        />
        <BoxElements
          name={t("icecream")}
          image={require("../assets/items/food/icecream.jpg")}
          voice={t("icecream")}
        />
        <BoxElements
          name={t("apple")}
          image={require("../assets/items/food/apple.jpg")}
          voice={t("apple")}
        />
        <BoxElements
          name={t("banana")}
          image={require("../assets/items/food/banana.jpg")}
          voice={t("banana")}
        />
        <BoxElements
          name={t("donuts")}
          image={require("../assets/items/food/donuts.jpg")}
          voice={t("donuts")}
        />
        <BoxElements
          name={t("sandwich")}
          image={require("../assets/items/food/sandwich.png")}
          voice={t("sandwich")}
        />
      </View>
    </View>
  );
};

export default CategoryFood;
