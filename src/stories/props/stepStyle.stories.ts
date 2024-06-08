import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/stepStyle',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`Object\`

- **Default**: \`null\`

- **Usage**:

  The style of the step
        `,
      },
    },
  },
} as Meta

export const stepStyle: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    const marks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    return { value, marks, args }
  },
  template: `
    <VueSlider v-model="value" :stepStyle="args.stepStyle" :marks="marks" />
  `,
})
stepStyle.storyName = 'stepStyle'
stepStyle.args = {
  stepStyle: {
    display: 'block',
    height: '10px',
    backgroundColor: 'gray',
  },
}
