import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'TooltipPlacement' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 5
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" v-bind="args" @change="v => newValue = v" />
  `,
})

export const Top = Template.bind({})
Top.args = {
  tooltip: 'always',
  tooltipPlacement: 'top',
}

export const Bottom = Template.bind({})
Bottom.args = {
  tooltip: 'always',
  tooltipPlacement: 'bottom',
}

export const Left = Template.bind({})
Left.args = {
  tooltip: 'always',
  tooltipPlacement: 'left',
}

export const Right = Template.bind({})
Right.args = {
  tooltip: 'always',
  tooltipPlacement: 'right',
}
