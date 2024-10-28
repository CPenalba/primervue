import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
import NumeroParImpar from "./components/NumeroParImpar.vue";
import MetodosFilters from "./components/MetodosFilters.vue";

//creamos una constante array para las rutas
const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/musica", component: MusicaComponent },
  { path: "/cine", component: CineComponent },
  { path: "/ciclo", component: CicloVida },
  { path: "/directivas", component: DirectivasComponent },
  { path: "/propiedad", component: PropiedadConmutada },
  { path: "/pareimpar", component: NumeroParImpar },
  { path: "/metodosfilters", component: MetodosFilters },
];

//creamos una constante para el historial e incluir el array de rutas
//dicho nombre de constante sera el que utilizaremos dentro de Main.js
const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

//por ultimo exportamos la constante router para ser utilizada en app
export default router;
