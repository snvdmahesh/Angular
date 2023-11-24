module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    overrides: [
      {
        files: ['*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: [
            'tsconfig.json',
            'e2e/tsconfig.json'
          ],
          createDefaultProgram: true,
        },
        plugins: [
          '@typescript-eslint',
          '@angular-eslint',
        ],
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/eslint-recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:@angular-eslint/recommended',
          'plugin:@angular-eslint/template/process-inline-templates',
        ],
        rules: {
          // Add specific rules or overrides here
        },
      },
    ],
  };
  