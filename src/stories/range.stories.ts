import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Range' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 15.0
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const Range = Template.bind({})
Range.args = {
  min: 10,
  max: 20,
  interval: 0.1,
}
