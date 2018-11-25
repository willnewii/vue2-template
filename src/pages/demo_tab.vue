<template>
    <div class="page">
        <div class="sub-page" v-bind:style="style">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
        <mu-bottom-nav :value="bottomNav" @change="handleChange" ref="bottom">
            <mu-bottom-nav-item v-for="menu in menus" :value="menu.key" :key="menu.key"
                                :title="menu.title" icon='android' active-class="bottom-nav-title">
            </mu-bottom-nav-item>
        </mu-bottom-nav>
    </div>
</template>

<script>
    import {Constants, EventBus, mixins} from '../assets/js/index';

    export default {
        mixins: [mixins.base, mixins.request],
        name: Constants.PageName.demo_tab,
        data() {
            return {
                bottomNav: -1,
                menus: [],
                style: {}
            };
        },
        computed: {},
        mounted() {
            this.style = {
                height: (this.$el.offsetHeight - this.$refs['bottom'].$el.offsetHeight) + 'px'
            };
        },
        created() {
            this.menus.push({
                title: '列表',
                name: Constants.PageName.demo_list,
            });
            this.menus.push({
                title: '列表2',
                name: Constants.PageName.demo_list2,
            });
            this.menus.push({
                title: '页面',
                name: Constants.PageName.demo_page,
            });

            this.handleChange(2);
        },
        methods: {
            handleChange(value) {
                this.bottomNav = value;
                this.pushPage({
                    name: this.menus[value].name
                });
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/params";

    .sub-page {
        flex-grow: 1;
        background-color: #FFF;
    }
</style>
