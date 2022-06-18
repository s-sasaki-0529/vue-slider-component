import { Story, Meta } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import VueSlider from '../../lib/index.js'

export default { title: 'Events' } as Meta

export const Change: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 50
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" v-bind="args" @change="change"/>
  `,
  methods: {
    change(v: number) {
      action('change')(v)
    },
  },
})

export const DragState: Story = args => ({
  components: { VueSlider },
  setup() {
    const value = 50
    return { value, args }
  },
  template: `
    <VueSlider v-model="value" v-bind="args" @dragStart="dragStart" @dragEnd="dragEnd" @dragging="dragging" />
  `,
  methods: {
    dragStart(v: number) {
      action('dragStart')(v)
    },
    dragEnd(v: number) {
      action('dragEnd')(v)
    },
    dragging(v: number) {
      action('dragging')(v)
    },
  },
})
