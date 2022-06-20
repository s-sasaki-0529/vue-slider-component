import { Story, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/tooltipFormatter',
  parameters: {
    docs: {
      description: {
        component: `
- **type**：\`TooltipFormatter | Array<TooltipFormatter>\`

\`\`\`ts
type TooltipFormatter = string | (val: Value) => string
\`\`\`

- **Default**: \`undefined\`

- **Usage**:

Format the value of the Tooltip. When the type is \`string\`, \`{value}\` will be replaced with the value of Tooltip.

\`\`\`html
  <!-- 0% -->
  <vue-slider v-model="value" :tooltip-formatter="'{value}%'"/>

  <!-- A/B/C/D -->
  <vue-slider
    v-model="value"
    :data="['a', 'b', 'c', 'd']"
    :tooltip-formatter="val => val.toUpperCase()"
  />
\`\`\`
        `,
      },
    },
  },
} as Meta

export const tooltipFormatter: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" tooltip="always" :tooltipFormatter="args.tooltipFormatter" />
  `,
})
tooltipFormatter.storyName = 'tooltipFormatter'
tooltipFormatter.args = {
  tooltipFormatter: '{value}%',
}
