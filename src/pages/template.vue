<template>
    <div class="page">
        <div>
            <div>
                <span class="title">字体使用</span>
                <a class="link" href="https://www.youziku.com/">有字库</a>
            </div>
            <div>
                <h6 class="title">音乐</h6>
                <a class="link" href="http://www.xiami.com/">来自虾米音乐</a>
            </div>
            <div>
                <h6 class="title">Dependencies</h6>
                <a class="link" href="https://cn.vuejs.org/">vue</a><a class="link"
                                                                       href="https://github.com/museui/muse-ui">muse-ui</a><a
                    class="link" href="https://github.com/museui/muse-ui">material-design-icons</a>
                <a class="link" href="https://github.com/Dafrok/vue-baidu-map">vue-baidu-map</a>
            </div>
        </div>
        <span class="version">v{{version}}</span>
        <component-template></component-template>
    </div>
</template>

<script>
    import {Constants, EventBus, mixins, API} from '../service'
    import ComponentTemplate from "../components/template";

    export default {
        components: {ComponentTemplate},
        mixins: [mixins],
        name: 'setup',
        data () {
            return {
                title: '关于',
                version: process.env.APP_VERSION
            }
        },
        computed: {},
        created(){
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
