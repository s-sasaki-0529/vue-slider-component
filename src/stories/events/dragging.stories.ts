import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'Events/@dragging',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`(value, index) => void\`

- **Arguments**

  - \`{number | string | number[] | string[]} value\`
  - \`{number} index\` Slider index

- **Usage**:

  The event that is triggered when the slider is dragged.

  \`value\` is the value inside the component, and the internal value can be obtained when \`lazy = true\`.
        `,
      },
    },
  },
} as Meta

export const Dragging: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([20, 50, 80])
    const valueIndex = ref(null)
    const eventIndex = ref(null)
    return { value, eventIndex }
  },
  template: `
    <p>eventValue={{ eventValue }}</p>
    <p>eventIndex={{ eventIndex }}</p>
    <VueSlider v-model="value" @dragging="(v, i) => { eventValue = v; eventIndex = i } "/>
  `,
})
Dragging.storyName = '@dragging'
