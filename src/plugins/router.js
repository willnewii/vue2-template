import Vue from 'vue';
import Router from 'vue-router';
import Pages from '../pages/index';
import * as Constants from '../assets/js/Constants';

function addRouter(name, meta) {
    routes.push({
        path: '/' + name.replace('-', '/'),
        name: name,
        component: Pages[name],
        meta: Object.assign({keepAlive: true}, meta)
    });
}

Vue.use(Router);

let routes = [{
    path: '/',
    name: Constants.PageName.index,
    component: Pages.template,
    meta: {keepAlive: true,title: '主页'}
}];

addRouter(Constants.PageName.template, {title: '测试页面'});

let router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }

    next();
});

export default router;