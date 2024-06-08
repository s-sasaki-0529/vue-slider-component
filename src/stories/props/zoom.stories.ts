import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/zoom',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**：\`number\`

- **Default**：\`undefined\`

- **Usage**：

If the slider is using CSS3 scale transform to scale or is in a scaled container, this parameter needs to be set to correct the calculation within the component.

\`\`\`html
  <div style="transform: scale(1.1)">
    <VueSlider :zoom="1.1" />
  </div>
\`\`\`
        `,
      },
    },
  },
} as Meta

export const zoom: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <div :style="{ transform: \`scale(${args.zoom})\`}">
      <VueSlider v-model="value" :zoom="args.zoom" />
    </div>
  `,
})
zoom.storyName = 'zoom'
zoom.args = {
  zoom: 1.1,
}
