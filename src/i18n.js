import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import headerEn from "components/Header/i18n-en.json";
import headerIt from "components/Header/i18n-it.json";
import imageViewerEn from "components/ImageViewer/i18n-en.json";
import imageViewerIt from "components/ImageViewer/i18n-it.json";
import aboutMeEn from "components/sections/AboutMe/i18n-en.json";
import aboutMeIt from "components/sections/AboutMe/i18n-it.json";

// the translations
const resources = {
  en: {
    header: headerEn,
    imageViewer: imageViewerEn,
    aboutMe: aboutMeEn
  },
  it: {
    header: headerIt,
    imageViewer: imageViewerIt,
    aboutMe: aboutMeIt
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'it',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;