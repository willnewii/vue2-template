// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 加载路由
import router from './plugins/router';

// 注册全局组件
import {} from './plugins/loadComponent';

// localstorage
import {} from './plugins/localstorage';

// 过滤器
import {} from './plugins/filter';

import {} from './assets/js/mixins/mixins-base';
import {} from './assets/js/mixins/mixins-request';

//vuex
import store from './vuex/store';

/*Vue.config.productionTip = true;
 Vue.config.performance = true;*/

/* eslint-disable no-new */
import App from './layouts/App.vue';

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});

// offline网络连接事件
window.addEventListener("offline", function () {
    alert("网络连接已断开");
});


/*window.addEventListener("load", function () {
    navigator.serviceWorker.register('../sw.js').then(function (reg) {
        console.log("注册成功");
    });
});*/
