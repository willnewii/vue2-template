<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
    import {EventBus, Constants} from './service/index';
    import mixins_base from './mixins/mixins-base'
    import mixins_request from './mixins/mixins-request'

    export default {
        name: 'app',
        mixins: [mixins_base, mixins_request],
        data() {
            return {
                open: false,
                docked: false,
                toast: false,
                toast_message: '',
                toastTimer: null
            }
        },
        created() {
            EventBus.$on(Constants.EventBus.showToast, value => {
                this.showMessage(value);
            });

            this.$ls.set('test','10001');
//            this.getdata();
        },
        methods: {
            getdata() {
                this.doRequest(Constants.method.test, null, (result) => {
                });
            },
            showMessage(value) {
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
