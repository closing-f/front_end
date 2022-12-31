import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './pages/Login.vue';

import form from './pages/form.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: Login },
        { path: '/login', name: 'login',component: Login },
        { path: '/form', name: 'form',component: form },
       
    ]
});