import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/styles";

const BoxElements = ({ name, image, voice }) => {
  const { i18n } = useTranslation();

  const handlePress = () => {
    Speech.stop(); // Detener cualquier audio en curso

    // Reproducir la frase proporcionada en el idioma actual
    Speech.speak(voice, {
      language: i18n.language,
      pitch: 1,
      rate: 1,
    });
  };

  return (
    <View style={globalStyles.BoxElements}>
      <TouchableOpacity style={globalStyles.touchboxcat} onPress={handlePress}>
        <Text style={[globalStyles.title, globalStyles.alingtextcenter]}>
          {name}
        </Text>
        <Image source={image} style={globalStyles.imagboxelement} />
        <View style={globalStyles.itemaudio}>
          <Ionicons name="volume-high-outline" size={24} color="white" />
        </View>
      </TouchableOpacity> 
    </View>
  );
};

export default BoxElements;
