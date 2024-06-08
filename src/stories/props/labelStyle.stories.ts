import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/labelStyle',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Object\`

- **Default**: \`null\`

- **Usage**:

The style of the label.
        `,
      },
    },
  },
} as Meta

export const labelStyle: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    const marks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    return { value, marks, args }
  },
  template: `
    <VueSlider v-model="value" :labelStyle="args.labelStyle" :marks="marks" />
  `,
})
labelStyle.storyName = 'labelStyle'
labelStyle.args = {
  labelStyle: {
    color: 'pink',
  },
}
