import Vue from 'vue'
import App from './src/App.vue'

import {store} from './src/store/store.js';

new Vue({
    el: "#app",
    store,
    render: h => h(App)
});

Vue.config.productionTip = false

