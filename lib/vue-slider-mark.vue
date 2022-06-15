<template>
  <div :class="marksClasses">
    <slot name="step">
      <div
        :class="stepClasses"
        :style="[
          stepStyle,
          mark.style,
          mark.active ? stepActiveStyle : null,
          mark.active ? mark.activeStyle : null,
        ]"
      />
    </slot>

    <template v-if="!hideLabel">
      <slot name="label">
        <div
          :class="labelClasses"
          :style="[
            labelStyle,
            mark.labelStyle,
            mark.active ? labelActiveStyle : null,
            mark.active ? mark.labelActiveStyle : null,
          ]"
          @click="labelClickHandle"
        >
          {{ mark.label }}
        </div>
      </slot>
    </template>
  </div>
</template>

<script>
import './styles/mark.scss'
export default {
  props: {
    mark: {
      type: Object, // Mark
      required: true,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    stepStyle: {
      type: Object, // [key: string]: any
      default: undefined,
    },
    stepActiveStyle: {
      type: Object, // [key: string]: any
      default: undefined,
    },
    labelStyle: {
      type: Object, // [key: string]: any
      default: undefined,
    },
    labelActiveStyle: {
      type: Object, // [key: string]: any
      default: undefined,
    },
  },
  computed: {
    marksClasses() {
      return [
        'vue-slider-mark',
        {
          'vue-slider-mark-active': this.mark.active,
        },
      ]
    },
    stepClasses() {
      return [
        'vue-slider-mark-step',
        {
          'vue-slider-mark-step-active': this.mark.active,
        },
      ]
    },
    labelClasses() {
      return [
        'vue-slider-mark-label',
        {
          'vue-slider-mark-label-active': this.mark.active,
        },
      ]
    },
  },
  methods: {
    labelClickHandle(e /* MouseEvent | TouchEvent */) {
      e.stopPropagation()
      this.$emit('pressLabel', this.mark.pos)
    },
  },
}
</script>
