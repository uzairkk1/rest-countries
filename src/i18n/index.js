import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import de from "./de";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en,
    de,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
