module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['babel', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'object-curly-newline': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/accessible-emoji': 0,
    'class-methods-use-this': 0,
    complexity: ['warn', 5],
    'max-lines': ['warn', 350],
    'react/no-did-update-set-state': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-indent': [0, 'tab'],
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'src/stories/**'],
      },
    ],
    'no-console': 'off',
    'import/no-unresolved': [
      0,
      { caseSensitive: false },
    ],
    'import/extensions': 'off',
    'no-undef': 'off',
    'no-static-element-interactions': 'off',
  },
};
