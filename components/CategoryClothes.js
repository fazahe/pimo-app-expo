import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxElements from "./BoxElements";

const CategoryClothes = ({ childName }) => {
  const { t, i18n } = useTranslation();
  const translateY = useRef(new Animated.Value(50)).current;

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t(
      "titlecat5"
    )}!`,
    `¡${t("categorywelcome2")} ${t("titlecat5")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat5")}!`,
    `¡${t("titlecat5")} ${t("categorywelcome4")}!`,
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
      <View style={[globalStyles.bannercategory, globalStyles.color6]}>
        <View style={globalStyles.contbannetcat}>
          <Text style={[globalStyles.paragraph, globalStyles.alingtextleft]}>
            {t("titlecat0")}
          </Text>
          <Text style={[globalStyles.title, globalStyles.alingtextleft]}>
            {t("titlecat5")}
          </Text>
        </View>

        <Animated.Image
          style={[globalStyles.bannerimg, { transform: [{ translateY }] }]}
          source={require("../assets/items/clothes/cap.png")}
        />
      </View>
      <View style={globalStyles.contcategory}>
        <BoxElements
          name={t("tshirt")}
          image={require("../assets/items/clothes/tshirt.jpg")}
          voice={t("tshirt")}
        />
        <BoxElements
          name={t("pants")}
          image={require("../assets/items/clothes/pants.jpg")}
          voice={t("pants")}
        />
        <BoxElements
          name={t("shoes")}
          image={require("../assets/items/clothes/shoes.jpg")}
          voice={t("shoes")}
        />
        <BoxElements
          name={t("hat")}
          image={require("../assets/items/clothes/hat.jpg")}
          voice={t("hat")}
        />
        <BoxElements
          name={t("jacket")}
          image={require("../assets/items/clothes/jacket.jpg")}
          voice={t("jacket")}
        />
        <BoxElements
          name={t("dress")}
          image={require("../assets/items/clothes/dress.jpg")}
          voice={t("dress")}
        />
        <BoxElements
          name={t("socks")}
          image={require("../assets/items/clothes/socks.jpg")}
          voice={t("socks")}
        />
        <BoxElements
          name={t("gloves")}
          image={require("../assets/items/clothes/gloves.jpg")}
          voice={t("gloves")}
        />
        <BoxElements
          name={t("scarf")}
          image={require("../assets/items/clothes/scarf.jpg")}
          voice={t("scarf")}
        />
        <BoxElements
          name={t("cap")}
          image={require("../assets/items/clothes/cap.png")}
          voice={t("cap")}
        />
      </View>
    </View>
  );
};

export default CategoryClothes;
