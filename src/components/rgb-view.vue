<template>
  <div class='host'>
    <div class='rgb'> RGB(A): {{ rgb }} </div>
    <div> HEX: {{ hex }} </div>
  </div>
</template>

<script>
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
.host {
  text-align: center;
}
</style>
