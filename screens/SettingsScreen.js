import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import globalStyles from "../styles/styles";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";

import HeaderSettings from "../components/HeaderSettings";
import BannerDonate from "../components/BannerDonate";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation(); // Usa useTranslation para obtener t y i18n
  const route = useRoute();
  const navigation = useNavigation(); // Usa useNavigation para obtener la función de navegación
  const { childName } = route.params || {};

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Obtener el idioma actualmente seleccionado
  const currentLanguage = i18n.language;

  const handleEmailPress = () => {
    Linking.openURL("mailto:hello@fabiancreaivo.com");
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
            onPress={() => navigation.navigate("Details")} // Navega a DetailsScreen
          >
            <View style={globalStyles.blockeditname}>
              {childName ? (
                <>
                  <Text style={globalStyles.languageButtonText}>
                    {childName} ¿es este tu nombre?
                  </Text>
                  <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
                    Si este no es tu nombre o deseas realizar cualquier cambio,
                    da clic aquí.
                  </Text>
                </>
              ) : (
                <>
                  <Text style={globalStyles.languageButtonText}>
                    No has ingresado tu nombre aún.
                  </Text>
                  <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
                    Por favor ingresa tu nombre para personalizar la
                    experiencia.
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
          <Text style={globalStyles.subtitle}>¿Necesitas Ayuda?</Text>
          <Text style={[globalStyles.paragraph, globalStyles.textleft]}>
            Si tienes sugerencias, quejas o reclamos, por favor, contáctanos a
            través de nuestro correo electrónico:{" "}
            <TouchableOpacity
              onPress={handleEmailPress}
              style={globalStyles.link}
            >
              <Text style={globalStyles.link}> hello@fabiancreaivo.com</Text>
            </TouchableOpacity>
            . Estamos aquí para ayudarte.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
