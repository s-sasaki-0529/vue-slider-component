import VueSlider from './vue-slider.vue'
import VueSliderMark from './vue-slider-mark'
import VueSliderDot from './vue-slider-dot'
import { ERROR_TYPE } from './utils/control'
VueSlider.VueSliderMark = VueSliderMark
VueSlider.VueSliderDot = VueSliderDot

export default VueSlider
export { ERROR_TYPE, VueSliderMark, VueSliderDot }
