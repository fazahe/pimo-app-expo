import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import globalStyles from "../styles/styles";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";

import HeaderPrimary from "../components/HeaderPrimary";
import GroupCategory from "../components/GroupCategory";
import Footer from "../components/Footer";
import CategoryAnimals from "../components/CategoryAnimals";
import CategoryFood from "../components/CategoryFood";

const DashboardScreen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation();
  const { childName } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const greetingText = `${t("greeting")}, ${childName}!, ${t(
      "greetingcomplement"
    )}`;

    Speech.speak(greetingText, {
      language: i18n.language,
      pitch: 1,
      rate: 1,
    });
  }, [childName, t, i18n.language]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case "1": // Cambiado a los ids del carrusel
        return <CategoryAnimals childName={childName} />;
      case "2":
        return <CategoryFood childName={childName} />;
      // Añade aquí más casos según tus categorías
      default:
        return (
          <GroupCategory
            childName={childName}
            onSelectCategory={handleSelectCategory}
          />
        );
    }
  };

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderPrimary navigation={navigation} childName={childName} />
      <ScrollView style={globalStyles.containercenterdash}>
        {renderCategoryComponent()}
        <Footer />
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
