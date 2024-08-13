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
          name={t("bread")}
          image={require("../assets/items/food/bread.jpg")}
          voice={t("bread")}
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
        <BoxElements
          name={t("cheese")}
          image={require("../assets/items/food/cheese.jpg")}
          voice={t("cheese")}
        />
        <BoxElements
          name={t("chicken")}
          image={require("../assets/items/food/chicken.jpg")}
          voice={t("chicken")}
        />
        <BoxElements
          name={t("cookie")}
          image={require("../assets/items/food/cookie.jpg")}
          voice={t("cookie")}
        />
        <BoxElements
          name={t("rice")}
          image={require("../assets/items/food/rice.jpg")}
          voice={t("rice")}
        />
        <BoxElements
          name={t("eggs")}
          image={require("../assets/items/food/eggs.jpg")}
          voice={t("eggs")}
        />
        <BoxElements
          name={t("spaghetti")}
          image={require("../assets/items/food/spaghetti.jpg")}
          voice={t("spaghetti")}
        />
        <BoxElements
          name={t("soup")}
          image={require("../assets/items/food/soup.jpg")}
          voice={t("soup")}
        />
        <BoxElements
          name={t("hamburger")}
          image={require("../assets/items/food/hamburger.jpg")}
          voice={t("hamburger")}
        />
        <BoxElements
          name={t("hotdog")}
          image={require("../assets/items/food/hotdog.jpg")}
          voice={t("hotdog")}
        />
        <BoxElements
          name={t("salad")}
          image={require("../assets/items/food/salad.jpg")}
          voice={t("salad")}
        />
        <BoxElements
          name={t("chocolate")}
          image={require("../assets/items/food/chocolate.jpg")}
          voice={t("chocolate")}
        />
      </View>
    </View>
  );
};

export default CategoryFood;
