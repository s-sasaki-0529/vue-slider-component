<script setup>
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'

const value1 = ref(50)
const value2 = ref([20, 60])
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
