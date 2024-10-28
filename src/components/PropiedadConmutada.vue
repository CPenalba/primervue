<template>
  <div>
    <h1>Propiedad conmutada component</h1>
    <button @click="getJuegosAzules()">Juegos azules</button>
    <div v-html="html"></div>
    <!-- <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  methods: {
    getJuegosAzules() {
      //el metodo no devuelve nada, necesitamos tener un dibujo
      this.html = "";
      for (var juego of this.juegos) {
        this.html += "<h4 style='color:blue'>" + juego + "</h4>";
      }
    },
  },
  computed: {
    //una propiedad conmutada siempre devuelve valores y no puede recibir parametros
    juegosRojos() {
      //vamos a devolver todos los juegos con un formato de color rojo
      var datos = this.juegos;
      //recorremos cada juego y modificamos su dibujo a color rojp
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  data() {
    return {
      html: "",
      juegos: [
        "parchis",
        "canicas",
        "la cuerda",
        "la galleta",
        "luz roja, luz verde",
      ],
    };
  },
};
</script>

<style></style>
