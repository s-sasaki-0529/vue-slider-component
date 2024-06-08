import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/interval',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number\`

- **Default**: \`1\`

- **Usage**:

  The interval between two values.

  *The value must be greater than 0 and can be divisible by (max - min).*
      `,
      },
    },
  },
} as Meta

export const interval: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(40)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :interval="args.interval" />
  `,
})
interval.storyName = 'interval'
interval.args = {
  interval: 0.1,
}
