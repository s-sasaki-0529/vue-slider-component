![banner](https://github.com/s-sasaki-0529/vue-slider-component/blob/master/.github/banner.jpg?raw=true)

[![license](https://img.shields.io/npm/l/express.svg)]()

> 🎚 A highly customized slider component

## Forked from [NightCatSame/vue-slider-component](https://github.com/NightCatSama/vue-slider-component)

This repository is forked from [NightCatSame/vue-slider-component](https://github.com/NightCatSama/vue-slider-component) (v3.2.10) and rewritten to work with Vue 3.

Please note that specifications may differ from the original.

## 🎯 install

```bash
$ yarn add vue-3-slider-component
# npm install vue-3-slider-component --save
```

## ✨ Features

- 🛠️ More customizable
- 🐳 Support for more sliders
- 📌 Add marks

## 📚 Documentation

[Storybook](https://vue-3-slider-component.netlify.app/?path=/docs/vue-3-slider-component--vue-3-slider-component)

TODO

- [ ] add `slots` stories
- [ ] add `methods` stories

## 🚀 Usage

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

## License

Licensing is in accordance with the original.

[MIT](https://github.com/NightCatSama/vue-slider-component/blob/master/LICENSE)
