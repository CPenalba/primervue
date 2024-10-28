<template>
  <div>
    <CineComponentVue/>
    <HolaMundo />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import CineComponentVue from './components/CineComponent.vue';
import HelloWorld from "./components/HelloWorld.vue";
import HolaMundo from "./components/HolaMundo.vue";
// import HomeComponentVue from './components/HomeComponent.vue';
// import MusicaComponentVue from './components/MusicaComponent.vue';


export default {
  name: "App",
  components: {
    HelloWorld,
    HolaMundo,
    CineComponentVue
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
