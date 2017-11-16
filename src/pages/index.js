import * as Constants from '../assets/js/Constants';

let page = {};
page[Constants.PageName.template] = resolve => require(['./template.vue'], resolve);

export default page;
