import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";
import HeaderScreen from "../components/HeaderScreen";
import * as Speech from "expo-speech";

const DetailsScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const speak = () => {
    Speech.speak("Hola como estas?");
  };

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderScreen />
      <View style={globalStyles.containercenter}>
        <Image
          style={globalStyles.sons}
          source={require("../assets/son.png")}
        />
        <Text style={globalStyles.title}>Una experiencia personalizada.</Text>
        <Text style={globalStyles.paragraph}>
          Ingresa el nombre del niño / niña para crear una experiencia más
          inmersiva..
        </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Ingresar el nombre del niño o niña"
        />
      </View>
      <View style={globalStyles.containerbutton}>
        <Button title="Speak" onPress={speak} />
        <TouchableOpacity
          style={[globalStyles.button]}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={[globalStyles.buttonText]}>Empecemos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
