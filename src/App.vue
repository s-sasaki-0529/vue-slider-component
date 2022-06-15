<template>
  <div id="app">
    <div class="group">
      <h3>{{ value1 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>default</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
          />
        </div>

        <div class="sample">
          <p>tooltip=none</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            tooltip="none"
          />
        </div>

        <div class="sample">
          <p>tooltip=always</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            tooltip="always"
          />
        </div>

        <div class="sample">
          <p>tooltipFormatter={value}%</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            :tooltip-formatter="'{value}%'"
          />
        </div>

        <div class="sample">
          <p>contained=true</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            contained
          />
        </div>

        <div class="sample">
          <p>dotSize=30</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            :dotSize="30"
          />
        </div>

        <div class="sample">
          <p>width=50%</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            width="50%"
          />
        </div>

        <div class="sample">
          <p>height=20px</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            height="20px"
          />
        </div>

        <div class="sample">
          <p>direction=rtl</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            direction="rtl"
          />
        </div>

        <div class="sample">
          <p>duration=0</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            :duration="0"
          />
        </div>

        <div class="sample">
          <p>lazy</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            lazy
          />
        </div>

        <div class="sample">
          <p>direction=ttb</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            direction="ttb"
            height="200px"
          />
        </div>

        <div class="sample">
          <p>direction=btt</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            direction="btt"
            height="200px"
          />
        </div>

        <div class="sample">
          <p>disabled</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            disabled
          />
        </div>

        <div class="sample">
          <p>dotStyle</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            :dot-style="{ 'background-color': '#000' }"
          />
        </div>

        <div class="sample">
          <p>railStyle</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            :rail-style="{ 'background-color': '#fc851b' }"
          />
        </div>

        <div class="sample">
          <p>processStyle</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            :process-style="{ 'background-color': '#fc851b' }"
          />
        </div>

        <div class="sample">
          <p>tooltipStyle</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            tooltip="always"
            :tooltip-style="{ 'background-color': '#fc851b' }"
          />
        </div>

        <div class="sample">
          <p>style</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            :style="{ 'background-color': '#fc851b' }"
          />
        </div>

        <div class="sample">
          <p>dot slot</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
          >
            <template #dot>
              <span class="dot">{{ value1 }}</span>
            </template>
          </VueSlider>
        </div>

        <div class="sample">
          <p>tooltip slot</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            tooltip="always"
          >
            <template #tooltip>
              <span class="tooltip">{{ value1 }}</span>
            </template>
          </VueSlider>
        </div>

        <div class="sample">
          <p>default slot</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            tooltip="always"
          >
            <template>
              <span class="tooltip">{{ value1 }}</span>
            </template>
          </VueSlider>
        </div>

        <div class="sample">
          <p>event (console logs)</p>
          <VueSlider
            :value="value1"
            @change="
              v => {
                value1 = v
              }
            "
            @drag-start="v => log('@dragStart', v)"
            @drag-end="v => log('@dragEnd', v)"
            @dragging="v => log('@dragging', v)"
          />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value2 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>min=0 max=10 interval=0.1</p>
          <VueSlider
            :value="value2"
            @change="
              v => {
                value2 = v
              }
            "
            :min="0"
            :max="10"
            :interval="0.1"
          />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value3 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>default</p>
          <VueSlider
            :value="value3"
            @change="
              v => {
                value3 = v
              }
            "
          />
        </div>

        <div class="sample">
          <p>enableCross=false</p>
          <VueSlider
            :value="value3"
            @change="
              v => {
                value3 = v
              }
            "
            :enableCross="false"
          />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value4 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>marks=true</p>
          <VueSlider
            :value="value4"
            @change="
              v => {
                value4 = v
              }
            "
            :min="0"
            :max="10"
            :marks="true"
          />
        </div>

        <div class="sample">
          <p>adsorb=true</p>
          <VueSlider
            :value="value4"
            @change="
              v => {
                value4 = v
              }
            "
            :min="0"
            :max="10"
            :adsorb="true"
          />
        </div>
      </div>
    </div>

    <div class="group">
      <h3>{{ value5 }}</h3>
      <div class="sample-list">
        <div class="sample">
          <p>data="['A', 'B', 'C', 'D']"</p>
          <VueSlider
            :value="value5"
            @change="
              v => {
                value5 = v
              }
            "
            :data="['A', 'B', 'C', 'D']"
            :marks="true"
          />
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
      value5: 'C',
    }
  },
  methods: {
    log(msg, value) {
      console.log({ msg, value })
    },
  },
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
