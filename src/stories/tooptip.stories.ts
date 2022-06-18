import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Tooltip' } as Meta

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

export const None = Template.bind({})
None.args = {
  tooltip: 'none',
}

export const Always = Template.bind({})
Always.args = {
  tooltip: 'always',
}

export const Hover = Template.bind({})
Hover.args = {
  tooltip: 'hover',
}

export const Focus = Template.bind({})
Focus.args = {
  tooltip: 'focus',
}

export const Active = Template.bind({})
Active.args = {
  tooltip: 'active',
}
