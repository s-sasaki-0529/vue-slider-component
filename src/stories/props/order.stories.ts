import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/order',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`true\`

- **Usage**:

  Whether to sort values, only valid for multiple sliders.

  For example, when the value is \`false\`, \`[50, 30]\` will not be automatically sorted to \`[30, 50]\`.

  This is effective when distinguishing multiple sliders.

  *When the value is \`false\`, the parameters \`minRange\`, \`maxRange\`, \`fixed\`, \`enableCross\` are invalid.*
        `,
      },
    },
  },
} as Meta

export const order: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref([50, 30])
    return { value, args }
  },
  template: `
    <p>value={{ value }}</p>
    <VueSlider v-model="value" :order="args.order" />
  `,
})
order.storyName = 'order'
order.args = {
  order: true,
}
