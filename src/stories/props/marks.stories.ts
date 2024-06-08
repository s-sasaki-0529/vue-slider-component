import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueSlider from '../../../lib'

export default {
  title: 'props/marks',
  parameters: {
    docs: {
      description: {
        component: `
- **Type**: \`boolean | Marks | Array<number | string> | MarksFunction\`

\`\`\`ts
interface Mark {
  key: string]: string | MarkOption
}
interface MarkOption {
  label: Value
  style?: Styles
  activeStyle?: Styles
  labelStyle?: Styles
  labelActiveStyle?: Styles
}
type MarksFunction = (value: Value) => boolean | MarkOption
\`\`\`

- **Default**: \`undefined\`

- **Usage**:

Used to control the Mark of the display.
        `,
      },
    },
  },
} as Meta

export const marks: StoryFn = args => ({
  components: { VueSlider },
  setup() {
    const value = ref(2)
    const boolean = true
    const array = [1, 3]
    const object1 = {
      '0': '😭',
      '1': '😢',
      '2': '😑',
      '3': '😊',
      '4': '😆',
    }
    const object2 = {
      '0': { label: '零', labelStyle: { color: 'pink' } },
      '1': { label: '壱', labelStyle: { color: 'pink' } },
      '2': { label: '弐', labelStyle: { color: 'pink' } },
      '3': { label: '参', labelStyle: { color: 'pink' } },
    }
    const func = (v: number) => v % 2 === 0
    return { value, boolean, array, object1, object2, func, args }
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <p>{{ boolean }}</p>
        <VueSlider v-model="value" :min="0" :max="4" :marks="boolean" />
      </div>

      <div>
        <p>{{ array }}</p>
        <VueSlider v-model="value" :min="0" :max="4" :marks="array" />
      </div>

      <div>
        <p>{{ object1 }}</p>
        <VueSlider v-model="value" :min="0" :max="4" :marks="object1" />
      </div>

      <div>
        <p>{{ object2 }}</p>
        <VueSlider v-model="value" :min="0" :max="4" :marks="object2" />
      </div>

      <div>
        <p>{{ func }}</p>
        <VueSlider v-model="value" :min="0" :max="4" :marks="func" />
      </div>
    </div>
  `,
})
marks.storyName = 'marks'
