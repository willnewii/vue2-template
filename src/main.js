// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import localstorage from 'vue-localstorage'
import router from './router'

Vue.use(localstorage, {
    name: 'ls'
});

//注册全局组件
import {} from './loadComponent';

//拦截器
import {} from './service/request/interceptors';

//过滤器
import {} from './service/filter';


/*Vue.config.productionTip = true;
 Vue.config.performance = true;*/

/* eslint-disable no-new */
import App from './App'

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});