import Vue from 'vue'
import App from './src/components/App.vue'
import Home from "./src/components/Home.vue";

Vue.component('app-server-status', Home);

new Vue({
    el: "#app",
    render: h => h(App)
});

Vue.config.productionTip = false
