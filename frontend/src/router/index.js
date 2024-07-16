import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import MainView from '../views/MainView.vue';
import detailView from "@/views/DetailView.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/login', component: LoginView},
        {path: '/register', component: RegisterView},
        {path: '/', component: MainView},
        {path: '/detail', component: detailView},
    ],
});
