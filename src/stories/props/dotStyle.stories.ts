import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/dotStyle',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Object\`

- **Default**: \`null\`

- **Usage**:

  Slider style.

  *If you need to set the \`active\` or \`disabled\` style. Please use the \`dotOptions\` parameter. And \`dotOptions\` can set multiple sliders separately.*
        `,
      },
    },
  },
} as Meta

export const dotStyle: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :dotStyle="args.dotStyle" />
  `,
})
dotStyle.storyName = 'dotStyle'
dotStyle.args = {
  dotStyle: {
    backgroundColor: 'gray',
  },
}
