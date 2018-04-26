<template>
  <div class='main' :style='style'>
    <h1> True Colors </h1>
    <router-view/>
  </div>
</template>

<script>
import { store } from './store'
export default {
  name: 'App',
  data () {
    return {
      style: store.appStyle
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 15%;
  align-items: center;
  flex: 1 0 100%;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
}
</style>
