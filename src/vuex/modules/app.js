/**
 * Created by zhangweiwei on 2017/2/28.
 */
import * as types from '../mutation-types';

export default {
    state: {
        app: {
            count: 10
        }
    },
    mutations: {
        [types.APP.count](state, value) {
            state.app.count = state.app.count + 2;
        },
    },
    actions: {
        [types.APP.count](context, value) {
            context.commit(types.APP.count, value);
        },
    },
    getters: {
        [types.APP.count](state) {
            return state.app.count;
        },

    }
};