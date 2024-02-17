<template>
  <div
    ref="dot"
    :class="dotClasses"
    :aria-valuetext="tooltipValue"
    @mousedown="dragStart"
    @touchstart.passive="dragStart"
  >
    <slot name="dot">
      <div :class="handleClasses" :style="dotStyle" />
    </slot>

    <template v-if="tooltip !== 'none'">
      <div :class="tooltipClasses">
        <slot name="tooltip">
          <div :class="tooltipInnerClasses" :style="tooltipStyle">
            <span class="vue-slider-dot-tooltip-text">{{ tooltipValue }}</span>
          </div>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
import './styles/dot.scss'
export default {
  emits: ['drag-start'],
  props: {
    value: {
      type: [Number, String], // number | string
      default: 0,
    },
    tooltip: {
      type: String, // 'none' | 'always' | 'focus' | 'hover' | 'active'
      required: true,
    },
    dotStyle: {
      type: Array, // ([key: string]: any)[]
      default: () => ({}),
    },
    tooltipStyle: {
      type: Array, // ([key: string]: any)[]
      default: () => ({}),
    },
    tooltipPlacement: {
      type: String, // 'top' | 'right' | 'bottom' | 'left'
      required: true,
    },
    tooltipFormatter: {
      type: [String, Array, Object, Function],
      default: undefined,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dotClasses() {
      return [
        'vue-slider-dot',
        {
          'vue-slider-dot-hover': this.tooltip === 'hover' || this.tooltip === 'active',
          'vue-slider-dot-disabled': this.disabled,
          'vue-slider-dot-focus': this.focus,
        },
      ]
    },
    handleClasses() {
      return [
        'vue-slider-dot-handle',
        {
          'vue-slider-dot-handle-disabled': this.disabled,
          'vue-slider-dot-handle-focus': this.focus,
        },
      ]
    },
    tooltipClasses() {
      return [
        'vue-slider-dot-tooltip',
        [`vue-slider-dot-tooltip-${this.tooltipPlacement}`],
        {
          'vue-slider-dot-tooltip-show': this.showTooltip,
        },
      ]
    },
    tooltipInnerClasses() {
      return [
        'vue-slider-dot-tooltip-inner',
        [`vue-slider-dot-tooltip-inner-${this.tooltipPlacement}`],
        {
          'vue-slider-dot-tooltip-inner-disabled': this.disabled,
          'vue-slider-dot-tooltip-inner-focus': this.focus,
        },
      ]
    },
    showTooltip() {
      switch (this.tooltip) {
        case 'always':
          return true
        case 'none':
          return false
        case 'focus':
        case 'active':
          return !!this.focus
        default:
          return false
      }
    },
    tooltipValue() {
      if (this.tooltipFormatter) {
        return typeof this.tooltipFormatter === 'string'
          ? this.tooltipFormatter.replace(/\{value\}/, String(this.value))
          : this.tooltipFormatter(this.value)
      } else {
        return this.value
      }
    },
  },
  methods: {
    dragStart(e /* MouseEvent | TouchEvent */) {
      if (this.disabled) {
        return false
      }

      this.$emit('drag-start')
    },
  },
}
</script>
