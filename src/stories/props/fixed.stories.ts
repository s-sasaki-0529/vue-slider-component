import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/fixed',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`false\`

- **Usage**:

  Whether to fix the slider spacing, only valid for multiple sliders.
        `,
      },
    },
  },
} as Meta

export const fixed: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([40, 60])
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :fixed="args.fixed" />
  `,
})
fixed.storyName = 'fixed'
fixed.args = {
  fixed: true,
}
