import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/clickable',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`true\`

- **Usage**:

  Whether to allow changes to values by clicking.

  Usually it is used with \`dragOnClick\`
      `,
      },
    },
  },
} as Meta

export const clickable: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :clickable="args.clickable" :dragOnClick="args.dragOnClick" />
  `,
})
clickable.storyName = 'clickable'
clickable.args = {
  clickable: false,
  dragOnClick: false,
}
