import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

const HeaderPrimary = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { childName } = route.params || {};
  const { t, i18n } = useTranslation();

  const phrases = [
    t("greeting1"),
    t("greeting2"),
    t("greeting3"),
    t("greeting4"),
    t("greeting5"),
  ];

  const handleSpeak = () => {
    if (childName) {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      Speech.speak(`${childName}, ${randomPhrase}`, {
        language: i18n.language,
        pitch: 1,
        rate: 1,
      });
    } else {
      Speech.speak(t("greeting1"), {
        language: i18n.language,
        pitch: 1,
        rate: 1,
      });
    }
  };

  return (
    <View style={globalStyles.contheaderprimary}>
      <View style={globalStyles.columnheader}>
        <Image
          style={globalStyles.logoprim}
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={globalStyles.columnheader}>
        <TouchableOpacity style={globalStyles.avatar} onPress={handleSpeak}>
          <Image
            style={globalStyles.imgavatar}
            source={require("../assets/avatar.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={globalStyles.columnheader}>
        <TouchableOpacity
          style={globalStyles.btnheader}
          onPress={() => navigation.navigate("Settings")}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderPrimary;
