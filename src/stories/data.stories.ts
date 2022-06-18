import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Data' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = args.value
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const ArrayData = Template.bind({})
ArrayData.args = {
  value: 'D',
  data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
}

export const ArrayOfObjectData = Template.bind({})
ArrayOfObjectData.args = {
  value: 3,
  data: [
    { value: 1, label: 'A' },
    { value: 2, label: 'B' },
    { value: 3, label: 'C' },
    { value: 4, label: 'D' },
    { value: 5, label: 'E' },
  ],
}

export const ObjectData = Template.bind({})
ObjectData.args = {
  value: '3',
  dataKey: 'name',
  dataLabel: 'number',
  data: {
    '1': 'A',
    '2': 'B',
    '3': 'C',
    '4': 'D',
    '5': 'E',
    '6': 'F',
    '7': 'G',
  },
}
