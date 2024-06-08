import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/tooltip',
  parameters: {
    docs: {
      description: {
        component: `
### Control Tooltip display

**none**: the Tooltip is never displayed;\n
**always**: the Tooltip is always displayed;\n
**hover**: the Tooltip will be displayed when the slider get hover;\n
**focus**: the Tooltip will only be displayed when the slider has focus. And when useKeyboard is true, the end of the drag will still get the focus.\n
**active**: the Tooltip have both hover and focus;\n
        `,
      },
    },
  },
} as Meta

export const tooltip: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(50)
    return { value, args }
  },
  template: `
    <p>none</p>
    <VueSlider v-model="value" tooltip="none" />
    <p>always</p>
    <VueSlider v-model="value" tooltip="always" />
    <p>hover</p>
    <VueSlider v-model="value" tooltip="hover" />
    <p>focus</p>
    <VueSlider v-model="value" tooltip="focus" />
    <p>active</p>
    <VueSlider v-model="value" tooltip="active" />
  `,
})
tooltip.storyName = 'tooltip'
