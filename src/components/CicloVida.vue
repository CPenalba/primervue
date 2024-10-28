<template>
  <div>
    <h1>Ciclo Vida Events</h1>
    <button @click="cambiarSaludo()">Cambiar saludo</button>
    <h2 style="color: blue">{{ saludo }}</h2>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  data() {
    return {
      saludo: "Hoy es lunes...",
    };
  },
  methods: {
    //en esta zona incluiremos nuetsros metodos personalizados
    cambiarSaludo() {
      //se utiliza la palabra clave this para llamar a las variables de data()
      this.saludo = "Y mañana martes...";
    },
  },
  mounted() {
    console.log("Component montado");
  },
  unmounted() {
    console.log("Component destruido");
  },
  updated() {
    console.log("Component modificado");
  },
  created() {
    console.log("Component creado");
  },
};
</script>

<style></style>
