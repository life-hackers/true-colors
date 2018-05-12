<template>
  <div class='rgb-view'>
    <CopyBox :label='"RGB(A)"'> {{ rgb }} </CopyBox>
    <CopyBox :label='"HEX"'> {{ hex }} </CopyBox>
  </div>
</template>

<script>
import CopyBox from './copy-box.vue'
function findTuples (str = '') {
  return str.match(/\d{0,3}\.?\d+%?/g) || []
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
  components: { CopyBox },
  props: ['value'],
  computed: {
    rgb () {
      return this.value
    },
    hex () {
      return rgb2Hex(this.value)
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.rgb-view {
  text-align: center;
}
</style>
