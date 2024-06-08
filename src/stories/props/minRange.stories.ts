import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/minRange',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number\`

- **Default**: \`undefined\`

- **Usage**:

  Minimum distance between sliders, only valid for multiple sliders.
        `,
      },
    },
  },
} as Meta

export const minRange: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([40, 60])
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :minRange="args.minRange" />
  `,
})
minRange.storyName = 'minRange'
minRange.args = {
  minRange: 20,
}
