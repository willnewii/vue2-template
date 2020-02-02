import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import page from './modules/page';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        page
    },
    strict: process.env.NODE_ENV !== 'production'
});

// store.dispatch(APP.init);

export default store;
