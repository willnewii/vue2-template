import * as Constants from '../assets/js/Constants';

let page = {};
page[Constants.PageName.demo_list] = resolve => require(['./demo_list.vue'], resolve);
page[Constants.PageName.demo_tab] = resolve => require(['./demo_tab.vue'], resolve);
page[Constants.PageName.demo_page] = resolve => require(['./demo_page.vue'], resolve);

export default page;
