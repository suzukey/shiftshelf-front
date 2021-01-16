module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // コメントの前に改行はいらない
    'comment-empty-line-before': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['Meiryo', 'Arial'] }],
  },
}
