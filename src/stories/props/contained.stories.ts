import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/contained',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`false\`

- **Usage**:

  Whether or not the slider should be fully contained within its containing element.
  `,
      },
    },
  },
} as Meta

export const contained: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <div style="border-left: 1px dotted; border-right: 1px dotted">
      <VueSlider v-model="value" :contained="args.contained" />
    </div>
  `,
})
contained.storyName = 'contained'
contained.args = {
  contained: true,
}
