import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/enableCross',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`true\`

- **Usage**:

  Whether to allow sliders to cross, only valid for multiple sliders.
        `,
      },
    },
  },
} as Meta

export const enableCross: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([40, 60])
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :enableCross="args.enableCross" />
  `,
})
enableCross.storyName = 'enableCross'
enableCross.args = {
  enableCross: true,
}
