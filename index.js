import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './src/App.vue';
import {routes} from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});

Vue.config.productionTip = false;

