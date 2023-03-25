/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: [".eslintrc.cjs", "node_mudules/*"],
  rules: {
    'prettier/prettier': ['warn', {
      'singleQuote': true,
      'trailingComma': 'all',
      'endOfLine': 'auto',
      'printWidth': 100
    }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true
    }]
  },
}