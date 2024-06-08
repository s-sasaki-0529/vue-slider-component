import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/direction',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`'ltr' | 'rtl' | 'ttb' | 'btt'\`

- **Default**: \`ltr\`

- **Usage**:

  The direction of the component

  \`ltr\` means \`Left to Right\`, Other similarity.

  When the value is \`ltr\` or \`rtl\`, it is horizontal, and when it is \`ttb\` or \`btt\`, it is vertical.

  *In the vertical direction, you need to set the component height, otherwise it will not render properly.*
        `,
      },
    },
  },
} as Meta

export const direction: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <div style="width: 100%; display: flex; flex-direction: column; gap: 2rem">
      <VueSlider v-model="value" direction="ltr" />
      <VueSlider v-model="value" direction="rtl" />
      <div style="display: flex; justify-content: space-around">
        <VueSlider v-model="value" direction="ttb" :height="300" />
        <VueSlider v-model="value" direction="btt" :height="300" />
      </div>
    </div>
  `,
})
direction.storyName = 'direction'
