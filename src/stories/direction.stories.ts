import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Direction' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 20
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const ltr = Template.bind({})
ltr.args = {
  direction: 'ltr',
}

export const rtl = Template.bind({})
rtl.args = {
  direction: 'rtl',
}

export const ttb = Template.bind({})
ttb.args = {
  direction: 'ttb',
  height: 300,
}

export const btt = Template.bind({})
btt.args = {
  direction: 'btt',
  height: 300,
}
