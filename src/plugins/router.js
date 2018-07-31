import Vue from 'vue';
import Router from 'vue-router';
import Pages from '../pages/index';
import * as Constants from '../assets/js/Constants';

function addRouter(name, meta) {
    routes.push({
        path: '/' + name.replace(/-/g,'/'),
        name: name,
        component: Pages[name],
        meta: Object.assign({keepAlive: true}, meta)
    });
}

Vue.use(Router);

let routes = [{
    path: '/',
    name: Constants.PageName.demo_tab,
    component: Pages[Constants.PageName.demo_tab],
    meta: {keepAlive: true,title: '主页'},
    children: [
        {
            path: Constants.PageName.demo_list,
            name: Constants.PageName.demo_list,
            component: Pages[Constants.PageName.demo_list],
            meta: {keepAlive: true,title: '列表示例页面'},
        },
        {
            path: Constants.PageName.demo_page,
            name: Constants.PageName.demo_page,
            component: Pages[Constants.PageName.demo_page],
            meta: {keepAlive: true,title: '示例页面'},
        }
    ]
}];

addRouter(Constants.PageName.demo_list, {title: '列表示例页面'});
addRouter(Constants.PageName.demo_tab, {title: 'tab示例页面'});

let router = new Router({
    routes
});


router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
});

export default router;