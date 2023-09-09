// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/en";
import jaTranslation from "./locales/ja/ja";

const resources = {
  en: enTranslation,
  ja: jaTranslation,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja", // 初期言語を日本語に設定
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
