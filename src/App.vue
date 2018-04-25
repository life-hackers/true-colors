<template>
  <div class='main'>
    <h1> True Colors </h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.main {
  padding: 0 10%;
  margin-top: 20%;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
}
</style>
