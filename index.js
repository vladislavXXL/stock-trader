import Vue from 'vue'
import App from './src/App.vue'

export const eventBus = new Vue();

new Vue({
    el: "#app",
    render: h => h(App)
});

Vue.config.productionTip = false

