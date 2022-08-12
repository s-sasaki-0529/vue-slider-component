import { Story, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../lib'

export default {
  title: 'sandbox',
  component: VueSlider,
} as Meta

export const sandbox: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(args.modelValue)
    return { value, sandbox, args }
  },
  template: `
    <VueSlider v-model="value" v-bind="args" />
  `,
})
sandbox.storyName = 'sandbox'
sandbox.args = {
  modelValue: 50,
}
