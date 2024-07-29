// App.js
import 'intl-pluralrules';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nextProvider } from 'react-i18next';
import i18n from './lang/i18n';


import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}