import type { Translation } from '../types/i18next';
import { i18n, initPromise } from '../configs';

export const translate = async (key: keyof Translation) => {
  await initPromise;
  return i18n.t(key);
};
