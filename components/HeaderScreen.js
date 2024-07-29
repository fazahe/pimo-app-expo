import React from 'react';
import { View, Image } from 'react-native';
import globalStyles from '../styles/styles';

export default function HeaderScreen() {
    return (
      <View style={globalStyles.contheader}>
        <Image
          style={globalStyles.logo}
          source={require('../assets/logo.png')}
        />
      </View>
    );
  }