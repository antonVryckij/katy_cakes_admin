const config = {
  '*.{js,ts,cjs,mjs,jsx,tsx}': [
    (files) => `eslint --fix --max-warnings=600 ${files.join(' ')}`,
  ],
  '*.{css}': [
    (files) => `stylelint --fix ${files.join(' ')}`,
    (files) => `prettier --write ${files.join(' ')}`,
  ],
};

export default config;
