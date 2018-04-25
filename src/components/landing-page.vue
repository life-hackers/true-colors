<template>
  <div>
    <div class='info'> Show time! {{ msg }} </div>
    <input class='hasha'
      type='text'
      placeholder='Givme a #hashbar'/>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  data () {
    return {
      msg: 'Get some random pink!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
