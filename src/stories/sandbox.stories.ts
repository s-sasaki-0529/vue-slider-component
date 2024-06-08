import { StoryFn, Meta } from '@storybook/vue3'
import VueSlider from '../../lib'
import { ref } from 'vue'

export default {
  title: 'sandbox',
  component: VueSlider,
} as Meta

export const sandbox: StoryFn = args => ({
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
