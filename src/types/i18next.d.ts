import translation from '../../public/locales/uk/translation.json';

export type Translation = typeof translation;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: Translation;
    };
  }
}
