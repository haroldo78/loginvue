import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Registrar from "../views/Registrar.vue";
import Dashboard from "../views/Dashboard.vue";
import Historico from "../views/Historico.vue";
import Checagem from "../views/Checagem.vue";
import Curadoria from "../views/Curadoria";
import Administracao from "../views/Administracao.vue";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path:"/",
            name:"Login",
            component: Login,
            meta:{
                requiresGuest: true
            }
        },
        {
            path:"/registrar",
            name:"signUp",
            component: Registrar,
            meta:{
                requiresGuest: true
            }
        },
        {
            path:"/dashboard",
            name: "Dashboard",
            component: Dashboard,
            meta:{
                requiresAuth: true
            }
        },
        {
            path:"/historico",
            name:"Historico",
            component: Historico,
            meta:{
                requiresAuth: true
            }
        },
        {
            path:"/checagem",
            name:"Checagem",
            component: Checagem,
            meta:{
                requiresAuth: true
            }
        },
        {
            path:"/curadoria",
            name:"Curadoria",
            component: Curadoria,
            meta:{
                requiresAuth: true
            }
        },
        {
            path:"/administracao",
            name:"Administracao",
            component: Administracao,
            meta:{
                requiresAuth: true
            }
        }

    ]
  });
  // Verificação se esta Logado
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/');
      
      } else {
        next();
      }
      // Não precisa esta logado para acessar as Page Login Registrar
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/');
      } else {
        next();
      }
    } else {
      next()
    }
  });
  
  export default router;

