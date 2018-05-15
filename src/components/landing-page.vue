<template>
  <div class='landing-page' :style='style'>
    <Strips></Strips>
    <input class='input' type='text'
      v-model='style.background'
      placeholder='Givme a #hashbar'/>
    <Colors :value='raw'></Colors>
  </div>
</template>

<script>
import Strips from './strips.vue'
import Colors from './colors.vue'
import { debounce } from 'lodash'
import { store } from '../store'

export default {
  components: { Colors, Strips },
  methods: {
    updateRaw: function () {
      let a = this.$el ? getComputedStyle(this.$el) : {}
      this.$set(this, 'raw', a['background-color'])
      this.$forceUpdate()
    }
  },
  created () {
    this.updateRaw = debounce(this.updateRaw, 400)
  },
  watch: {
    'style.background': function () {
      this.updateRaw()
    }
  },
  data () {
    return {
      raw: store.appStyle.background,
      style: store.appStyle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing-page {
  text-align: center;
}
.colors, .input {
  box-sizing: border-box;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}
.input {
  margin: 20px auto;
  padding: 15px;
  border: 3px solid skyblue;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  outline: none;
}
</style>
