import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/min',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number\`

- **Default**: \`0\`

- **Usage**:

  Minimum value.
      `,
      },
    },
  },
} as Meta

export const min: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(40)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :min="args.min" />
  `,
})
min.storyName = 'min'
min.args = {
  min: 40,
}
