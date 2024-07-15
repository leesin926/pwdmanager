import Vue from 'vue';
import App from './App.vue';
import router from './router';
import request from "@/utils/request";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = request;
Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
