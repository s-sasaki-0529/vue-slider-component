import { Story, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../lib/index.js'

export default { title: 'Lazy' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 5
    const newValue = ref(0)
    return { value, newValue, args }
  },
  template: `
    <p>value={{ newValue }}</p>
    <VueSlider v-model="value" v-bind="args" @change="v => newValue = v" />
  `,
})

export const Lazy = Template.bind({})
Lazy.args = {
  lazy: true,
}
