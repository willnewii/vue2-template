<template>
    <div class="page">
        <app-bar :title="title" mode="test"></app-bar>
        <mu-raised-button label="测试toast" primary fullWidth @click="toast"/>

        <div>{{count}}</div>
        <div>{{page_count}}</div>

        <mu-raised-button label="vuex - app - count" primary @click="action_appcount"/>
        <mu-raised-button label="vuex - page - count" primary @click="action_pagecount"/>
    </div>
</template>

<script>
    import {Constants, EventBus, mixins} from '../assets/js/index';
    import MuRaisedButton from "muse-ui/src/raisedButton/raisedButton";
    import {mapGetters, mapActions} from 'vuex';
    import * as types from '../vuex/mutation-types';

    export default {
        components: {MuRaisedButton},
        mixins: [mixins.base, mixins.request],
        name: Constants.PageName.demo_page,
        data() {
            return {};
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
