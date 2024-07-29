import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../styles/styles';
import { useTranslation } from 'react-i18next';

const DetailsScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.subtext}>{t('test')}</Text>
      <Text style={globalStyles.subtext}>{t('test')}</Text>
      <Button
        title={t('Go back to Home')}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default DetailsScreen;