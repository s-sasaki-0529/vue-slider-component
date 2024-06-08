import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/lazy',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean\`

- **Default**: \`false\`

- **Usage**:

  Is it lazy to update the value.

  Useful whenever you need to consume a high-loss operation (e.g. Ajax).

  If you set \`lazy\` and still need to listen for changes in the value, you can listen to the event \`dragging\`.

  \`\`\`html
  <VueSlider
    v-model="value"
    :lazy="true"
    @dragging="val => // do something"
  />
  \`\`\`
  `,
      },
    },
  },
} as Meta

export const lazy: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <p>value={{ value }}</p>
    <VueSlider v-model="value" :lazy="args.lazy" />
  `,
})
lazy.storyName = 'lazy'
lazy.args = {
  lazy: true,
}
