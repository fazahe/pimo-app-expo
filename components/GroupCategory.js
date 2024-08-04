import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import globalStyles from "../styles/styles";

import BoxCategory from "./BoxCategory";
import BannerDonate from "./BannerDonate";

export default function GroupCategory({ childName, onSelectCategory }) {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={globalStyles.title}>{t("titledash")} {childName}</Text>
      <Text style={globalStyles.paragraph}>{t("textdash")}</Text>
      <BannerDonate />
      <View style={globalStyles.contcategory}>
        <BoxCategory
          name={t("titlecat1")}
          image={require("../assets/items/animals/cat.png")}
          onSelect={() => onSelectCategory("1")}
          style={globalStyles.color2}
        />
        <BoxCategory
          name={t("titlecat2")}
          image={require("../assets/items/eat/sandwich.png")}
          onSelect={() => onSelectCategory("2")}
          style={globalStyles.color4}
        />
        <BoxCategory
          name={t("titlecat3")}
          image={require("../assets/items/forms/circlepurple.png")}
          onSelect={() => onSelectCategory("Category3")}
          style={globalStyles.color7}
        />
        <BoxCategory
          name={t("titlecat4")}
          image={require("../assets/items/vehicles/car.png")}
          onSelect={() => onSelectCategory("Category4")}
          style={globalStyles.color3}
        />
        <BoxCategory
          name={t("titlecat5")}
          image={require("../assets/items/clothes/cap.png")}
          onSelect={() => onSelectCategory("Category5")}
          style={globalStyles.color6}
        />
        <BoxCategory
          name={t("titlecat6")}
          image={require("../assets/items/fruit/strawberries.png")}
          onSelect={() => onSelectCategory("Category6")}
          style={globalStyles.color5}
        />
      </View>
    </View>
  );
}
