import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxElements from "./BoxElements";

const CategoryAnimals = ({ childName }) => {
  const { t, i18n } = useTranslation();
  const translateY = useRef(new Animated.Value(50)).current;

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t(
      "titlecat1"
    )}!`,
    `¡${t("categorywelcome2")} ${t("titlecat1")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat1")}!`,
    `¡${t("titlecat1")} ${t("categorywelcome4")}!`,
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
          style={[globalStyles.bannerimg, { transform: [{ translateY }] }]}
          source={require("../assets/items/animals/cat.png")}
        />
      </View>
      <View style={globalStyles.contcategory}>
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
          name={t("horse")}
          image={require("../assets/items/animals/horse.jpg")}
          voice={t("horse")}
        />
        <BoxElements
          name={t("duck")}
          image={require("../assets/items/animals/duck.jpg")}
          voice={t("duck")}
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
        <BoxElements
          name={t("elephant")}
          image={require("../assets/items/animals/elephant.jpg")}
          voice={t("elephant")}
        />
        <BoxElements
          name={t("lion")}
          image={require("../assets/items/animals/lion.jpg")}
          voice={t("lion")}
        />
        <BoxElements
          name={t("ape")}
          image={require("../assets/items/animals/ape.jpg")}
          voice={t("ape")}
        />
        <BoxElements
          name={t("tortoise")}
          image={require("../assets/items/animals/tortoise.jpg")}
          voice={t("tortoise")}
        />
        <BoxElements
          name={t("bear")}
          image={require("../assets/items/animals/bear.jpg")}
          voice={t("bear")}
        />
        <BoxElements
          name={t("penguin")}
          image={require("../assets/items/animals/penguin.jpg")}
          voice={t("penguin")}
        />
        <BoxElements
          name={t("frog")}
          image={require("../assets/items/animals/frog.jpg")}
          voice={t("frog")}
        />
        <BoxElements
          name={t("fish")}
          image={require("../assets/items/animals/fish.jpg")}
          voice={t("fish")}
        />
        <BoxElements
          name={t("butterfly")}
          image={require("../assets/items/animals/butterfly.jpg")}
          voice={t("butterfly")}
        />
        <BoxElements
          name={t("snake")}
          image={require("../assets/items/animals/snake.jpg")}
          voice={t("snake")}
        />
        <BoxElements
          name={t("panda")}
          image={require("../assets/items/animals/panda.jpg")}
          voice={t("panda")}
        />
        <BoxElements
          name={t("fox")}
          image={require("../assets/items/animals/fox.jpg")}
          voice={t("fox")}
        />
        <BoxElements
          name={t("mouse")}
          image={require("../assets/items/animals/mouse.jpg")}
          voice={t("mouse")}
        />
        <BoxElements
          name={t("goat")}
          image={require("../assets/items/animals/goat.jpg")}
          voice={t("goat")}
        />
      </View>
    </View>
  );
};

export default CategoryAnimals;
