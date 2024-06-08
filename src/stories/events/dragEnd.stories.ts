import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'Events/@dragEnd',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`(index) => void\`

- **Arguments**:

  - \`{number} index\` Slider index

- **Usage**:

  Drag and drop the event that triggered.
       `,
      },
    },
  },
} as Meta

export const DragEnd: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([20, 50, 80])
    const eventIndex = ref(null)
    return { value, eventIndex }
  },
  template: `
    <p>eventIndex={{ eventIndex }}</p>
    <VueSlider v-model="value" @dragEnd="(i) => { eventIndex = i } "/>
  `,
})
DragEnd.storyName = '@dragEnd'
