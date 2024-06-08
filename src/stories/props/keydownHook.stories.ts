import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/keydownHook',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`(e: KeyboardEvent) => HandleFunction | boolean\`

\`\`\`ts
// @Param {index} Index of the active slider
// @Return New index
type HandleFunction = (index: number) => number
\`\`\`

- **Default**: \`undefined\`

- **Usage**:

Keyboard controlled hook function.

When the function returns \`false\`, the value does not change.

If \`true\` is returned, the [default action](https://github.com/NightCatSama/vue-slider-component/blob/master/lib/utils/index.ts) is used.
        `,
      },
    },
  },
} as Meta

export const keydownHook: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    const keydownHook = (e: KeyboardEvent) => {
      return (v: number) => {
        if (e.key === 'ArrowLeft') {
          return v - 10
        } else if (e.key === 'ArrowRight') {
          return v + 10
        }
      }
    }
    return { value, keydownHook }
  },
  template: `
    <p>Press the left or right keys</p>
    <VueSlider v-model="value" :keydownHook="keydownHook" />
  `,
})
keydownHook.storyName = 'keydownHook'
