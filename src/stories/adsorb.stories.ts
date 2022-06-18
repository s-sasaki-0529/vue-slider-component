import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Adsorb' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 5
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const Adsorb = Template.bind({})
Adsorb.args = {
  min: 0,
  max: 10,
  adsorb: true,
}
