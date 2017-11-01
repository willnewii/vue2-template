import {EventBus, Constants, JsBridge} from '../index';

export default {
    beforeRouteEnter(to, from, next) {
        //页面未创建,不能访问this
        //console.log('beforeRouteEnter:' + to.name);
        next();
    },
    beforeRouteLeave(to, from, next) {
        //console.log('beforeRouteLeave:' + from.name);
        next();
    },
    methods: {
        pushPage(action) {
            let rou = {
                name: action.name
            };

            if (action.query) {
                rou.query = action.query;
            }

            if (action.params) {
                rou.params = action.params;
            }
            this.$router.push(rou);
        }
    }
}
