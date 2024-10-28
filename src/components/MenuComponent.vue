<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/cine">Cine</router-link>
      </li>
      <li>
        <router-link to="/musica">Musica</router-link>
      </li>
      <li>
        <router-link to="/ciclo">Hooks</router-link>
      </li>
      <li>
        <router-link to="/directivas">Directivas</router-link>
      </li>
      <li>
        <router-link to="/propiedad">Propiedad Conmutada</router-link>
      </li>
      <li>
        <router-link to="/pareimpar">Par e impar</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
}
li{
  margin:10px;
}
</style>
