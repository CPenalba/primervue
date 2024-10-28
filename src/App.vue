<template>
  <div>
    <!-- <CineComponentVue/>
    <HolaMundo />
    <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1 style="color: blue">Titulo estatico de App</h1>
    <MenuComponentVue />
    <hr />
    <router-view> </router-view>
    <hr />
  </div>
</template>

<script>
import MenuComponentVue from "./components/MenuComponent.vue";
// import CineComponentVue from './components/CineComponent.vue';
// import HelloWorld from "./components/HelloWorld.vue";
// import HolaMundo from "./components/HolaMundo.vue";
// import HomeComponentVue from './components/HomeComponent.vue';
// import MusicaComponentVue from './components/MusicaComponent.vue';

export default {
  name: "App",
  components: {
    // HelloWorld,
    // HolaMundo,
    // CineComponentVue
    MenuComponentVue,
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
