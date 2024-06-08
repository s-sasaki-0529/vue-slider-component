import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'slots/label',
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

export const label: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value }
  },
  template: `
    <VueSlider v-model="value" :marks="true" :interval="10">
      <template #label="{ active, value }">
        <div v-show="!active">{{ value }}</div>
      </template>
    </VueSlider>
  `,
})
label.storyName = 'label'
