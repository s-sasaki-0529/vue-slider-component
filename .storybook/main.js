const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/stories/vue-3-slider-component.stories.ts',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials'],
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
}
