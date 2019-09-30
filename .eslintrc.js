module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
    curly: ['error', 'all'],
    'require-await': 'error'
  },
  globals: {
    expect: true
  },
  overrides: [
    {
      files: '*.test.js',
      rules: {
        'no-unused-expressions': 0,
        'no-global-assign': 0,
        
      }
    }
  ]
};