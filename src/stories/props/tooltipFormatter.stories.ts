import { StoryFn, Meta } from '@storybook/vue3'
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
  <VueSlider v-model="value" :tooltip-formatter="'{value}%'"/>

  <!-- A/B/C/D -->
  <VueSlider
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

export const tooltipFormatter: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value1 = ref(50)
    const value2 = ref('a')
    return { value1, value2, args }
  },
  template: `
    <div>
      <VueSlider v-model="value1" tooltip="always" :tooltipFormatter="args.tooltipFormatter" />

      <VueSlider
        v-model="value2"
        :data="['a', 'b', 'c', 'd']"
        :tooltip-formatter="val => val.toUpperCase()"
      />
    </div>
  `,
})
tooltipFormatter.storyName = 'tooltipFormatter'
tooltipFormatter.args = {
  tooltipFormatter: '{value}%',
}
