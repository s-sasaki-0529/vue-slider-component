import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'slots/step',
  parameters: {
    docs: {
      description: {
        component: `
- **Scoped**:

  - \`{number | string} label\` label

  - \`{number} pos\` Position in the component, calculated as a percentage

  - \`{number | string} value\` Slider value

  - \`{boolean} active\` Whether the location is active (in the progress bar range)
  `,
      },
    },
  },
} as Meta

export const step: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value }
  },
  template: `
    <VueSlider v-model="value" :marks="true" :interval="10" contained>
      <template #step="{ active, value }">
        <div style="width: 1px; height: 10px; border-left: 1px solid; margin-top: -5px"></div>
      </template>
    </VueSlider>
  `,
})
step.storyName = 'step'
