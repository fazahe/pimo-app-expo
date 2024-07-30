import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { useTranslation } from "react-i18next";

const DashboardScreen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation(); // Obtén t y i18n para traducciones y cambios de idioma
  const { childName } = route.params; // Recibir el valor del nombre

  useEffect(() => {
    const greetingText = `${t("greeting")}, ${childName}!, ${t("greetingcomplement")}`; // Saludo con nombre

    // Usar la función de hablar con el idioma especificado
    Speech.speak(greetingText, {
      language: i18n.language, // Configurar el idioma actual
      pitch: 1,
      rate: 1,
    });
  }, [childName, t, i18n.language]); // Dependencias para ejecutar el efecto cuando cambie el nombre del niño o el idioma

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t("titledash")} {childName}
      </Text>
      <Text style={styles.subtitle}>{t("textdash")}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>{t("settingsButton")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DashboardScreen;
