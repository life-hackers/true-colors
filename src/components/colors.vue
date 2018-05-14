<template>
  <div class='colors'>
    <CopyBox :label='"RGB(A)"'> {{ value }} </CopyBox>
    <CopyBox :label='"HEX"'> {{ color.hex().toString() }} </CopyBox>
    <CopyBox :label='"HSL"'> {{ color.hsl().round().toString() }} </CopyBox>
  </div>
</template>

<script>
import * as Color from 'color'
import CopyBox from './copy-box.vue'

const color = Color.default || Color

export default {
  components: { CopyBox },
  props: ['value'],
  computed: {
    color () {
      return color(this.value)
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.colors {
  text-align: center;
}
</style>
