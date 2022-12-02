import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Login from './pages/Login.vue';
import ConfigMain from './pages/ConfigMain.vue'
import Admin from "./pages/Admin";
import init from './pages/init.vue';
import form from './pages/form.vue'
// import Admin from './pages/Admin.vue'
import formAll from './pages/formAll.vue'
import Summary from './pages/Summary.vue'
import subInfor from './pages/subInfor.vue'
import User from './pages/User'
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: Login },
        { path: '/home', name: 'home', component: Home },
        { path: '/admin', name: 'Admin', component: Admin },
        { path: '/config', name: 'ConfigMain', component: ConfigMain },
        { path: '/formall', name: 'formAll', component: formAll },
        { path: '/init', name: 'init', component: init },
        { path: '/summary', name: 'Summary', component: Summary },
        { path: '/user', name: 'User', component: User },
        { path: '/subinfor', name: 'subInfor', component: subInfor },
        { path: '/form', name: 'form', component: form }
    ]
});