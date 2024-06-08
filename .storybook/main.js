const path = require('path')

module.exports = {
  stories: ['../src/stories/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-webpack5-compiler-babel'],

  webpackFinal(config) {
    const cssRuleIndex = config.module.rules.findIndex(
      rule => rule.test.toString() === /\.css$/.toString(),
    )
    config.module.rules[cssRuleIndex] = {
      test: /\.(css|scss|sass)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }
    return config
  },
  framework: {
    name: '@storybook/vue3-webpack5',
    options: {}
  },
}
