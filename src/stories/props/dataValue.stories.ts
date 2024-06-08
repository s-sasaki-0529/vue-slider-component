import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/dataValue',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`string\`

- **Default**: \`value\`

- **Usage**:

  Only valid when \`data\` is \`Array<object>\`.

  Read the field in the object and bind it to \`value\`.
  `,
      },
    },
  },
} as Meta

export const dataValue: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(2)
    const data = [
      { number: 1, label: 'A' },
      { number: 2, label: 'B' },
      { number: 3, label: 'C' },
    ]
    return { value, data }
  },
  template: `
    <p>value={{ value }}</p>
    <VueSlider v-model="value" :data="data" dataValue="number" />
  `,
})
dataValue.storyName = 'dataValue'
