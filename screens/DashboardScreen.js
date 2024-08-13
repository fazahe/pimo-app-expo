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
import CategoryFigures from "../components/CategoryFigures";
import CategoryVehicles from "../components/CategoryVehicles";
import CategoryClothes from "../components/CategoryClothes";
import CategoryInsects from "../components/CategoryInsects";

import CarouselCategory from "../components/CarouselCategory";

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
      case "1":
        return <CategoryAnimals childName={childName} />;
      case "2":
        return <CategoryFood childName={childName} />;
      case "3":
        return <CategoryFigures childName={childName} />;
      case "4":
        return <CategoryVehicles childName={childName} />;
      case "5":
        return <CategoryClothes childName={childName} />;
      case "12":
        return <CategoryInsects childName={childName} />;
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
        {selectedCategory !== null && (
          <CarouselCategory onSelectCategory={handleSelectCategory} />
        )}
        {renderCategoryComponent()}
        <Footer />
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
