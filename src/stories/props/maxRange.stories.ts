import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/maxRange',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number\`

- **Default**: \`undefined\`

- **Usage**:

  Maximum distance between sliders, only valid for multiple sliders.
        `,
      },
    },
  },
} as Meta

export const maxRange: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([40, 60])
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :maxRange="args.maxRange" />
  `,
})
maxRange.storyName = 'maxRange'
maxRange.args = {
  maxRange: 20,
}
