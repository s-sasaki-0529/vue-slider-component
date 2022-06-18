---
layout: home
hero:
  name: vue-3-slider-component
  text: A highly customized slider component for Vue 3
  actions:
    - text: Overview
      link: /overview
      theme: brand
    - text: Get Started
      link: /gettingStarted
      theme: alt
---

<script setup>
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'

const value1 = ref([4, 8])
</script>

<div style="padding: 2rem;">
  <VueSlider v-model="value1" marks :min="0" :max="20"/>
</div>