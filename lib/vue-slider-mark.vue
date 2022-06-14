<template>
  <div :class="marksClasses">
    <template v-if="$slots.step">
      <slot name="step" />
    </template>
    <template v-else>
      <div
        :class="stepClasses"
        :style="[
          stepStyle,
          mark.style,
          mark.active ? stepActiveStyle : null,
          mark.active ? mark.activeStyle : null,
        ]"
      />
    </template>

    <template v-if="!hideLabel">
      <template v-if="$slots.label">
        <slot name="label" />
      </template>
      <template v-else>
        <div
          :class="labelClasses"
          :style="[
            this.labelStyle,
            mark.labelStyle,
            mark.active ? this.labelActiveStyle : null,
            mark.active ? mark.labelActiveStyle : null,
          ]"
          @click="labelClickHandle"
        >
          {{ mark.label }}
        </div>
      </template>
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
