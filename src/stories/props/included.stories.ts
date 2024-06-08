import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/included',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`false\`

- **Usage**:

  Only valid if \`marks\` is not empty.

  If the value is \`true\`, \`value\` will automatically set to the nearest mark.
        `,
      },
    },
  },
} as Meta

export const included: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    const marks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    return { value, marks, args }
  },
  template: `
    <VueSlider v-model="value" :included="args.included" :marks="marks" />
  `,
})
included.storyName = 'included'
included.args = {
  included: true,
}
