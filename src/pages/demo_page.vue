<template>
    <div class="page">
        <app-bar :title="title" mode="test"></app-bar>
        <mu-button color="primary" fullWidth @click="toast">测试toast</mu-button>

        <div>{{count}}</div>
        <div>{{page_count}}</div>
        <div>{{env}}</div>

        <mu-button color="primary" fullWidth @click="action_appcount">vuex - app - count</mu-button>
        <mu-button color="primary" fullWidth @click="action_pagecount">vuex - page - count</mu-button>
    </div>
</template>

<script>
    import {Constants, EventBus, mixins} from '../assets/js/index';

    import {mapGetters, mapActions} from 'vuex';
    import * as types from '../vuex/mutation-types';

    export default {
        components: {},
        mixins: [mixins.base, mixins.request],
        name: Constants.PageName.demo_page,
        data() {
            return {
                env: process.env.NODE_ENV
            };
        },
        computed: {
            ...mapGetters({
                count: types.APP.count,
                page_count: types.Page.count,
            })
        },
        created() {
        },
        methods: {
            ...mapActions({
                action_appcount: types.APP.count,
                action_pagecount: types.Page.count
            }),
            toast() {
                EventBus.$emit(Constants.EventBus.showToast, {message: '测试toast'});
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/params";

    .title {
        display: block;
        padding: px2rem(16);
        font-size: px2rem(16);
        margin: 0;
    }
</style>
