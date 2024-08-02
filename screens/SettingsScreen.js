import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";

import HeaderSettings from "../components/HeaderSettings";
import BannerDonate from "../components/BannerDonate";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();
  const { childName } = route.params || {};

  const changeLanguage = (lang) => {
    
    i18n.changeLanguage(lang);
    setTimeout(() => {
      Speech.stop(); // Detener cualquier reproducción de audio en curso después de 0.5 segundos
    }, 100);
  };

  const currentLanguage = i18n.language;

  const handleEmailPress = () => {
    Linking.openURL("mailto:hello@fabiancreaivo.com");
  };

  const handleFCPress = () => {
    Linking.openURL("https://fabiancreativo.com/");
  };

  return (
    <View style={globalStyles.containerglobal}>
      <HeaderSettings />
      <ScrollView style={globalStyles.containercenterdash}>
        <BannerDonate />
        <View style={globalStyles.contoptionssettings}>
          <Text style={globalStyles.subtitle}>{t("titlelang")}</Text>
          <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
            {t("desclang")}
          </Text>
          <View style={globalStyles.contlangselect}>
            <TouchableOpacity
              onPress={() => changeLanguage("en")}
              style={globalStyles.borderbottom}
            >
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "en" && globalStyles.activeLanguage,
                ]}
              >
                🇺🇸 {t("en")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeLanguage("es")}
              style={globalStyles.borderbottom}
            >
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "es" && globalStyles.activeLanguage,
                ]}
              >
                🇪🇸 {t("es")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeLanguage("fr")}
              style={globalStyles.borderbottom}
            >
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "fr" && globalStyles.activeLanguage,
                ]}
              >
                🇫🇷 {t("fr")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage("ja")}>
              <Text
                style={[
                  globalStyles.languageButtonText,
                  currentLanguage === "ja" && globalStyles.activeLanguage,
                ]}
              >
                🇯🇵 {t("ja")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={globalStyles.contoptionssettings}>
          <Text style={globalStyles.subtitle}>{t("titlename")}</Text>
          <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
            {t("descname")}
          </Text>
          <TouchableOpacity
            style={globalStyles.conteditname}
            onPress={() => {
              setTimeout(() => {
                Speech.stop(); // Detener cualquier reproducción de audio en curso después de 0.5 segundos
              }, 500);
              navigation.navigate("Details");
            }}
          >
            <View style={globalStyles.blockeditname}>
              {childName ? (
                <>
                  <Text style={globalStyles.languageButtonText}>
                    {childName} {t("nameok")}
                  </Text>
                  <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
                    {t("nameokdesc")}
                  </Text>
                </>
              ) : (
                <>
                  <Text style={globalStyles.languageButtonText}>
                    {t("namenot")}
                  </Text>
                  <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
                    {t("namenotdesc")}
                  </Text>
                </>
              )}
            </View>
            <View style={globalStyles.btnheader}>
              <Ionicons name="create-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyles.contoptionssettings}>
          <Text style={globalStyles.subtitle}>{t("titlehelp")}</Text>
          <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
            {t("titledesc1")}
            <TouchableOpacity
              onPress={handleEmailPress}
              style={globalStyles.link}
            >
              <Text style={globalStyles.link}>hello@fabiancreaivo.com</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={globalStyles.divider} />
        <View style={globalStyles.contoptionssettings}>
          <TouchableOpacity
            onPress={handleFCPress}
            style={globalStyles.footersettings}
          >
            <Image
              style={globalStyles.footerimg}
              source={require("../assets/fabiancreativo.png")}
            />
            <View style={globalStyles.footercont}>
              <Text
                style={[
                  globalStyles.languageButtonText,
                  globalStyles.textopacity,
                ]}
              >
                Powered by {t("powerby")}
              </Text>
              <Text style={globalStyles.textfooter}>{t("footer")}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
