import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Contained' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 0
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const Contained = Template.bind({})
Contained.args = {
  contained: true,
}
