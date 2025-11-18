import i18n, { initPromise } from '../configs/i18n';
import type { Translation } from '../types/i18next';

export const translate = async (key: keyof Translation) => {
  await initPromise;
  return i18n.t(key);
};
