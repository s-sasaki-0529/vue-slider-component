<script setup>
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'

const value1 = ref(50)
const value2 = ref([20, 60])
const value3 = ref(0.5)
const value4 = ref(25)
const value5 = ref(50)
const value6 = ref(0)
const value7 = ref([25, 50])
const value8 = ref(5)
const value9 = ref('d')
const value10 = ref(30)
const value11 = ref(0)
</script>


# Overview

`vue-3-slider-component` is a highly customized slider component for Vue 3.

::: info
This package is forked from [NightCatSame/vue-slider-component](https://github.com/NightCatSama/vue-slider-component) (v3.2.10) and rewritten to work with Vue 3.

In many cases, it is preferable to use the original.
:::

## Simple examples

### Single slider

<div style="padding: 2rem;">
  <VueSlider v-model="value1" />
</div>

### Multiple sliders

<div style="padding: 2rem;">
  <VueSlider v-model="value2" />
</div>

### Set the range of values

<div style="padding: 2rem;">
  <VueSlider v-model="value3" :min="0" :max="1" :interval="0.01" />
</div>

### Set the slider direction

<div style="padding: 2rem;">
  <VueSlider v-model="value4" direction="ltr" />
</div>
<div style="padding: 2rem;">
  <VueSlider v-model="value4" direction="rtl" />
</div>
<div style="display: flex">
  <div style="padding: 2rem;">
    <VueSlider v-model="value4" direction="ttb" :height="200" />
  </div>
  <div style="padding: 2rem;">
    <VueSlider v-model="value4" direction="btt" :height="200" />
  </div>
</div>

### Lazy

The value will only be updated when the drag is over

<div style="padding: 2rem;">
  <p>value: {{ value5 }}</p>
  <VueSlider v-model="value5" lazy />
</div>

::: tip
If you need to use the internal value of the component when dragging, you can listen to the `dragging` event or use the `default slot`.
:::

### Disabled slider

You can disable the entire component with `disabled` or disable the slider separately with `dot-options`

<div style="padding: 2rem;">
  <VueSlider v-model="value6" disabled />
</div>

<div style="padding: 2rem;">
  <VueSlider v-model="value7" :dotOptions="[{disabled: false}, {disabled: true}]" :order="false" />
</div>

::: warning
When disabling a single slider, use `order = false` or `enableCross = true`.
:::

### Adsorb

When `adsorb` is set to `true`, the slider automatically adsorb to the nearest value.

<div style="padding: 2rem;">
  <VueSlider v-model="value8" adsorb marks :min="0" :max="10" />
</div>

<div style="padding: 2rem;">
  <VueSlider v-model="value9" adsorb marks :data="['a', 'b', 'c', 'd', 'e', 'f', 'g']" />
</div>

<div style="padding: 2rem;">
  <VueSlider v-model="value10" adsorb :marks="[0, 10, 30, 60, 100]" include />
</div>

### Contained

By default, the center of the `dot` is used to align the edge.

When `contained` is set to `true`, the edge of the `dot` is used to align.

<div style="margin: 2rem; border-left: 1px dotted; border-right: 1px dotted; display: flex; flex-direction: column; gap: 2rem">
  <div>
    <VueSlider v-model="value11" />
    contained: false
  </div>
  <div>
    <VueSlider v-model="value11" contained />
    contained: false
  </div>
</div>