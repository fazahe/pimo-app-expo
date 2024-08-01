import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import globalStyles from "../styles/styles";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";

import HeaderPrimary from "../components/HeaderPrimary";
import GroupCategory from "../components/GroupCategory";
import Footer from "../components/Footer";

const DashboardScreen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation();
  const { childName } = route.params;

  useEffect(() => {
    const greetingText = `${t("greeting")}, ${childName}!, ${t("greetingcomplement")}`;

    Speech.speak(greetingText, {
      language: i18n.language,
      pitch: 1,
      rate: 1,
    });
  }, [childName, t, i18n.language]);

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderPrimary navigation={navigation} childName={childName} />
      <ScrollView style={globalStyles.containercenterdash}>
        <GroupCategory />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
