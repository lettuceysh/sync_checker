module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'react/no-unknown-property': ['error', { ignore: ['css'] }]
  },
  plugins: ['react', 'import'],
  ignorePatterns: ['node_modules', 'dist'],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
