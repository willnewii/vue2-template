/**
 * Created by zhangweiwei on 16/9/7.
 */

const BASE_URL = 'https://anxinmuying.applinzi.com/Public/demo/?';

export const method = {
    test: BASE_URL + "service=Album.GetList",
};

export const EventBus = {
    showToast: 'showToast',
    toggleDrawer: 'toggleDrawer',
    toggleMusic: 'toggleMusic',
    userLogin: 'userLogin',
    setTitle: 'setTitle',
    setTitleLeftIcon: 'setTitleLeftIcon',
    update_main_tab_index: 'update_main_tab_index'
};
