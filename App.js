import 'intl-pluralrules';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { I18nextProvider } from "react-i18next";
import i18n from "./lang/i18n";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Localization from 'expo-localization';

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DashboardScreen from "./screens/DashboardScreen";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await Font.loadAsync({
          "nunito-black": require("./assets/fonts/Nunito-Black.ttf"),
          "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
          "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
          "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
          "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
        });

        // Configura el idioma según el idioma del sistema
        const systemLanguage = Localization.locale.split('-')[0]; // 'en', 'es', etc.
        i18n.changeLanguage(systemLanguage);
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null; // Puedes mostrar un componente de carga aquí
  }

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}
