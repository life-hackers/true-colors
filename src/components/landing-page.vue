<template>
  <div id='id' class='host' :style='style'>
    <div class='info'> Show time! {{ msg }} </div>
    <input class='hasha'
      type='text'
      v-model='style.background'
      placeholder='Givme a #hashbar'/>
    <p></p>
    <div class='raw'>
      <div> RGB(A): {{ raw.rgb }} </div>
      <div> HEX: {{ raw.hex }} </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import { store } from '../store'

function findTuples (str) {
  return str.match(/\d{0,3}\.?\d+%?/g)
}

function rgb2Hex (rgb) {
  const tup = findTuples(rgb).map(r => {
    return parseFloat(r)
  }).reduce((k, r) => {
    const rs = r.toString(16)
    return k + (rs.length === 1 ? ('0' + rs) : rs)
  }, '')
  return '#' + tup
}

export default {
  name: 'landing-page',
  methods: {
    updateRaw () {
      let a = this.$el ? getComputedStyle(this.$el) : {}
      const bg = a['background-color']
      this.raw.rgb = bg
      this.raw.hex = rgb2Hex(bg)
      this.$forceUpdate()
    }
  },
  watch: {
    'style.background': debounce(function () {
      this.updateRaw()
    }, 400)
  },
  created () {
    setTimeout(() => {
      this.updateRaw()
    }, 200)
  },
  data () {
    return {
      raw: {},
      style: store.appStyle,
      msg: 'Get some random pink!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.host {
  text-align: center;
}
.hasha {
  margin: 20px auto;
  padding: 15px;
  border: 3px solid skyblue;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  min-width: 200px;
  outline: none;
}
</style>
