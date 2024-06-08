import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'Events/@error',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`(type, message) => void\`

- **Arguments**

  - \`{ERROR_TYPE} type\` Error type

  - \`{string} message\` Error message

  \`\`\`ts
    enum ERROR_TYPE {
      VALUE = 1, // Value is illegal
      INTERVAL = 2, // \`interval\` cannot be divisible by \`(max - min)\`
      MIN, // Value is less than min
      MAX, // Value is greater than max
      ORDER, // When \`order\` is false, \`minRange/maxRange/enableCross/fixed\` is still set
    }
  \`\`\`

- **Usage**:

  Event triggered when an error occurs in a component
        `,
      },
    },
  },
} as Meta

export const error: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    const errorType = ref(null)
    const errorMessage = ref(null)
    const interval = ref(1)
    const reset = () => {
      errorType.value = null
      errorMessage.value = null
      value.value = 50
      interval.value = 1
    }
    return { value, interval, errorType, errorMessage, reset }
  },
  template: `
    <button @click="value = 'invalid'">Set illegal value</button>
    <button @click="interval = 9999">Set illegal interval</button>
    <button @click="value = -1">Set a value smaller than min</button>
    <button @click="value = 101">Set a value greater than max</button>
    <button @click="reset">reset</button>

    <p>errorType={{ errorType }}</p>
    <p>errorMessage={{ errorMessage }}</p>
    <VueSlider
      v-model="value"
      :interval="interval"
      @error="(t, m) => { errorType = t; errorMessage = m }"
    />
  `,
})
error.storyName = '@error'
