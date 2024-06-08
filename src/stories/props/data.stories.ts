import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/data',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Array<number> | Array<string> | Array<object> | object\`

- **Default**: \`undefined\`

- **Usage**:

Custom data.

\`\`\`html
<VueSlider :data="['A', 'B', 'C', 'D']" v-model="value" />
\`\`\`

The object type is actually a simplified writing of \`data & marks & tooltipFormatter\`.

\`\`\`html
<VueSlider :data="[{ value: 1, label: 'A'}]" v-model="value" />
\`\`\`
  `,
      },
    },
  },
} as Meta

export const data: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value1 = ref('D')
    const data1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

    const value2 = ref(2)
    const data2 = [
      { value: 1, label: 'A' },
      { value: 2, label: 'B' },
      { value: 3, label: 'C' },
    ]
    return { value1, data1, value2, data2 }
  },
  template: `
    <p>:data="{{ data1 }}"</p>
    <VueSlider v-model="value1" :data="data1" />
    <p>:data="{{ data2 }}"</p>
    <VueSlider v-model="value2" :data="data2" />
  `,
})
data.storyName = 'data'
