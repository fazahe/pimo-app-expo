import React from "react";
import { View, Image, Linking, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <View style={globalStyles.footergen}>
      <TouchableOpacity
        style={globalStyles.linkfooter}
        onPress={() => Linking.openURL("https://fabiancreativo.com/")}
        title="Fabian Creativo"
      >
        <Image
          style={globalStyles.footerlogo}
          source={require("../assets/fabiancreativo.png")}
        />
        <Text style={globalStyles.textfooter}>Powered by {t("powerby")}</Text>
      </TouchableOpacity>
    </View>
  );
}
