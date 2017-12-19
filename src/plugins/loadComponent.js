import Vue from 'vue';
import * as vue_lib from 'vue-lib';

/**
 *  通用组件引用,以免懒加载重复打包.
 */
import template from "../components/template.vue";
import AppBar from "../components/AppBar.vue";

Vue.component(template.name, template);
Vue.component(AppBar.name, AppBar);

vue_lib.install(Vue);

/**
 * 按需加载,引用的UI组件
 */
import 'muse-ui/src/styles/base.less';
import 'material-design-icons/iconfont/material-icons.css';

import MuRefreshControl from "muse-ui/src/refreshControl/refreshControl.vue";
import MuInfiniteScroll from "muse-ui/src/infiniteScroll/infiniteScroll.vue";
import MuList from "muse-ui/src/list/list.vue";
import MuListItem from "muse-ui/src/list/listItem.vue";
import MuDivider from "muse-ui/src/divider/divider.vue";
import MuAppbar from "muse-ui/src/appBar/appBar.vue";
import MuIconButton from "muse-ui/src/iconButton/iconButton.vue";
import MuBottomNav from "muse-ui/src/bottomNav/bottomNav";
import MuBottomNavItem from "muse-ui/src/bottomNav/bottomNavItem";
import MuToast from "muse-ui/src/toast/toast";

Vue.component(MuRefreshControl.name, MuRefreshControl);
//listview 加载更多
Vue.component(MuList.name, MuList);
Vue.component(MuListItem.name, MuListItem);
Vue.component(MuInfiniteScroll.name, MuInfiniteScroll);
Vue.component(MuDivider.name, MuDivider);
Vue.component(MuAppbar.name, MuAppbar);
Vue.component(MuIconButton.name, MuIconButton);
Vue.component(MuBottomNav.name, MuBottomNav);
Vue.component(MuBottomNavItem.name, MuBottomNavItem);
Vue.component(MuToast.name, MuToast);
