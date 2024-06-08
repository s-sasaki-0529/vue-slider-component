import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/width',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number | string\`

- **Default**: \`undefined\`

- **Usage**:

  The width of the component (unit \`px\`) defaults to \`auto\` in the horizontal direction and \`4\` in the vertical direction.
        `,
      },
    },
  },
} as Meta

export const width: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :width="args.width" />
  `,
})
width.storyName = 'width'
width.args = {
  width: 300,
}
