import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/railStyle',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Object\`

- **Default**: \`null\`

- **Usage**:

  Background style.
        `,
      },
    },
  },
} as Meta

export const railStyle: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :railStyle="args.railStyle" />
  `,
})
railStyle.storyName = 'railStyle'
railStyle.args = {
  railStyle: {
    backgroundColor: 'gray',
  },
}
