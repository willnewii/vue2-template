import Vue from 'vue'

/**
 *  通用组件引用,以免懒加载重复打包.
 */
import template from "./components/template.vue";
Vue.component(template.name, template);