import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/silent',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`false\`

- **Usage**:

  Set to \`true\` to turn off console errors.     `,
      },
    },
  },
} as Meta

export const silent: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :silent="args.silent" />
  `,
})
silent.storyName = 'silent'
silent.args = {
  silent: true,
}
