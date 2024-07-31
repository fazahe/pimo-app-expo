import React from "react";
import { View, Image, Linking, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

export default function BannerDonate() {
  const { t } = useTranslation();

  return (
    <View style={globalStyles.banner}>
      <TouchableOpacity
        style={globalStyles.buttonbanner}
        onPress={() =>
          Linking.openURL(
            "https://www.paypal.com/donate/?hosted_button_id=Y4JX6WSVBD3L4"
          )
        }
        title={t("donateButton")}
      >
        <View style={globalStyles.contbanner}>
          <Text style={globalStyles.subtitle}>{t("titlebanner")}</Text>
          <Text style={globalStyles.paragraph_small}>
            {t("donationMessage")}
          </Text>
        </View>
        <View style={globalStyles.contimgbanner}>
          <Image
            style={globalStyles.imagebanner}
            source={require("../assets/donate.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
