import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/processStyle',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Object\`

- **Default**: \`null\`

- **Usage**:

  Background process.
        `,
      },
    },
  },
} as Meta

export const processStyle: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :processStyle="args.processStyle" />
  `,
})
processStyle.storyName = 'processStyle'
processStyle.args = {
  processStyle: {
    backgroundColor: 'gray',
  },
}
