import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ko from "./locales/ko.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ns: en,
    },
    ko: {
      ns: ko,
    },
  },
  lng: "ko",
  fallbackLng: "en",
  ns: ["ns1"],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
