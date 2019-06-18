import Vue from 'vue';
import * as vue_lib from 'vue-lib';
import axiosOption from 'vue-lib/src/request/axiosOption';

Vue.use(vue_lib, {
    axiosOption
});


/*作者：MarkMan
链接：https://juejin.im/post/5c106485e51d450e657571a6
    来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

let contexts = require.context('.', false, /\.vue$/)
contexts.keys().forEach(component => {
    let componentEntity = contexts(component).default
    // 使用内置的组件名称 进行全局组件注册
    Vue.component(componentEntity.name, componentEntity)
})*/

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
import 'material-design-icons/iconfont/material-icons.css';

import 'muse-ui/lib/styles/base.less';
import {AppBar as MuAppBar, Button, Icon, BottomNav, Snackbar, Progress, Divider, List} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(MuAppBar);
Vue.use(Button);
Vue.use(Icon);
Vue.use(BottomNav);
Vue.use(Snackbar);
Vue.use(Progress);
Vue.use(Divider);
Vue.use(List);
