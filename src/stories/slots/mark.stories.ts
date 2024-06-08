import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'slots/mark',
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

export const mark: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value }
  },
  template: `
  <VueSlider v-model="value" :marks="true" :interval="10">
    <template v-slot:mark="{ value, label }">
      <div v-show="value === 0" style="position: absolute; left: 0">{{ value }}</div>
      <div v-show="value === 100" style="position: absolute; right: 0">{{ value }}</div>
    </template>
  </VueSlider>
  `,
})
mark.storyName = 'mark'
