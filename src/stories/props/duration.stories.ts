import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/duration',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`number\`

- **Default**: \`0.5\`

- **Usage**:

  The transition time of the slide, in units of \`s\`.
        `,
      },
    },
  },
} as Meta

export const duration: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(20)
    return { value, args }
  },
  template: `
    <button @click="value += 20">+20</button>
    <VueSlider v-model="value" :duration="args.duration" />
  `,
})
duration.storyName = 'duration'
duration.args = {
  duration: 1.0,
}
