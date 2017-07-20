import {} from  './index';

export default {
    methods: {
        pushPage(action){
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
