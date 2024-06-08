import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/disabled',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`false\`

- **Usage**:

  Whether to disable the component.
      `,
      },
    },
  },
} as Meta

export const disabled: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :disabled="args.disabled" />
  `,
})
disabled.storyName = 'disabled'
disabled.args = {
  disabled: true,
}
