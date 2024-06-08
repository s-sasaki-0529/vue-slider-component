import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/dataLabel',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`string\`

- **Default**: \`label\`

- **Usage**:

  Only valid when \`data\` is \`Array<object>\`.

  Read the field in the object and bind it to \`label\`.
  `,
      },
    },
  },
} as Meta

export const dataLabel: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(2)
    const data = [
      { value: 1, key: 'A' },
      { value: 2, key: 'B' },
      { value: 3, key: 'C' },
    ]
    return { value, data }
  },
  template: `
    <p>value={{ value }}</p>
    <VueSlider v-model="value" :data="data" dataLabel="key" />
  `,
})
dataLabel.storyName = 'dataLabel'
