import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxElements from "./BoxElements";

const CategoryFigures = ({ childName }) => {
  const { t, i18n } = useTranslation();
  const translateY = useRef(new Animated.Value(50)).current;

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t(
      "titlecat3"
    )}!`,
    `¡${t("categorywelcome2")} ${t("titlecat3")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat3")}!`,
    `¡${t("titlecat3")} ${t("categorywelcome4")}!`,
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
      <View style={[globalStyles.bannercategory, globalStyles.color7]}>
        <View style={globalStyles.contbannetcat}>
          <Text style={[globalStyles.paragraph, globalStyles.alingtextleft]}>
            {t("titlecat0")}
          </Text>
          <Text style={[globalStyles.title, globalStyles.alingtextleft]}>
            {t("titlecat3")}
          </Text>
        </View>

        <Animated.Image
          style={[globalStyles.bannerimg, { transform: [{ translateY }] }]}
          source={require("../assets/items/forms/circlepurple.png")}
        />
      </View>
      <View style={globalStyles.contcategory}>
        <BoxElements
          name={t("square")}
          image={require("../assets/items/forms/square.jpg")}
          voice={t("square")}
        />
        <BoxElements
          name={t("circle")}
          image={require("../assets/items/forms/circle.jpg")}
          voice={t("circle")}
        />
        <BoxElements
          name={t("triangle")}
          image={require("../assets/items/forms/triangle.jpg")}
          voice={t("triangle")}
        />
        <BoxElements
          name={t("rectangle")}
          image={require("../assets/items/forms/rectangle.jpg")}
          voice={t("rectangle")}
        />
        <BoxElements
          name={t("oval")}
          image={require("../assets/items/forms/oval.jpg")}
          voice={t("oval")}
        />
        <BoxElements
          name={t("star")}
          image={require("../assets/items/forms/star.jpg")}
          voice={t("star")}
        />
        <BoxElements
          name={t("heart")}
          image={require("../assets/items/forms/heart.jpg")}
          voice={t("heart")}
        />
        <BoxElements
          name={t("diamond")}
          image={require("../assets/items/forms/diamond.jpg")}
          voice={t("diamond")}
        />
        <BoxElements
          name={t("pentagon")}
          image={require("../assets/items/forms/pentagon.jpg")}
          voice={t("pentagon")}
        />
        <BoxElements
          name={t("hexagon")}
          image={require("../assets/items/forms/hexagon.jpg")}
          voice={t("hexagon")}
        />
        <BoxElements
          name={t("red")}
          image={require("../assets/items/forms/red.jpg")}
          voice={t("red")}
        />
        <BoxElements
          name={t("blue")}
          image={require("../assets/items/forms/blue.jpg")}
          voice={t("blue")}
        />
        <BoxElements
          name={t("green")}
          image={require("../assets/items/forms/green.jpg")}
          voice={t("green")}
        />
        <BoxElements
          name={t("yellow")}
          image={require("../assets/items/forms/yellow.jpg")}
          voice={t("yellow")}
        />
        <BoxElements
          name={t("orange")}
          image={require("../assets/items/forms/orange.jpg")}
          voice={t("orange")}
        />
        <BoxElements
          name={t("purple")}
          image={require("../assets/items/forms/purple.jpg")}
          voice={t("purple")}
        />
        <BoxElements
          name={t("rose")}
          image={require("../assets/items/forms/rose.jpg")}
          voice={t("rose")}
        />
        <BoxElements
          name={t("brown")}
          image={require("../assets/items/forms/brown.jpg")}
          voice={t("brown")}
        />
        <BoxElements
          name={t("black")}
          image={require("../assets/items/forms/black.jpg")}
          voice={t("black")}
        />
        <BoxElements
          name={t("white")}
          image={require("../assets/items/forms/white.jpg")}
          voice={t("white")}
        />
      </View>
    </View>
  );
};

export default CategoryFigures;
