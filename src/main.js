// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 加载路由
import router from './plugins/router';

// 注册全局组件
import './plugins/loadComponent';

// localstorage
import './plugins/localstorage';

// 过滤器
import './plugins/filter';

import './assets/js/mixins/mixins-base';
import './assets/js/mixins/mixins-request';

//vuex
import store from './vuex/store';

/*Vue.config.productionTip = true;
 Vue.config.performance = true;*/

/* eslint-disable no-new */
import App from './layouts/App.vue';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


// offline网络连接事件
window.addEventListener("offline", function () {
    alert("网络连接已断开");
});


/*window.addEventListener("load", function () {
    navigator.serviceWorker.register('../sw.js').then(function (reg) {
        console.log("注册成功");
    });
});*/
