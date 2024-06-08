import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/process',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean | ProcessFunc\`

\`\`\`ts
type ProcessFunc = (dotsPos: Array<number>) => Array<Array<number, number, Styles?>>
\`\`\`

- **Default**: \`true\`

- **Usage**:

Control the display of the process and support multiple process.

*When multiple sliders, the default is from the first to the last.*
      `,
      },
    },
  },
} as Meta

export const process: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([20, 40, 60])
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :process="args.process" />
  `,
})
process.storyName = 'process'
process.args = {
  process: true,
}
