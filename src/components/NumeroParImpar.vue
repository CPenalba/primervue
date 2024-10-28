<template>
  <div>
    <h1>Número Par Impar</h1>
    <label>Número: </label>
    <input type="number" v-model="numero" />
    <!-- con directivas -->
    <h3 style="color: green" v-if="numero % 2 == 0">PAR</h3>
    <h3 v-else style="color: red">IMPAR</h3>

    <!-- en el mismo component con boton -->
    <button @click="getEvaluarNumero()">Evaluar número</button>
    <div v-html="html"></div>
    <!-- con propiedades conmutadas -->
    <div v-html="evaluarNumero"></div>
  </div>
</template>
<script>
export default {
  name: "NumeroParImpar",
  //con propiedades conmutadas
  computed: {
    evaluarNumero() {
      let data = "";
      if (this.numero % 2 == 0) {
        data = "<h2 style='color:green'>Par: " + this.numero + "</h2>";
      } else {
        data = "<h2 style='color:red'>Impar: " + this.numero + "</h2>";
      }
      return data;
    },
  },
  //en el mismo component con boton
  methods: {
    getEvaluarNumero() {
        this.html = "";
      if (this.numero % 2 == 0) {
        this.html = "<h3 style='color:green'>Par " + this.numero + "</h3>";
      } else {
        this.html += "<h3 style='color:red'>Impar " + this.numero + "</h3>";
      }
    },
  },
  data() {
    return {
      numero: 0,
      html: "",
    };
  },
};
</script>
