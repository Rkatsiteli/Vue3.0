module.exports = {
  'extends': [
    'eslint:recommended',
    'airbnb',
    'plugin:vue/recommended',
  ],
  'rules': {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-undef': 'off',
    'class-methods-use-this': 'off',
    // 禁用标签语句
    "no-labels": 2,
    'linebreak-style': ["off", "windows"],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "spaced-comment": "off",//允许注释

  },

};
