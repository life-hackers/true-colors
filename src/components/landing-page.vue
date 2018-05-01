<template>
  <div id='id' class='host' :style='style'>
    <input class='hasha'
      type='text'
      v-model='style.background'
      placeholder='Givme a #hashbar'/>
    <RgbView :value='raw'></RgbView>
  </div>
</template>

<script>
import RgbView from './rgb-view.vue'
import { debounce } from 'lodash'
import { store } from '../store'

export default {
  components: { RgbView },
  methods: {
    updateRaw () {
      let a = this.$el ? getComputedStyle(this.$el) : {}
      this.$set(this, 'raw', a['background-color'])
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
    }, 20)
  },
  data () {
    return {
      raw: '',
      style: store.appStyle
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
