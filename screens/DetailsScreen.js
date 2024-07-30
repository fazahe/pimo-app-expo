import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";
import HeaderScreen from "../components/HeaderScreen";

const DetailsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [childName, setChildName] = useState("");

  const handleButtonPress = () => {
    navigation.navigate("Dashboard", { childName }); // Pasar el valor del estado
  };

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderScreen />
      <View style={globalStyles.containercenter}>
        <Image
          style={globalStyles.sons}
          source={require("../assets/son.png")}
        />
        <Text style={globalStyles.title}>{t("titledata")}</Text>
        <Text style={globalStyles.paragraph}>{t("textdata")}</Text>
        <TextInput
          style={globalStyles.input}
          placeholder={t("placeholderdata")}
          onChangeText={setChildName}
          value={childName}
        />
      </View>
      <View style={globalStyles.containerbutton}>
        <TouchableOpacity
          style={[globalStyles.button]}
          onPress={handleButtonPress}
        >
          <Text style={[globalStyles.buttonText]}>{t("buttondata")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
