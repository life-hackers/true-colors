<template>
  <div class='copy-box'>
    <div class='label'>
      {{ label }}
    </div>
    <div class='slot' @click='copy'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['label'],
  methods: {
    copy (e) {
      this.$clip(e.target)
      this.$gaEvent('copy', {
        category: this.label,
        label: this.label,
        value: e
      })
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.copy-box {
  text-align: center;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  margin: 15px 0;
  overflow: hidden;
}
.label, .slot {
  display: inline-block;
  padding: 10px;
}
.label {
  background: rgba(200,200,200,0.6);
  border-right: 1px solid grey;
  flex: 1;
  font-weight: 600;
}
.slot {
  flex: 3;
  text-align: center;
}
.slot:hover {
  cursor: pointer;
}
</style>
