// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'


//注册全局组件
import {} from './plugins/loadComponent';

//localstorage
import {} from './plugins/localstorage';

//拦截器
import {} from './plugins/axios';

//过滤器
import {} from './plugins/filter';


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