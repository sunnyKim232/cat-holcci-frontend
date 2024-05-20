import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
import translationEN from "@/locales/en.json";
import translationKO from "@/locales/ko.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    lng: "ko",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
