<template>
  <div id="app">
    <div class="group">
      <h3>{{ value1 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>default</p>
          <VueSlider
            :modelValue="value1"
            @change="
              v => {
                value1 = v
              }
            "
          />
        </div>

        <div class="sample">
          <p>tooltip=none</p>
          <VueSlider v-model="value1" tooltip="none" />
        </div>

        <div class="sample">
          <p>tooltip=always</p>
          <VueSlider v-model="value1" tooltip="always" />
        </div>

        <div class="sample">
          <p>tooltipFormatter={value}%</p>
          <VueSlider v-model="value1" :tooltip-formatter="'{value}%'" />
        </div>

        <div class="sample">
          <p>contained=true</p>
          <VueSlider v-model="value1" contained />
        </div>

        <div class="sample">
          <p>dotSize=30</p>
          <VueSlider v-model="value1" :dotSize="30" />
        </div>

        <div class="sample">
          <p>width=50%</p>
          <VueSlider v-model="value1" width="50%" />
        </div>

        <div class="sample">
          <p>height=20px</p>
          <VueSlider v-model="value1" height="20px" />
        </div>

        <div class="sample">
          <p>direction=rtl</p>
          <VueSlider v-model="value1" direction="rtl" />
        </div>

        <div class="sample">
          <p>duration=0</p>
          <VueSlider v-model="value1" :duration="0" />
        </div>

        <div class="sample">
          <p>lazy</p>
          <VueSlider v-model="value1" lazy />
        </div>

        <div class="sample">
          <p>direction=ttb</p>
          <VueSlider v-model="value1" direction="ttb" height="200px" />
        </div>

        <div class="sample">
          <p>direction=btt</p>
          <VueSlider v-model="value1" direction="btt" height="200px" />
        </div>

        <div class="sample">
          <p>disabled</p>
          <VueSlider v-model="value1" disabled />
        </div>

        <div class="sample">
          <p>dotStyle</p>
          <VueSlider v-model="value1" :dot-style="{ 'background-color': '#000' }" />
        </div>

        <div class="sample">
          <p>railStyle</p>
          <VueSlider v-model="value1" :rail-style="{ 'background-color': '#fc851b' }" />
        </div>

        <div class="sample">
          <p>processStyle</p>
          <VueSlider v-model="value1" :process-style="{ 'background-color': '#fc851b' }" />
        </div>

        <div class="sample">
          <p>tooltipStyle</p>
          <VueSlider v-model="value1" tooltip="always" :tooltip-style="{ 'background-color': '#fc851b' }" />
        </div>

        <div class="sample">
          <p>style</p>
          <VueSlider v-model="value1" :style="{ 'background-color': '#fc851b' }" />
        </div>

        <div class="sample">
          <p>dot slot</p>
          <VueSlider v-model="value1">
            <template #dot>
              <span class="dot">{{ value1 }}</span>
            </template>
          </VueSlider>
        </div>

        <div class="sample">
          <p>tooltip slot</p>
          <VueSlider v-model="value1" tooltip="always">
            <template #tooltip>
              <span class="tooltip">{{ value1 }}</span>
            </template>
          </VueSlider>
        </div>

        <div class="sample">
          <p>default slot</p>
          <VueSlider v-model="value1" tooltip="always">
            <template>
              <span class="tooltip">{{ value1 }}</span>
            </template>
          </VueSlider>
        </div>

        <div class="sample">
          <p>event (console logs)</p>
          <VueSlider
            v-model="value1"
            @drag-start="(v) => log('@dragStart', v)"
            @drag-end="(v) => log('@dragEnd', v)"
            @dragging="(v) => log('@dragging', v)"
          />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value2 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>min=0 max=10 interval=0.1</p>
          <VueSlider v-model="value2" :min="0" :max="10" :interval="0.1" />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value3 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>default</p>
          <VueSlider v-model="value3" />
        </div>

        <div class="sample">
          <p>enableCross=false</p>
          <VueSlider v-model="value3" :enableCross="false" />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value4 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>marks=true</p>
          <VueSlider v-model="value4" :min="0" :max="10" :marks="true" />
        </div>

        <div class="sample">
          <p>adsorb=true</p>
          <VueSlider v-model="value4" :min="0" :max="10" :adsorb="true" />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value5 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>data="['A', 'B', 'C', 'D']"</p>
          <VueSlider v-model="value5" :data="['A', 'B', 'C', 'D']" :marks="true" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 50,
      value2: 5.0,
      value3: [20, 80],
      value4: 5,
      value5: 'C'
    }
  },
  methods: {
    log(msg, value) {
      console.log({ msg, value })
    }
  }
}
</script>

<style scoped>
#app {
  width: 100vw;
}
#app .group {
  border-bottom: 1px solid;
  padding: 20px;
}
#app .group .sample-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
#app .group .sample-list .sample {
  min-width: 300px;
  justify-self: center;
  align-self: center;
}
</style>
