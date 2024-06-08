import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/dragOnClick',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`false\`

- **Usage**:

  Whether to allow dragging the slider when pressing the process.

  Usually it is used with \`clickable\`
      `,
      },
    },
  },
} as Meta

export const dragOnClick: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :clickable="args.clickable" :dragOnClick="args.dragOnClick" />
  `,
})
dragOnClick.storyName = 'dragOnClick'
dragOnClick.args = {
  clickable: false,
  dragOnClick: false,
}
