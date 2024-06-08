import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/tooltipPlacement',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Position | Array<Position>\`

\`\`\`ts
type Position = 'top' | 'right' | 'bottom' | 'left'
\`\`\`

- **Default**: \`'top'\` (on horizontal) or \`'left'\` (on vertical)

- **Usage**:

The placement of the Tooltip.
        `,
      },
    },
  },
} as Meta

export const tooltipPlacement: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <p>top</p>
    <VueSlider v-model="value" tooltip="always" tooltipPlacement="top" />
    <p>left</p>
    <VueSlider v-model="value" tooltip="always" tooltipPlacement="left" />
    <p>right</p>
    <VueSlider v-model="value" tooltip="always" tooltipPlacement="right" />
    <p>bottom</p>
    <VueSlider v-model="value" tooltip="always" tooltipPlacement="bottom" />
  `,
})
tooltipPlacement.storyName = 'tooltipPlacement'
