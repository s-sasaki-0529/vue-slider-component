import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/height',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number | string\`

- **Default**: \`undefined\`

- **Usage**:

  The height of the component (unit \`px\`), which defaults to \`4\` in the horizontal direction.        `,
      },
    },
  },
} as Meta

export const height: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :height="args.height" />
  `,
})
height.storyName = 'height'
height.args = {
  height: 20,
}
