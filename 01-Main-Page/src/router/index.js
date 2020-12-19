import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CartPopUp from "../views/CartPopUp.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/cart",
        name: "CartPopUp",
        components: CartPopUp,
    },
];

const router = new VueRouter({
    routes,
});

export default router;