<template>
    <div id="app">
        <keep-alive :include="keepAliveArray">
            <router-view ></router-view>
        </keep-alive>
        <mu-snackbar :open="toast.show" position="bottom">{{toast.message}}</mu-snackbar>
    </div>
</template>

<script>
    import {EventBus, Constants, mixins} from '../assets/js/index';

    export default {
        name: 'app',
        mixins: [mixins.base, mixins.request],
        data() {
            return {
                keepAliveArray: Constants.keepAlive,
                toast: {
                    show: false,
                    message: '',
                    Timer: null
                },
            };
        },
        created() {
            EventBus.$on(Constants.EventBus.showToast, value => {
                this.showMessage(value);
            });

            this.$ls.set(Constants.LocalStorage.test, '10001');
        },
        methods: {
            showMessage(value) {
                this.toast.show = true;
                this.toast.message = value.message;

                if (this.toast.Timer) clearTimeout(this.toast.Timer);
                this.toast.Timer = setTimeout(() => {
                    this.toast.show = false;
                }, 2000);
            },
        }
    };
</script>

<style lang="scss">
    @import "../assets/scss/base";
</style>
