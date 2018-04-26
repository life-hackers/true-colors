<template>
  <div id='id' class='host' :style='style'>
    <div class='info'> Show time! {{ msg }} </div>
    <input class='hasha'
      type='text'
      v-model='style.background'
      placeholder='Givme a #hashbar'/>
    <p></p>
    {{ raw }}
  </div>
</template>

<script>
import { debounce } from 'lodash'
import { store } from '../store'
export default {
  name: 'landing-page',
  watch: {
    'style.background': debounce(function () {
      let a = this.$el ? getComputedStyle(this.$el) : {}
      console.log(a['background-color'])
      this.raw.rgb = a['background-color']
      this.$forceUpdate()
    }, 400)
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
