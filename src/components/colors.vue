<template>
  <div class='colors'>
    <CopyBox :label='"RGB(A)"'> {{ rgb }} </CopyBox>
    <CopyBox :label='"HEX"'> {{ hex }} </CopyBox>
    <CopyBox :label='"HSL"'> {{ hsl }} </CopyBox>
  </div>
</template>

<script>
import CopyBox from './copy-box.vue'

export default {
  components: { CopyBox },
  props: ['value'],
  computed: {
    color () {
      return this.$color(this.value)
    },
    rgb () {
      return this.color.rgb().toString()
    },
    hsl () {
      return this.color.hsl().round().toString()
    },
    hex () {
      return this.color.hex().toString()
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
