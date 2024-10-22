import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'semi': ['error', 'never'],            // Requer ponto e vírgula
      'quotes': ['error', 'single'],         // Requer aspas
      'indent': ['error', 2],                // Indentação de 2 espaços
      'comma-dangle': ['error', { // Requer vírgula no final de:
        'arrays': 'never',
        'objects': 'always',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }],
      'arrow-parens': ['error', 'always'] // Requer parênteses, quando preciso, em arrow functions
    }
  }
]