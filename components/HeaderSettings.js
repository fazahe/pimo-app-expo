import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import globalStyles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation

export default function HeaderSettings() {
    const navigation = useNavigation();
    const { t } = useTranslation(); // Usa useTranslation para obtener t

    return (
      <View style={globalStyles.settingsheader}>
        <TouchableOpacity
          style={globalStyles.btnheader}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={[globalStyles.title, globalStyles.settingstitle]}>
          {t("titlesettings")}
        </Text>
      </View>
    );
}
