import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { request } from './network/request';
import untils from './common/utils'
import * as filters from './filters/filters';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/style.css';
import '@babel/polyfill';
//引入bootstrap.js
import 'bootstrap';
//引入bootstrap.css
import 'bootstrap/dist/css/bootstrap.css'
//animate动画
import 'animate.css'
//增加rsa加密
import { jsencrypt } from './network/jsencrypt';

Vue.use(iView);

//  全局过滤器
// debugger
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
Vue.prototype.$request = request;
Vue.prototype.$untils = untils;
Vue.prototype.$jsencrypt = jsencrypt;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')