<template>
  <div id="app">
    <Header/>
    <Navigator/>
    <Container/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Container from './components/Container.vue'
export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Container,    
  },
 mounted () {
    this.$store.dispatch('restart', true)
  },
  data() {
    return{
    }
  },
  methods: {
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body{
  background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}
</style>