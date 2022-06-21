import { Story, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'slots/tooltip',
  parameters: {
    docs: {
      description: {
        component: `
- **Scoped**:

  - \`{number} pos\` Position in the component, calculated as a percentage

  - \`{number} index\` Slider index

  - \`{number | string} value\` Slider value

  - \`{boolean} focus\` Whether the slider is in focus

  - \`{boolean} disabled\` Whether the slider is disabled

- **Usage**:

  \`\`\`html
  <vue-slider v-model="value">
    <template #tooltip="{ value }">
      <div class="custom-tooltip">{{ value }}</div>
    </template>
  </vue-slider>
  \`\`\`
        `,
      },
    },
  },
} as Meta

export const tooltip: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value }
  },
  template: `
    <VueSlider v-model="value" tooltip="always" >
      <template #tooltip="{pos, index, value, focus, disabled}">
        <div>{{ value }}</div>
      </template>
    </VueSlider>
  `,
})
tooltip.storyName = 'tooltip'
