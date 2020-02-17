import Vue from 'vue'
import App from './src/App.vue'

Vue.filter('toLowercase', function (value) {
    return value.toLowerCase();
});

new Vue({
    el: "#app",
    render: h => h(App)
});

Vue.config.productionTip = false

