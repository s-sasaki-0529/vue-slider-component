import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/tooltipStyle',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Object\`

- **Default**: \`null\`

- **Usage**:

  The style of the tooltip
        `,
      },
    },
  },
} as Meta

export const tooltipStyle: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :tooltipStyle="args.tooltipStyle" tooltip="always" />
  `,
})
tooltipStyle.storyName = 'tooltipStyle'
tooltipStyle.args = {
  tooltipStyle: {
    color: '#000',
  },
}
