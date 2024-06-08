import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/dotSize',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number | Array<number, number>\`

- **Default**: \`14\`

- **Usage**:

  The slider size, when the value is an array, represents \`[width, height]\`.
        `,
      },
    },
  },
} as Meta

export const DotSize: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :dotSize="args.dotSize" />
  `,
})
DotSize.storyName = 'dotSize'
DotSize.args = {
  dotSize: 30,
}
