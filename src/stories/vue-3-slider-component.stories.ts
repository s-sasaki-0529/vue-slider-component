import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../lib'

export default {
  title: 'vue-3-slider-component',
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: `
> 🎚 A highly customized slider component

[GitHub](https://github.com/s-sasaki-0529/vue-slider-component)

## Forked from [NightCatSame/vue-slider-component](https://github.com/NightCatSama/vue-slider-component)

This package is forked from [NightCatSame/vue-slider-component](https://github.com/NightCatSama/vue-slider-component) (v3.2.10) and rewritten to work with Vue 3.

Please note that specifications may differ from the original.

## 🎯 install

\`\`\`bash
$ yarn add vue-3-slider-component
# npm install vue-3-slider-component --save
\`\`\`

## 🚀 Usage

\`\`\`html
<template>
  <VueSlider v-model="value" />
</template>

<script>
import VueSlider from 'vue-3-slider-component'

export default {
  components: {
    VueSlider
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>
\`\`\`
        `,
      },
    },
  },
} as Meta

export const Vue3SliderComponent: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value1 = ref(50)
    const value2 = ref([30, 60])
    const value3 = ref(0.5)
    const value4 = ref(5)
    const value5 = ref(5)
    return { value1, value2, value3, value4, value5, args }
  },
  template: `
    <h1>Simple examples</h1>

    <h4>Single slider</h4>
    <VueSlider v-model="value1" />

    <h4>Multi slider</h4>
    <VueSlider v-model="value2" />

    <h4>Set the range of values</h4>
    <VueSlider v-model="value3" :min="0" :max="1" :interval="0.01" />

    <h4>Adsorb</h4>
    <VueSlider v-model="value4" :min="0" :max="10" marks adsorb />

    <h4>Direction</h4>
    <VueSlider v-model="value5" direction="rtl" />
  `,
})
Vue3SliderComponent.storyName = 'vue-3-slider-component'
