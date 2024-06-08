const path = require('path')

/**
 * @type {import('@storybook/vue3-webpack5').StorybookConfig}
 */
module.exports = {
  stories: ['../src/stories/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: true,
    docsMode: true
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
}
