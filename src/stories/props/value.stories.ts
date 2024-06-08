import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/value',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Value | Array<Value>\`

\`\`\`ts
type Value = number | string
\`\`\`

- **Default**: \`0\`

- **Usage**:

\`\`\`html
<VueSlider v-model="value" />
\`\`\`

The value of the slider.

When the \`value\` is an array type, it corresponds to multiple sliders.
        `,
      },
    },
  },
} as Meta

export const value: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value1 = ref(50)
    const value2 = ref([20, 80])
    const value3 = ref([10, 30, 90])
    return { value1, value2, value3 }
  },
  template: `
    <p>value1={{ value1 }}</p>
    <VueSlider v-model="value1" />
    <p>value2={{ value2 }}</p>
    <VueSlider v-model="value2" />
    <p>value3={{ value3 }}</p>
    <VueSlider v-model="value3" />
  `,
})
value.storyName = 'value'
