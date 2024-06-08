import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/useKeyboard',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`true\`

- **Usage**:

  Keyboard control, when the value is \`false\`, the slider cannot be controlled by the keyboard.

        `,
      },
    },
  },
} as Meta

export const useKeyboard: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <p>Press any cursor key</p>
    <VueSlider v-model="value" :useKeyboard="args.useKeyboard" />
  `,
})
useKeyboard.storyName = 'useKeyboard'
useKeyboard.args = {
  useKeyboard: true,
}
