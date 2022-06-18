import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Disabled' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 10
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
