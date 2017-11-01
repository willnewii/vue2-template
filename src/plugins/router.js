import Vue from 'vue';
import Router from 'vue-router';
import Pages from '../pages/index';
import * as Constants from '../assets/js/Constants';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: Constants.PageName.index,
            component: Pages.template,
            meta: {keepAlive: true}
        },
        {
            path: '/' + Constants.PageName.index,
            name: Constants.PageName.index,
            component: Pages.template,
            meta: {keepAlive: true}
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
});

export default router;