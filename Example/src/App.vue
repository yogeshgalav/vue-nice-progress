<template>
  <div id="app">
    <p>Progress bar will help you to keep record.</p>
    <VueNiceProgress :value="progressValue"/>
    <p>{{progressValue}}% completed</p>
  </div>
</template>


<script>
import  VueNiceProgress  from '../../src/VueNiceProgress.vue'

export default {
  name: 'App',
  components: {
    VueNiceProgress,
  },
  data(){
    return{
      progressValue:50

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
