// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationsEn from './en.json';
import translationsEs from './es.json';

i18n
  .use(initReactI18next) // Integración de i18next con React
  .init({
    resources: {
      en: {
        translation: translationsEn,
      },
      es: {
        translation: translationsEs,
      },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar los valores
    },
  });

export default i18n;