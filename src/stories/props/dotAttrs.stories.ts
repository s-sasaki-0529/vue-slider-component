import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/dotAttrs',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**：\`object\`

- **Default**：\`undefined\`

- **Usage**：

  Set custom attributes on the slider.

  \`\`\`html
    <VueSlider :dot-attrs="{ 'aria-label': 'Select your age' }" />
    \`\`\`
  `,
      },
    },
  },
} as Meta

export const dotAttrs: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" :dotAttrs="{'aria-label': 'Select your age'}" />
  `,
})
dotAttrs.storyName = 'dotAttrs'
