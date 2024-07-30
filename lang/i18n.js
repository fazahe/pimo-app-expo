// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationsEn from './en.json';
import translationsEs from './es.json';
import translationsFr from './fr.json';
import translationsJa from './ja.json';

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
      fr: {
        translation: translationsFr,
      },
      ja: {
        translation: translationsJa,
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de reserva
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar los valores
    },
  });

export default i18n;