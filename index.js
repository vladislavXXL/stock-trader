import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './src/App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost';
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    if (request.method === 'POST') {
        request.method = 'PUT';
    }
    next(response => {
        response.json = () => {
            return {messages: response.body};
        }
    });
});

new Vue({
    el: "#app",
    render: h => h(App)
});

Vue.config.productionTip = false;

