import { Story, Meta } from '@storybook/vue3'
import VueSlider from '../../lib/index.js'

export default { title: 'Duration' } as Meta

const Template: Story = args => ({
  components: { VueSlider },
  setup() {
    return { args }
  },
  data() {
    return {
      value: 10,
    }
  },
  template: `
    <button @click="() => value = 50">Set to 50</button>
    <VueSlider v-model="value" v-bind="args" />
  `,
})

export const Duration = Template.bind({})
Duration.args = {
  duration: 2,
}
