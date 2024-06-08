import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'slots/process',
  parameters: {
    docs: {
      description: {
        component: `
- **Scoped**:

  - \`{number} start\` Start position of the progress

  - \`{number} end\` End position of the progress

  - \`{number} index\` Index of the progress (can be used in multi-progress)

  - \`{object} style\` Progress style, Contains the calculated style of the component (size, position, etc)
        `,
      },
    },
  },
} as Meta

export const process: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value }
  },
  template: `
    <VueSlider v-model="value" :marks="true" :interval="10">
      <template #process="{ start, end }">
        <div :style="'position: absolute; width: ' + end + '%; height: 1px; border: 1px solid'" >
        </div>
      </template>
    </VueSlider>
  `,
})
process.storyName = 'process'
