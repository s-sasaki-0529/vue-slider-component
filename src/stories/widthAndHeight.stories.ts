import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'WidthAndHeight' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 50
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const WidthAndHeight = Template.bind({})
WidthAndHeight.args = {
  width: '50%',
  height: 20,
}
