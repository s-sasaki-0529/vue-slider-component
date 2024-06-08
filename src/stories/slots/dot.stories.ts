import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'slots/dot',
  parameters: {
    docsOnly: true,
    docs: {
      description: {
        component: `
- **Scoped**:

  - \`{number} pos\` Position in the component, calculated as a percentage

  - \`{number} index\` Slider index

  - \`{number | string} value\` Slider value

  - \`{boolean} focus\` Whether the slider is in focus

  - \`{boolean} disabled\` Whether the slider is disabled
        `,
      },
    },
  },
} as Meta

export const Dot: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value }
  },
  template: `
    <VueSlider v-model="value">
      <template #dot="{pos, index, value, focus, disabled}">
        <div style="width: 100%; height: 100%; background-color: pink; color: white" />
      </template>
    </VueSlider>
  `,
})
Dot.storyName = 'dot'
