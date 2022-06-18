module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/stories/*.stories.@(js|jsx|ts|tsx)'],
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
