<template>
    <div class="page">
        <app-bar :title="title" mode="test"></app-bar>
        <mu-raised-button label="测试toast" primary fullWidth @click="toast"/>
    </div>
</template>

<script>
    import {Constants, EventBus, mixins} from '../assets/js/index';
    import MuRaisedButton from "muse-ui/src/raisedButton/raisedButton";

    export default {
        components: {MuRaisedButton},
        mixins: [mixins.base, mixins.request],
        name: Constants.PageName.demo_page,
        data() {
            return {};
        },
        computed: {},
        created() {
        },
        methods: {
            toast() {
                EventBus.$emit(Constants.EventBus.showToast, {message: '测试toast'});
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/px2rem";

    .title {
        display: block;
        padding: px2rem(16);
        font-size: px2rem(16);
        margin: 0;
    }
</style>
