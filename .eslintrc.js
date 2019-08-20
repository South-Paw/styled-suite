module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {},
  overrides: [
    {
      files: ['**/*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
