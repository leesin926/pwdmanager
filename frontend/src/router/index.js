import HomePage from '../views/HomePage.vue';
import UserRegister from '../views/UserRegister.vue';
import UserLogin from '../views/UserLogin.vue';
import UserDashboard from '../views/UserDashboard.vue';
import VueRouter from 'vue-router'
import Vue from 'vue';


Vue.use(VueRouter)
const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/register', name: 'UserRegister', component: UserRegister },
  { path: '/login', name: 'UserLogin', component: UserLogin },
  { path: '/dashboard', name: 'UserDashboard', component: UserDashboard },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
