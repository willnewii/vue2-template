import Vue from 'vue'

/**
 *  通用组件引用,以免懒加载重复打包.
 */
import template from "../components/template.vue";
import AutoListView from "../components/AutoListView.vue";

Vue.component(template.name, template);
Vue.component(AutoListView.name, AutoListView);

/**
 * 按需加载,引用的UI组件
 */
import 'muse-ui/src/styles/base.less'
import 'material-design-icons/iconfont/material-icons.css'

import MuRefreshControl from "muse-ui/src/refreshControl/refreshControl.vue";
import MuInfiniteScroll from "muse-ui/src/infiniteScroll/infiniteScroll.vue";
import MuList from "muse-ui/src/list/list.vue";
import MuListItem from "muse-ui/src/list/listItem.vue";
import MuDivider from "muse-ui/src/divider/divider.vue";


Vue.component(MuRefreshControl.name, MuRefreshControl);
//listview 加载更多
Vue.component(MuList.name, MuList);
Vue.component(MuListItem.name, MuListItem);
Vue.component(MuInfiniteScroll.name, MuInfiniteScroll);
Vue.component(MuDivider.name, MuDivider);

import MuAppbar from "muse-ui/src/appBar/appBar.vue";
import MuIconButton from "muse-ui/src/iconButton/iconButton.vue";
Vue.component(MuAppbar.name, MuAppbar);
Vue.component(MuIconButton.name, MuIconButton);
