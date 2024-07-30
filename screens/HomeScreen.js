import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";
import HeaderScreen from "../components/HeaderScreen";

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderScreen />
      <View style={globalStyles.containercenter}>
        <Image
          style={globalStyles.parents}
          source={require("../assets/parents.png")}
        />
        <Text style={globalStyles.title}>{t("titlewelcome")}</Text>
        <Text style={globalStyles.paragraph}>{t("textwelcome")}</Text>
      </View>
      <View style={globalStyles.containerbutton}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={globalStyles.buttonText}>{t("buttonwelcome")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
