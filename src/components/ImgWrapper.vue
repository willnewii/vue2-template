<template>
    <img :src="src" :class="classStyle" @click="click"/>
</template>

<script>
    import logo from '../assets/img/logo.png';

    export default {
        name: 'ImgWrapper',
        data() {
            return {
                imgObj: {
                    src: this.src,
                    loading: logo
                },
            };
        },
        props: {
            src: {
                type: String,
                default: ''
            },
            classStyle: {
                type: String,
                default: ''
            },
        },
        created() {
            if (!this.src) {
                this.src = 'empty';
            }
        },
        methods: {
            click() {
                this.$emit('click');
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>