# Getting started



## Install

```bash
# npm install vue-3-slider-component --save
$ yarn add vue-3-slider-component
```

## Usage

```vue
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
```
