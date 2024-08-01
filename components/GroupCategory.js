import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import * as Speech from "expo-speech";
import globalStyles from "../styles/styles";

import BoxCategory from "./BoxCategory";
import BannerDonate from "./BannerDonate";

export default function GroupCategory() {
  const { t, i18n } = useTranslation();
  const route = useRoute(); // Obtén el hook useRoute
  const { childName } = route.params || {}; // Recibir el valor del nombre

  return (
    <View>
      <Text style={globalStyles.title}>
        {t("titledash")} {childName}
      </Text>
      <Text style={globalStyles.paragraph}>{t("textdash")}</Text>
      <BannerDonate />
      <View style={globalStyles.contcategory}>
        <BoxCategory
          name={t("titlecat1")}
          image={require("../assets/items/animals/cat.png")}
          destination="Screen1"
          style={globalStyles.color2}
        />
        <BoxCategory
          name={t("titlecat2")}
          image={require("../assets/items/eat/sandwich.png")}
          destination="Screen1"
          style={globalStyles.color4}
        />
        <BoxCategory
          name={t("titlecat3")}
          image={require("../assets/items/forms/circlepurple.png")}
          destination="Screen1"
          style={globalStyles.color7}
        />
        <BoxCategory
          name={t("titlecat4")}
          image={require("../assets/items/vehicles/car.png")}
          destination="Screen1"
          style={globalStyles.color3}
        />
        <BoxCategory
          name={t("titlecat5")}
          image={require("../assets/items/clothes/cap.png")}
          destination="Screen1"
          style={globalStyles.color6}
        />
        <BoxCategory
          name={t("titlecat6")}
          image={require("../assets/items/fruit/strawberries.png")}
          destination="Screen1"
          style={globalStyles.color5}
        />
      </View>
    </View>
  );
}
