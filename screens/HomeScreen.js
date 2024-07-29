import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";
import HeaderScreen from "../components/HeaderScreen";

const HomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderScreen />
      <View style={globalStyles.containercenter}>
        <Image
          style={globalStyles.parents}
          source={require("../assets/padres.png")}
        />
        <Text style={globalStyles.title}>{t("hello")}</Text>
        <Text style={globalStyles.paragraph}>{t("welcome")}</Text>
      </View>
      <View style={globalStyles.containerbutton}>
        <TouchableOpacity style={[globalStyles.button]} onPress={() => navigation.navigate("Details")}>
          <Text style={[globalStyles.buttonText]}>Empecemos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
