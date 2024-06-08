import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'Events/@dragStart',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`(index) => void\`

- **Arguments**:

  - \`{number} index\` Slider index

- **Usage**:

  The event that is triggered when the mouse/finger presses the slider.

        `,
      },
    },
  },
} as Meta

export const DragStart: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([20, 50, 80])
    const eventIndex = ref(null)
    return { value, eventIndex }
  },
  template: `
    <p>eventIndex={{ eventIndex }}</p>
    <VueSlider v-model="value" @dragStart="(i) => { eventIndex = i } "/>
  `,
})
DragStart.storyName = '@dragStart'
