import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxElements from "./BoxElements";

const CategoryVehicles = ({ childName }) => {
  const { t, i18n } = useTranslation();
  const translateY = useRef(new Animated.Value(50)).current;

  const phrasesWithName = [
    `${t("greeting")} ${childName}! ¡${t("categorywelcome1")} ${t(
      "titlecat4"
    )}!`,
    `¡${t("categorywelcome2")} ${t("titlecat4")}!`,
    `${childName}, ¡${t("categorywelcome3")} ${t("titlecat4")}!`,
    `¡${t("titlecat4")} ${t("categorywelcome4")}!`,
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
      <View style={[globalStyles.bannercategory, globalStyles.color3]}>
        <View style={globalStyles.contbannetcat}>
          <Text style={[globalStyles.paragraph, globalStyles.alingtextleft]}>
            {t("titlecat0")}
          </Text>
          <Text style={[globalStyles.title, globalStyles.alingtextleft]}>
            {t("titlecat4")}
          </Text>
        </View>

        <Animated.Image
          style={[globalStyles.bannerimg, { transform: [{ translateY }] }]}
          source={require("../assets/items/vehicles/car.png")}
        />
      </View>
      <View style={globalStyles.contcategory}>
        <BoxElements
          name={t("motorcycle")}
          image={require("../assets/items/vehicles/motorcycle.jpg")}
          voice={t("motorcycle")}
        />
        <BoxElements
          name={t("truck")}
          image={require("../assets/items/vehicles/truck.jpg")}
          voice={t("truck")}
        />
        <BoxElements
          name={t("car")}
          image={require("../assets/items/vehicles/car.png")}
          voice={t("car")}
        />
        <BoxElements
          name={t("plane")}
          image={require("../assets/items/vehicles/plane.jpg")}
          voice={t("plane")}
        />
        <BoxElements
          name={t("train")}
          image={require("../assets/items/vehicles/train.jpg")}
          voice={t("train")}
        />
        <BoxElements
          name={t("bike")}
          image={require("../assets/items/vehicles/bike.jpg")}
          voice={t("bike")}
        />
        <BoxElements
          name={t("ship")}
          image={require("../assets/items/vehicles/ship.jpg")}
          voice={t("ship")}
        />
        <BoxElements
          name={t("bus")}
          image={require("../assets/items/vehicles/bus.jpg")}
          voice={t("bus")}
        />
        <BoxElements
          name={t("helicopter")}
          image={require("../assets/items/vehicles/helicopter.jpg")}
          voice={t("helicopter")}
        />
        <BoxElements
          name={t("tractor")}
          image={require("../assets/items/vehicles/tractor.jpg")}
          voice={t("tractor")}
        />
        <BoxElements
          name={t("submarine")}
          image={require("../assets/items/vehicles/submarine.jpg")}
          voice={t("submarine")}
        />
        <BoxElements
          name={t("rocket")}
          image={require("../assets/items/vehicles/rocket.jpg")}
          voice={t("rocket")}
        />
        <BoxElements
          name={t("skateboard")}
          image={require("../assets/items/vehicles/skateboard.jpg")}
          voice={t("skateboard")}
        />
        <BoxElements
          name={t("fireengine")}
          image={require("../assets/items/vehicles/fireengine.jpg")}
          voice={t("fireengine")}
        />
        <BoxElements
          name={t("ambulance")}
          image={require("../assets/items/vehicles/ambulance.jpg")}
          voice={t("ambulance")}
        />
        <BoxElements
          name={t("garbagetruck")}
          image={require("../assets/items/vehicles/garbagetruck.jpg")}
          voice={t("garbagetruck")}
        />
      </View>
    </View>
  );
};

export default CategoryVehicles;
