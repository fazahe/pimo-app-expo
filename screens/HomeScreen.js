import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import globalStyles from "../styles/styles";
import { useTranslation } from 'react-i18next';

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{t('hello')}</Text>
      <Text style={globalStyles.text}>{t('welcome')}</Text>
      <Button
        title={t('Go to Details')}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;