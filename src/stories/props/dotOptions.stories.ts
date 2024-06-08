import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/dotOptions',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`DotOption | DotOption[]\`

\`\`\`ts
interface DotOption {
  disabled: boolean
  tooltip: 'none' | 'always' | 'hover' | 'focus' | 'active'
  min: Value
  max: Value
  style: Object
  focusStyle: Object
  disabledStyle: Object
  tooltipStyle: Object
  tooltipFocusStyle: Object
  tooltipDisabledStyle: Object
}
\`\`\`

- **Default**: \`undefined\`

- **Usage**:

Slider settings, multiple sliders can be distinguished by array type.
      `,
      },
    },
  },
} as Meta

export const dotOptions: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([20, 50, 70])
    const dotOptions = [
      {
        tooltip: 'always',
        min: 20,
        style: { backgroundColor: '#faa' },
        focusStyle: { backgroundColor: '#f00' },
      },
      {
        tooltip: 'hover',
        tooltipDisabledStyle: { color: '#000' },
        disabled: true,
      },
      {
        tooltip: 'always',
        max: 80,
        style: { backgroundColor: '#faa' },
        focusStyle: { backgroundColor: '#f00' },
      },
    ]
    return { value, dotOptions, args }
  },
  template: `
    <VueSlider v-model="value" :dotOptions="dotOptions" />
  `,
})
dotOptions.storyName = 'dotOptions'
