import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ROUTE } from '../constants/route';

const initPromise = i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${ROUTE.HOME}/locales/{{lng}}/{{ns}}.json`,
    },
  });

export { initPromise };
export default i18next;
