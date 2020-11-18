<template>
  <div id="app">
    <HelloWorld />
    <Services />
    <Search />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Services from './components/Services.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,Search,  Services
  }
}
</script>

<style>
*{
  margin : 0;
  padding : 0;
}
</style>
