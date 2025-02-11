<template>
  <div
    ref="container"
    :class="containerClasses"
    :style="containerStyles"
    @click="clickHandle"
    @touchstart.passive="dragStartOnProcess"
    @mousedown="dragStartOnProcess"
    v-bind="$attrs"
  >
    <div ref="rail" class="vue-slider-rail" :style="railStyle">
      <template v-for="(item, index) in processArray">
        <slot name="process" v-bind="{ ...item }">
          <div class="vue-slider-process" :key="`process-${index}`" :style="item.style" />
        </slot>
      </template>

      <template v-if="sliderMarks">
        <div class="vue-slider-marks">
          <template v-for="(mark, index) in control.markList">
            <slot name="mark" v-bind="{ ...mark }">
              <VueSliderMark
                :key="`mark-${index}`"
                :mark="mark"
                :hideLabel="hideLabel"
                :style="{
                  [isHorizontal ? 'height' : 'width']: '100%',
                  [isHorizontal ? 'width' : 'height']: tailSize,
                  [mainDirection]: `${mark.pos}%`,
                }"
                :stepStyle="stepStyle"
                :stepActiveStyle="stepActiveStyle"
                :labelStyle="labelStyle"
                :labelActiveStyle="labelActiveStyle"
                :onPressLabel="(pos) => clickable && setValueByPos(pos)"
              >
                <template #step>
                  <slot name="step" v-bind="{ ...mark }" />
                </template>
                <template #label>
                  <slot name="label" v-bind="{ ...mark }" />
                </template>
              </VueSliderMark>
            </slot>
          </template>
        </div>
      </template>

      <template v-for="(dot, index) in dots">
        <VueSliderDot
          :ref="`dot-${index}`"
          :value="dot.value"
          :disabled="dot.disabled"
          :focus="dot.focus"
          :dot-style="[
            dot.style,
            dot.disabled ? dot.disabledStyle : null,
            dot.focus ? dot.focusStyle : null,
          ]"
          :tooltip="dot.tooltip || tooltip"
          :tooltip-style="[
            tooltipStyle,
            dot.tooltipStyle,
            dot.disabled ? dot.tooltipDisabledStyle : null,
            dot.focus ? dot.tooltipFocusStyle : null,
          ]"
          :tooltip-formatter="
            Array.isArray(sliderTooltipFormatter)
              ? sliderTooltipFormatter[index]
              : sliderTooltipFormatter
          "
          :tooltip-placement="tooltipDirections[index]"
          :style="[
            dotBaseStyle,
            {
              [mainDirection]: `${dot.pos}%`,
              transition: `${mainDirection} ${animateTime}s`,
            },
          ]"
          :onDrag-start="() => dragStart(index)"
          role="slider"
          :aria-valuenow="dot.value"
          :aria-valuemin="this.min"
          :aria-valuemax="this.max"
          :aria-orientation="this.isHorizontal ? 'horizontal' : 'vertical'"
          tabindex="0"
          @focus="() => !dot.disabled && focus(index)"
          @blur="() => blur()"
          v-bind="{ ...dotAttrs }"
        >
          <template #dot>
            <slot name="dot" v-bind="{ ...dot }" />
          </template>
          <template #tooltip>
            <slot name="tooltip" v-bind="{ ...dot }" />
          </template>
        </VueSliderDot>
        <slot name="default" v-bind="{ value: getValue() }" />
      </template>
    </div>
  </div>
</template>

<script>
import VueSliderDot from './vue-slider-dot.vue'
import VueSliderMark from './vue-slider-mark.vue'
import { getSize, getPos, getKeyboardHandleFunc } from './utils'
import Decimal from './utils/decimal'
import Control, { ERROR_TYPE } from './utils/control'
import State from './utils/state'

const DEFAULT_SLIDER_SIZE = 4

export const SliderState = {
  // StateMap
  None: 0,
  Drag: 1 << 1,
  Focus: 1 << 2,
}

import './styles/style.scss'
import './styles/slider.scss'
export default {
  emits: ['update:modelValue', 'change', 'drag-start', 'drag-end', 'dragging', 'error'],
  components: {
    VueSliderDot,
    VueSliderMark,
  },
  props: {
    modelValue: {
      type: [Number, String, Array],
      default: 0,
    },
    silent: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'ltr',
      validator: (dir) => ['ltr', 'rtl', 'ttb', 'btt'].indexOf(dir) > -1,
    },
    width: {
      type: [Number, String],
      default: undefined,
    },
    height: {
      type: [Number, String],
      default: undefined,
    },
    dotSize: {
      type: [Array, Number], // The size of the slider, optional [width, height] | size
      default: 14,
    },
    contained: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    interval: {
      type: Number,
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    dragOnClick: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
    data: {
      type: [Object, Array], // Value[] | object[] | DataObject
      default: undefined,
    },
    dataValue: {
      type: String,
      default: 'value',
    },
    dataLabel: {
      type: String,
      default: 'label',
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      default: 'active',
      validator: (val) => ['none', 'always', 'focus', 'hover', 'active'].indexOf(val) > -1,
    },
    tooltipPlacement: {
      type: [String, Array],
      default: undefined,
      validator: (data) =>
        (Array.isArray(data) ? data : [data]).every(
          (val) => ['top', 'right', 'bottom', 'left'].indexOf(val) > -1,
        ),
    },
    tooltipFormatter: {
      type: [String, Array, Function],
      default: '',
    },
    useKeyboard: {
      type: Boolean,
      default: true,
    },
    keydownHook: {
      type: [Boolean, Function],
      default: undefined,
    },
    enableCross: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Boolean,
      default: true,
    },
    minRange: {
      type: Number,
      default: undefined,
    },
    maxRange: {
      type: Number,
      default: undefined,
    },
    marks: {
      type: [Boolean, Object, Array, Function],
      default: false,
    },
    process: {
      type: [Boolean, Function],
      default: true,
    },
    zoom: {
      type: [Number],
      default: undefined,
    },
    included: {
      type: [Boolean],
      default: false,
    },
    adsorb: {
      type: [Boolean],
      default: false,
    },
    hideLabel: {
      type: [Boolean],
      default: false,
    },
    dotOptions: {
      type: Object,
      default: undefined,
    },
    dotAttrs: {
      type: Object,
      default: undefined,
    },
    railStyle: {
      type: Object,
      default: null,
    },
    processStyle: {
      type: Object,
      default: null,
    },
    dotStyle: {
      type: Object,
      default: null,
    },
    tooltipStyle: {
      type: Object,
      default: null,
    },
    stepStyle: {
      type: Object,
      default: null,
    },
    stepActiveStyle: {
      type: Object,
      default: null,
    },
    labelStyle: {
      type: Object,
      default: null,
    },
    labelActiveStyle: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      control: null, // Control instance
      states: new State(SliderState),
      scale: 1,
      focusDotIndex: 0,
    }
  },
  computed: {
    tailSize() {
      return getSize((this.isHorizontal ? this.height : this.width) || DEFAULT_SLIDER_SIZE)
    },

    containerClasses() {
      return [
        'vue-slider',
        [`vue-slider-${this.direction}`],
        {
          'vue-slider-disabled': this.disabled,
        },
      ]
    },
    containerStyles() {
      const [dotWidth, dotHeight] = Array.isArray(this.dotSize)
        ? this.dotSize
        : [this.dotSize, this.dotSize]
      const containerWidth = this.width
        ? getSize(this.width)
        : this.isHorizontal
          ? 'auto'
          : getSize(DEFAULT_SLIDER_SIZE)
      const containerHeight = this.height
        ? getSize(this.height)
        : this.isHorizontal
          ? getSize(DEFAULT_SLIDER_SIZE)
          : 'auto'
      return {
        padding: this.contained
          ? `${dotHeight / 2}px ${dotWidth / 2}px`
          : this.isHorizontal
            ? `${dotHeight / 2}px 0`
            : `0 ${dotWidth / 2}px`,
        width: containerWidth,
        height: containerHeight,
      }
    },
    processArray() {
      return this.control.processArray.map(([start, end, style], index) => {
        if (start > end) {
          /* tslint:disable:semicolon */
          ;[start, end] = [end, start]
        }
        const sizeStyleKey = this.isHorizontal ? 'width' : 'height'
        return {
          start,
          end,
          index,
          style: {
            [this.isHorizontal ? 'height' : 'width']: '100%',
            [this.isHorizontal ? 'top' : 'left']: 0,
            [this.mainDirection]: `${start}%`,
            [sizeStyleKey]: `${end - start}%`,
            transitionProperty: `${sizeStyleKey},${this.mainDirection}`,
            transitionDuration: `${this.animateTime}s`,
            ...this.processStyle,
            ...style,
          },
        }
      })
    },
    dotBaseStyle() {
      const [dotWidth, dotHeight] = Array.isArray(this.dotSize)
        ? this.dotSize
        : [this.dotSize, this.dotSize]
      let dotPos
      if (this.isHorizontal) {
        dotPos = {
          transform: `translate(${this.isReverse ? '50%' : '-50%'}, -50%)`,
          '-WebkitTransform': `translate(${this.isReverse ? '50%' : '-50%'}, -50%)`,
          top: '50%',
          [this.direction === 'ltr' ? 'left' : 'right']: '0',
        }
      } else {
        dotPos = {
          transform: `translate(-50%, ${this.isReverse ? '50%' : '-50%'})`,
          '-WebkitTransform': `translate(-50%, ${this.isReverse ? '50%' : '-50%'})`,
          left: '50%',
          [this.direction === 'btt' ? 'bottom' : 'top']: '0',
        }
      }
      return {
        width: `${dotWidth}px`,
        height: `${dotHeight}px`,
        ...dotPos,
      }
    },
    mainDirection() {
      switch (this.direction) {
        case 'ltr':
          return 'left'
        case 'rtl':
          return 'right'
        case 'btt':
          return 'bottom'
        case 'ttb':
          return 'top'
      }
    },
    isHorizontal() {
      return this.direction === 'ltr' || this.direction === 'rtl'
    },
    isReverse() {
      return this.direction === 'rtl' || this.direction === 'btt'
    },
    tooltipDirections() {
      const dir = this.tooltipPlacement || (this.isHorizontal ? 'top' : 'left')
      if (Array.isArray(dir)) {
        return dir
      } else {
        return this.dots.map(() => dir)
      }
    },
    dots() {
      return this.control.dotsPos.map((pos, index) => ({
        pos,
        index,
        value: this.control.dotsValue[index],
        focus: this.states.has(SliderState.Focus) && this.focusDotIndex === index,
        disabled: this.disabled,
        style: this.dotStyle,
        ...((Array.isArray(this.dotOptions) ? this.dotOptions[index] : this.dotOptions) || {}),
      }))
    },
    animateTime() {
      if (this.states.has(SliderState.Drag)) {
        return 0
      }
      return this.duration
    },
    canSort() {
      return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross
    },
    sliderData() {
      if (this.isObjectArrayData(this.data)) {
        return this.data.map((obj) => obj[this.dataValue])
      } else if (this.isObjectData(this.data)) {
        return Object.keys(this.data)
      } else {
        return this.data
      }
    },
    sliderMarks() {
      if (this.marks) {
        return this.marks
      } else if (this.isObjectArrayData(this.data)) {
        return (val) => {
          const mark = { label: val }
          this.data.some((obj) => {
            if (obj[this.dataValue] === val) {
              mark.label = obj[this.dataLabel]
              return true
            }
            return false
          })
          return mark
        }
      } else if (this.isObjectData(this.data)) {
        return this.data
      }
    },
    sliderTooltipFormatter() {
      if (this.tooltipFormatter) {
        return this.tooltipFormatter
      } else if (this.isObjectArrayData(this.data)) {
        return (val) => {
          let tooltipText = '' + val
          this.data.some((obj) => {
            if (obj[this.dataValue] === val) {
              tooltipText = obj[this.dataLabel]
              return true
            }
            return false
          })
          return tooltipText
        }
      } else if (this.isObjectData(this.data)) {
        const data = this.data
        return (val) => data[val]
      }
    },
    // Slider value and component internal value are inconsistent
    isNotSync() {
      const values = this.control.dotsValue
      return Array.isArray(this.modelValue)
        ? this.modelValue.length !== values.length ||
            this.modelValue.some((val, index) => val !== values[index])
        : this.modelValue !== values[0]
    },
    /**
     * Get the drag range of the slider
     *
     * @private
     * @param {number} index slider index
     * @returns {[number, number]} range [start, end]
     * @memberof VueSlider
     */
    dragRange() {
      const prevDot = this.dots[this.focusDotIndex - 1]
      const nextDot = this.dots[this.focusDotIndex + 1]
      return [prevDot ? prevDot.pos : -Infinity, nextDot ? nextDot.pos : Infinity]
    },
  },
  created() {
    this.initControl()
  },
  mounted() {
    this.bindEvent()
  },
  beforeUnmount() {
    this.unbindEvent()
  },
  methods: {
    isObjectData(data) {
      return !!data && Object.prototype.toString.call(data) === '[object Object]'
    },
    isObjectArrayData(data) {
      return !!data && Array.isArray(data) && data.length > 0 && typeof data[0] === 'object'
    },
    bindEvent() {
      document.addEventListener('touchmove', this.dragMove, { passive: false })
      document.addEventListener('touchend', this.dragEnd, { passive: false })
      document.addEventListener('mousedown', this.blurHandle)
      document.addEventListener('mousemove', this.dragMove, { passive: false })
      document.addEventListener('mouseup', this.dragEnd)
      document.addEventListener('mouseleave', this.dragEnd)
      document.addEventListener('keydown', this.keydownHandle)
    },
    unbindEvent() {
      document.removeEventListener('touchmove', this.dragMove)
      document.removeEventListener('touchend', this.dragEnd)
      document.removeEventListener('mousedown', this.blurHandle)
      document.removeEventListener('mousemove', this.dragMove)
      document.removeEventListener('mouseup', this.dragEnd)
      document.removeEventListener('mouseleave', this.dragEnd)
      document.removeEventListener('keydown', this.keydownHandle)
    },
    setScale() {
      const decimal = new Decimal(
        Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight),
      )
      if (this.zoom !== void 0) {
        decimal.multiply(this.zoom)
      }
      decimal.divide(100)
      this.scale = decimal.toNumber()
    },
    initControl() {
      this.control = new Control({
        value: this.modelValue,
        data: this.sliderData,
        enableCross: this.enableCross,
        fixed: this.fixed,
        max: this.max,
        min: this.min,
        interval: this.interval,
        minRange: this.minRange,
        maxRange: this.maxRange,
        order: this.order,
        marks: this.sliderMarks,
        included: this.included,
        process: this.process,
        adsorb: this.adsorb,
        dotOptions: this.dotOptions,
        onError: this.emitError,
      })
      this.syncValueByPos()
      ;[
        'data',
        'enableCross',
        'fixed',
        'max',
        'min',
        'interval',
        'minRange',
        'maxRange',
        'order',
        'marks',
        'process',
        'adsorb',
        'included',
        'dotOptions',
      ].forEach((name) => {
        this.$watch(name, (val) => {
          if (
            name === 'data' &&
            Array.isArray(this.control.data) &&
            Array.isArray(val) &&
            this.control.data.length === val.length &&
            val.every((item, index) => item === this.control.data[index])
          ) {
            return false
          }
          switch (name) {
            case 'data':
            case 'dataLabel':
            case 'dataValue':
              this.control.data = this.sliderData
              break
            case 'mark':
              this.control.marks = this.sliderMarks
              break
            default:
              this.control[name] = val
          }
          if (['data', 'max', 'min', 'interval'].indexOf(name) > -1) {
            this.control.syncDotsPos()
          }
        })
      })
    },
    syncValueByPos() {
      const values = this.control.dotsValue
      if (
        this.isDiff(values, Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue])
      ) {
        const eventValue = values.length === 1 ? values[0] : [...values]
        this.$emit('change', eventValue, this.focusDotIndex)
        this.$emit('update:modelValue', eventValue, this.focusDotIndex)
      }
    },
    isDiff(value1, value2) {
      return value1.length !== value2.length || value1.some((val, index) => val !== value2[index])
    },
    emitError(type, message) {
      if (!this.silent) {
        console.error(`[VueSlider error]: ${message}`)
      }
      this.$emit('error', type, message)
    },
    dragStartOnProcess(e) {
      if (this.dragOnClick) {
        this.setScale()
        const pos = this.getPosByEvent(e)
        const index = this.control.getRecentDot(pos)
        if (this.dots[index].disabled) {
          return
        }
        this.dragStart(index)
        this.control.setDotPos(pos, this.focusDotIndex)
        if (!this.lazy) {
          this.syncValueByPos()
        }
      }
    },
    dragStart(index) {
      this.focusDotIndex = index
      this.setScale()
      this.states.add(SliderState.Drag)
      this.states.add(SliderState.Focus)
      this.$emit('drag-start', this.focusDotIndex)
    },
    dragMove(e) {
      if (!this.states.has(SliderState.Drag)) {
        return false
      }
      e.preventDefault()
      const pos = this.getPosByEvent(e)
      this.isCrossDot(pos)
      this.control.setDotPos(pos, this.focusDotIndex)
      if (!this.lazy) {
        this.syncValueByPos()
      }
      const value = this.control.dotsValue
      this.$emit('dragging', value.length === 1 ? value[0] : [...value], this.focusDotIndex)
    },
    // If the component is sorted, then when the slider crosses, toggle the currently selected slider index
    isCrossDot(pos) {
      if (this.canSort) {
        const curIndex = this.focusDotIndex
        let curPos = pos
        if (curPos > this.dragRange[1]) {
          curPos = this.dragRange[1]
          this.focusDotIndex++
        } else if (curPos < this.dragRange[0]) {
          curPos = this.dragRange[0]
          this.focusDotIndex--
        }
        if (curIndex !== this.focusDotIndex) {
          const dotVm = this.$refs[`dot-${this.focusDotIndex}`]
          if (dotVm && dotVm.$el) {
            dotVm.$el.focus()
          }
          this.control.setDotPos(curPos, curIndex)
        }
      }
    },
    dragEnd(e) {
      if (!this.states.has(SliderState.Drag)) {
        return false
      }

      setTimeout(() => {
        if (this.lazy) {
          this.syncValueByPos()
        }
        if (this.included && this.isNotSync) {
          this.control.setValue(this.modelValue)
        } else {
          // Sync slider position
          this.control.syncDotsPos()
        }
        this.states.delete(SliderState.Drag)
        // If useKeyboard is true, keep focus status after dragging
        if (!this.useKeyboard || 'targetTouches' in e) {
          this.states.delete(SliderState.Focus)
        }
        this.$emit('drag-end', this.focusDotIndex)
      })
    },
    blurHandle(e) {
      if (
        !this.states.has(SliderState.Focus) ||
        !this.$refs.container ||
        this.$refs.container.contains(e.target)
      ) {
        return false
      }
      this.states.delete(SliderState.Focus)
    },
    clickHandle(e) {
      if (!this.clickable || this.disabled) {
        return false
      }
      if (this.states.has(SliderState.Drag)) {
        return
      }
      this.setScale()
      const pos = this.getPosByEvent(e)
      this.setValueByPos(pos)
    },
    focus(index = 0) {
      this.states.add(SliderState.Focus)
      this.focusDotIndex = index
    },
    blur() {
      this.states.delete(SliderState.Focus)
    },
    getValue() {
      const values = this.control.dotsValue
      return values.length === 1 ? values[0] : values
    },
    getIndex() {
      const indexes = this.control.dotsIndex
      return indexes.length === 1 ? indexes[0] : indexes
    },
    setValue(value) {
      this.control.setValue(Array.isArray(value) ? [...value] : [value])
      this.syncValueByPos()
    },
    setIndex(index) {
      const value = Array.isArray(index)
        ? index.map((n) => this.control.getValueByIndex(n))
        : this.control.getValueByIndex(index)
      this.setValue(value)
    },
    setValueByPos(pos) {
      const index = this.control.getRecentDot(pos)
      if (this.disabled || this.dots[index].disabled) {
        return false
      }
      this.focusDotIndex = index
      this.control.setDotPos(pos, index)
      this.syncValueByPos()

      if (this.useKeyboard) {
        this.states.add(SliderState.Focus)
      }

      setTimeout(() => {
        if (this.included && this.isNotSync) {
          this.control.setValue(this.modelValue)
        } else {
          this.control.syncDotsPos()
        }
      })
    },
    keydownHandle(e) {
      if (!this.useKeyboard || !this.states.has(SliderState.Focus)) {
        return false
      }

      const isInclude = this.included && this.marks
      const handleFunc = getKeyboardHandleFunc(e, {
        direction: this.direction,
        max: isInclude ? this.control.markList.length - 1 : this.control.total,
        min: 0,
        hook: this.keydownHook,
      })

      if (handleFunc) {
        e.preventDefault()
        let newIndex = -1
        let pos = 0
        if (isInclude) {
          this.control.markList.some((mark, index) => {
            if (mark.value === this.control.dotsValue[this.focusDotIndex]) {
              newIndex = handleFunc(index)
              return true
            }
            return false
          })
          if (newIndex < 0) {
            newIndex = 0
          } else if (newIndex > this.control.markList.length - 1) {
            newIndex = this.control.markList.length - 1
          }
          pos = this.control.markList[newIndex].pos
        } else {
          newIndex = handleFunc(
            this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex]),
          )
          pos = this.control.parseValue(this.control.getValueByIndex(newIndex))
        }
        this.isCrossDot(pos)
        this.control.setDotPos(pos, this.focusDotIndex)
        this.syncValueByPos()
      }
    },
    getPosByEvent(e) {
      return getPos(e, this.$refs.rail, this.isReverse)[this.isHorizontal ? 'x' : 'y'] / this.scale
    },
  },
  watch: {
    modelValue: {
      handler() {
        if (this.control && !this.states.has(SliderState.Drag) && this.isNotSync) {
          this.control.setValue(this.modelValue)
          this.syncValueByPos()
        }
      },
      deep: true,
    },
  },
}
</script>
