<template>
    <mu-appbar :class="isDark ? 'dark-appbar' : 'light-appbar'" :title="title" v-if="showAppBar"
               :textColor="isDark ? '#0d1733' : '#0d1733'" :z-depth="0">
        <mu-button icon color="primary" slot="left" @click="goBack">
            <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <template slot="right" v-if="this.mode !== 'test'">
            <mu-icon-button v-if="showSearch" icon="search" slot="right" @click="goSearch"></mu-icon-button>
            <slot name="right"></slot>
        </template>
    </mu-appbar>
</template>

<script>
    import {EventBus, Constants} from '../assets/js/index';

    export default {
        components: {},
        name: 'app-bar',
        props: {
            mode: {
                type: String,
                default: 'page'
            },
            title: {
                type: String,
                default: ''
            },
            showSearch: {
                type: Boolean,
                default: true
            },
            isDark: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                showAppBar: true,
                icon: 'arrow_back',
            };
        },
        created() {
            document.title = this.title;
            //alert(navigator.userAgent);
            switch (this.mode) {
                case 'page':
                    this.icon = 'arrow_back';
                    break;
                case 'main':
                    this.icon = 'menu';
                    break;
                case 'test':

                    break;
            }

            /**
             * 如果是微信内,则不显示appBar
             * @type {boolean}
             */
            this.showAppBar = !/MicroMessenger/.test(navigator.userAgent);
        },
        methods: {
            goSearch() {
                this.$router.push({name: 'search'});
            },
            goBack() {
                switch (this.mode) {
                    case 'test':
                    case 'page':
                        this.$router.back();
                        break;
                    case 'main':
                        EventBus.$emit(Constants.EventBus.toggleDrawer);
                        break;
                }
            }
        }
    };
</script>

<style lang="scss">
    @import "../assets/scss/params";

    .dark-appbar {
        width: 100%;
        background-color: $bg-dark !important;
        color: #FFFFFF !important;
        border-bottom: 0 !important;
    }

    .dark-titleClass {
        text-align: center;
        color: #FFFFFF;
    }

    .light-appbar {
        width: 100%;
        color: $fontColor !important;
        background-color: #FFFFFF !important;
        border-bottom: $bg-gray solid px2rem(1);
    }
</style>