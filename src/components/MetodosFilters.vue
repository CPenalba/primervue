<template>
  <diV>
    <h1>Metodos filters</h1>
    <ul>
      <li v-for="num in numeros" :key="num">
        Numero: {{ num }} Doble: {{ $filters.getNumeroDoble(num) }}
      </li>
    </ul>
    <ul>
      <li v-for="name in nombre" :key="name">
        Nombre: {{ name }} Mayusculas: {{ $filters.mayuscula(name) }}
      </li>
    </ul>
  </diV>
</template>

<script>
export default {
  name: "MetodosFilters",
  data() {
    return {
      numeros: [2, 4, 7, 8, 3, 45, 89],
      nombre: ["Carolina", "Roberto", "Lucia", "Clara", "Pepe"],
    };
  },
};
</script>

<style></style>
