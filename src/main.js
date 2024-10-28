import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

//comenzamos separando nuestra creacion de aplicacion en una variable
var app = createApp(App);
app.config.globalProperties.$filters = {
  //creamos dos metodos que recibiran parametros y devolveran un codigo
  mayuscula(dato) {
    return dato.toUpperCase();
  },

  getNumeroDoble(numero) {
    return numero * 2;
  },
};

app.use(router).mount("#app");
