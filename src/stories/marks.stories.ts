import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Marks' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 5
    return { value, args }
  },
  template: '<VueSlider v-model="value" v-bind="args" />',
})

export const Auto = Template.bind({})
Auto.args = {
  min: 0,
  max: 10,
  marks: true,
}

export const ArrayData = Template.bind({})
ArrayData.args = {
  min: 0,
  max: 10,
  marks: [0, 2, 4, 6, 8, 10],
}

export const ObjectData = Template.bind({})
ObjectData.args = {
  min: 0,
  max: 10,
  marks: {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
    10: '十',
  },
}
