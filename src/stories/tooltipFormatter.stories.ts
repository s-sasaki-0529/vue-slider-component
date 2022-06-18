import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'TooltipFormatter' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = args.value || 50
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" v-bind="args" @change="v => newValue = v" />
  `,
})

export const FormatterString = Template.bind({})
FormatterString.args = {
  tooltip: 'always',
  tooltipFormatter: '{value}%',
}

export const FormatFunction = Template.bind({})
FormatFunction.args = {
  tooltip: 'always',
  value: 'D',
  data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  tooltipFormatter: (v: string) => v.toLowerCase(),
}
