import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './src/App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'localhost';

new Vue({
    el: "#app",
    render: h => h(App)
});

Vue.config.productionTip = false

