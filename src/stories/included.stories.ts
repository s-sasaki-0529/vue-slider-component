import { Story, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../lib/index.js'

export default { title: 'Included' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(4)
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const Included = Template.bind({})
Included.args = {
  min: 0,
  max: 10,
  marks: [0, 2, 4, 6, 8, 10],
  included: true,
}
