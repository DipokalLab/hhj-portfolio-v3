import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ko from "./locales/ko.json";
import LanguaeDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguaeDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ns: en,
      },
      ko: {
        ns: ko,
      },
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["ns1"],
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
