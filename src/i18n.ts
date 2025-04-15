
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language files
import enTranslation from './locales/en/translation.json';
import svTranslation from './locales/sv/translation.json';
import skibidiTranslation from './locales/skibidi/translation.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      sv: {
        translation: svTranslation,
      },
      skibidi: {
        translation: skibidiTranslation, // should not be able to be chosen by user
      }
    },
    fallbackLng: 'sv',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
