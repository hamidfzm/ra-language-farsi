module.exports = {
  extends: '@hamidfzm',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'max-lines': 'off',
      },
    },
  ],
};
