<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
    import {EventBus, Constants} from  './service/index';

    export default {
        name: 'app',
        data(){
            return {
                open: false,
                docked: false,
                toast: false,
                toast_message: '',
                toastTimer: null,
                musicPopup: false,
                music: {
                    title: '',
                    dataUrl: '',
                    coverImgUrl: '',
                    seek: 0,
                    duration: 1
                }
            }
        },
        created(){
            EventBus.$on(Constants.EventBus.showToast, value => {
                this.showMessage(value);
            });

            EventBus.$on(Constants.EventBus.toggleDrawer, value => {
                this.open = !this.open;
            });
        },
        methods: {
            showMessage(value){
                this.toast = true;
                this.toast_message = value.message;

                if (this.toastTimer) clearTimeout(this.toastTimer);
                this.toastTimer = setTimeout(() => {
                    this.toast = false
                }, 2000)
            },
        }
    }
</script>

<style lang="scss">
    @import "style/base";
</style>
