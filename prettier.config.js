module.exports = {
  ...require('prettier-airbnb-config'),
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: [require('prettier-plugin-tailwindcss')],
};
