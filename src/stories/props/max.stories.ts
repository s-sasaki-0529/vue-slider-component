import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/max',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number\`

- **Default**: \`0\`

- **Usage**:

  Maximum value.
      `,
      },
    },
  },
} as Meta

export const max: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(40)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :max="args.max" />
  `,
})
max.storyName = 'max'
max.args = {
  max: 40,
}
