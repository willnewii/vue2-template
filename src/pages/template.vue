<template>
    <div class="page">
        <auto-list-view :url="url" :flag="1">
            <template slot="item" slot-scope="props">
                <div>{{props.item.name}}</div>
            </template>
        </auto-list-view>
    </div>
</template>

<script>
    import {Constants, EventBus, API} from '../assets/js/index'
    import mixins_base from '../mixins/mixins-base'
    import mixins_request from '../mixins/mixins-request'

    import ComponentTemplate from "../components/template";
    import AutoListView from "../components/AutoListView.vue";

    export default {
        components: {
            AutoListView,
            ComponentTemplate
        },
        mixins: [mixins_base, mixins_request],
        name: 'setup',
        data() {
            return {
                url: Constants.method.test,
                title: '关于',
                version: process.env.APP_VERSION
            }
        },
        computed: {},
        created() {
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .title {
        display: block;
        padding: 16px;
        font-size: 16px;
        margin: 0;
    }

    .link {
        padding: 0 16px 8px 16px;
        font-size: 16px;
    }

    .version {
        padding-top: 20px;
        font-size: 16px;
        width: 100%;
        text-align: center;
    }
</style>
