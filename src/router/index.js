import Vue from 'vue'
import Router from 'vue-router'
import Pages from '../pages'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'template',
            component: Pages.template,
            meta: {keepAlive: true}
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
});

export default router ;