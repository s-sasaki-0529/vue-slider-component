import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/adsorb',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**：\`boolean\`

- **Default**：\`false\`

- **Usage**：

  Whether the slider automatically adsorb to the nearest value.
        `,
      },
    },
  },
} as Meta

export const Adsorb: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(5)
    return { value, args }
  },
  template: '<VueSlider v-model="value" :adsorb="args.adsorb" :min="0" :max="10" />',
})
Adsorb.args = {
  adsorb: true,
}
Adsorb.storyName = 'adsorb'
