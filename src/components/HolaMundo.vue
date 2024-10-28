<template>
  <diV>
    <h1>Mi primera App de Vue, que ilusion!!!</h1>
    <h2>Su nombre es {{ nombre }}</h2>
    <h2>El numero es {{ numero }}</h2>
    <img src="./../assets/images/perro.jpg" width="150px" height="150px">
  </diV>
</template>

<script>
//esto es codigo js (esepecial)
//cada component que creemos siempre debemos ecportarlo con un name
export default {
  name: "HolaMundo",
  data() {
    //aqui debemos declarar las variables para el dibujo
    //las variables son declaradas con formato json dentro de un return
    return {
      nombre: "Alumno",
      numero: 14,
      miArray: [],
      objeto: {},
    };
  },
};
</script>

<style>
h1 {
  color: fuchsia;
  
}
@import './../assets/css/estilos.css';
</style>
