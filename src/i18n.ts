import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { Language } from '@material-ui/icons';

const LANG_KEY = 'lang';
export const AVAILABLE_LANGS = ['en', 'de', 'zh', 'ja'];

export type Language = 'en' | 'de' | 'zh'| 'ja';

export const determineDefaultLanguage = (): string => {
  const browserLang = navigator.language;
  const userLang = localStorage.getItem(LANG_KEY);

  const getLanguage = (): Language => {
    if (userLang && AVAILABLE_LANGS.indexOf(userLang) !== -1) {
      return userLang as Language;
    }

    if (browserLang.startsWith('de')) {
      return 'de';
    } else if (browserLang.startsWith('zh')) {
      return 'zh';
    } else if (browserLang.startsWith('ja')) {
      return 'ja';
    } else {
      return 'en';
    }
  };

  const defaultLanguage = getLanguage();
  document.documentElement.lang = defaultLanguage;

  return defaultLanguage;
};

export const getUserConfiguredLang = () => {
  return localStorage.getItem(LANG_KEY);
};

export const setUserConfiguredLang = async (lang: Language) => {
  await i18n.use(initReactI18next).init({ lng: lang });
  localStorage.setItem('lang', lang);
};

export const getCurrentLanguage = (): string => {
  return i18n.language || window.localStorage.i18nextLng || '';
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: determineDefaultLanguage(),
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export const switchLang = async () => {
  const lang = getCurrentLanguage() === 'en' ? 'de' : 'en';
  await i18n.use(initReactI18next).init({ lng: lang });
  localStorage.setItem('lang', lang);
};

export const switchLanguage = async (lang: Language) => {
  await i18n.use(initReactI18next).changeLanguage(lang);
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
};

export default i18n;
