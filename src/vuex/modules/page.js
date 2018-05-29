/**
 * Created by zhangweiwei on 2017/2/28.
 */
import * as types from '../mutation-types';

export default {
    state: {
        page: {
            count: 12
        }
    },
    mutations: {
        [types.Page.count](state, value) {
            state.page.count = state.page.count + 3;
        },
    },
    actions: {
        [types.Page.count](context, value) {
            context.commit(types.Page.count, value);
        },
    },
    getters: {
        [types.Page.count](state) {
            return state.page.count;
        },

    }
};