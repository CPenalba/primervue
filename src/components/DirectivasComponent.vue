<template>
  <div>
    <h1>Directivas component</h1>
    <h1>
      <!-- el simbolo dolar nos permite acceder a elemntos dentro de vue -->
      {{ $data }}
    </h1>
    <label>Introduza el numero</label>
    <input type="number" v-model="numero" />
    <h3 v-if="numero > 0" style="color: green">POSITIVO</h3>
    <h3 v-else-if="numero < 0" style="color: red">NEGATIVO</h3>
    <h3 v-else style="color: blue">CERO</h3>
    <ul v-if="series.length > 0">
      <li v-for="serie in series" :key="serie">
        {{ serie }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      series: ["Futurama", "La casa de papel", "El principe", "El ineternado"],
      numero: 0,
      nombre: "Alumno",
      edad: 25,
    };
  },
};
</script>

<style></style>
