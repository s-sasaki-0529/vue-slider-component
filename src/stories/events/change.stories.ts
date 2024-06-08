import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'Events/@change',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`(value, index) => void\`

- **Arguments**:

  - \`{number | string | number[] | string[]} value\`
  - \`{number} index\` Slider index

- **Usage**:

  The event that is triggered when the value changes.
        `,
      },
    },
  },
} as Meta

export const Change: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([20, 50, 80])
    const eventValue = ref(null)
    const eventIndex = ref(null)
    return { value, eventValue, eventIndex }
  },
  template: `
    <p>eventValue={{ eventValue }}</p>
    <p>eventIndex={{ eventIndex }}</p>
    <VueSlider v-model="value" @change="(v, i) => { eventValue = v; eventIndex = i } "/>
  `,
})
Change.storyName = '@change'
