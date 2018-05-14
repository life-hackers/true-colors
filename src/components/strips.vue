<template>
  <div class='strips'>
    <Strip></Strip>
    <Strip></Strip>
    <div class='gap'></div>
    <Strip></Strip>
    <Strip></Strip>
  </div>
</template>

<script>
import Strip from './strip'
export default {
  components: { Strip }
}
</script>

<style scoped>
.strips {
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
}
.gap {
  flex: 5;
}
.strips .strip {
  flex: 1;
  height: 100vh;
  margin: 0 10px 0 0;
}
.strip:last-child {
  margin-right: 0;
}
</style>
