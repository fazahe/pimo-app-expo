import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/styles";

export default function CarouselCategory() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const initialCategoriesList = [
      {
        id: "1",
        name: t("titlecat1"),
        icon: <Ionicons name="paw-outline" size={32} color="white" />,
      },
      {
        id: "2",
        name: t("titlecat2"),
        icon: <Ionicons name="restaurant-outline" size={32} color="white" />,
      },
      {
        id: "3",
        name: t("titlecat3"),
        icon: <Ionicons name="shapes-outline" size={32} color="white" />,
      },
      {
        id: "4",
        name: t("titlecat4"),
        icon: <Ionicons name="car-sport-outline" size={32} color="white" />,
      },
      {
        id: "5",
        name: t("titlecat5"),
        icon: <Ionicons name="shirt-outline" size={32} color="white" />,
      },
      {
        id: "6",
        name: t("titlecat6"),
        icon: <Ionicons name="nutrition-outline" size={32} color="white" />,
      },
      {
        id: "7",
        name: t("titlecat7"),
        icon: <Ionicons name="leaf-outline" size={32} color="white" />,
      },
      {
        id: "8",
        name: t("titlecat8"),
        icon: <Ionicons name="game-controller-outline" size={32} color="white" />,
      },
      {
        id: "9",
        name: t("titlecat9"),
        icon: <Ionicons name="musical-notes-outline" size={32} color="white" />,
      },
      {
        id: "10",
        name: t("titlecat10"),
        icon: <Ionicons name="baseball-outline" size={32} color="white" />,
      },
      {
        id: "11",
        name: t("titlecat11"),
        icon: <Ionicons name="flower-outline" size={32} color="white" />,
      },
    ];
    setCategoriesList(initialCategoriesList);
  }, [t, i18n.language]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={globalStyles.itemscroll}
      onPress={() => navigation.navigate("Category", { categoryId: item.id })}
    >
      <View style={globalStyles.iconitem}>{item.icon}</View>
      <Text style={globalStyles.smalltext}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.scrollmenucategory}>
      <FlatList
        data={categoriesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
