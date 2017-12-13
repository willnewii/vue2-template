<template>
    <div class="page">
        <app-bar :title="title" mode="test"></app-bar>
        <div class="title">测试rem-{{version}}--{{localValue}}</div>
        <auto-list-view :url="url" :flag="1">
            <template slot="item" slot-scope="props">
                <div>{{props.item.name}}</div>
            </template>
        </auto-list-view>
    </div>
</template>

<script>
    import {Constants, EventBus, mixins} from '../assets/js/index';

    export default {
        mixins: [mixins.base, mixins.request],
        name: Constants.PageName.demo_list,
        data() {
            return {
                url: Constants.Method.test,
                version: process.env.APP_VERSION,
                localValue: this.$ls.get(Constants.LocalStorage.test, '-1')
            };
        },
        computed: {},
        created() {
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/px2rem";

    .title {
        display: block;
        padding: px2rem(16);
        font-size: px2rem(16);
        margin: 0;
    }
</style>
