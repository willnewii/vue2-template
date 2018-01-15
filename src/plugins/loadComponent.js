import Vue from 'vue';
import * as vue_lib from 'vue-lib';
import axiosOption from 'vue-lib/src/request/axiosOption';

Vue.use(vue_lib, {
    axiosOption
});
/**
 *  通用组件引用,以免懒加载重复打包.
 */
import template from "../components/template.vue";
import AppBar from "../components/AppBar.vue";

Vue.component(template.name, template);
Vue.component(AppBar.name, AppBar);

/**
 * 按需加载,引用的UI组件
 */
import 'muse-ui/src/styles/base.less';
import 'material-design-icons/iconfont/material-icons.css';

import MuAppbar from "muse-ui/src/appBar/appBar.vue";
import MuIconButton from "muse-ui/src/iconButton/iconButton.vue";
import MuBottomNav from "muse-ui/src/bottomNav/bottomNav";
import MuBottomNavItem from "muse-ui/src/bottomNav/bottomNavItem";
import MuToast from "muse-ui/src/toast/toast";

Vue.component(MuAppbar.name, MuAppbar);
Vue.component(MuIconButton.name, MuIconButton);
Vue.component(MuBottomNav.name, MuBottomNav);
Vue.component(MuBottomNavItem.name, MuBottomNavItem);
Vue.component(MuToast.name, MuToast);
