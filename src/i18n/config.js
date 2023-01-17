import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTranslations from "./locales/en/translations.json";
import FiTranslations from "./locales/fi/translations.json";

const resources = {
  en: {
    translation: EnTranslations,
  },
  fi: {
    translation: FiTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
