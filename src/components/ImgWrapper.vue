<template>
    <!--<div v-bind:style="[bg,avatar]" v-bind:class="style" class="bg" @error="handleError" @click="click"></div>-->
    <img v-bind:style="avatar" v-bind:class="style" :src="imgSrc" @error="handleError" @click="click"/>
</template>

<script>
    import * as util from '../assets/js/util';

    import avatar from '../assets/img/default_head.png';
    import news from '../assets/img/default_news.jpg';

    export default {
        name: 'ImgWrapper',
        data() {
            return {
                imgSrc: '',
            };
        },
        props: {
            src: {
                type: String,
                default: ''
            },
            size: {
                type: Number,
                default: 50
            },
            type: {
                type: String,
                default: '' //avatar
            },
            classStyle: {
                type: String,
                default: ''
            },
        },
        watch: {
            src: function (value, oldvalue) {
                this.imgSrc = value;
            }
        },
        computed: {
            style() {
                let style = '';
                switch (this.type) {
                    case 'avatar':
                        style = ['_avatar'];
                        break;
                    default:
                        style = [];
                }
                return style;
            },
            bg() {
                return {
                    "background-image": "url(" + this.imgSrc + ")"
                };
            },
            avatar() {
                if (this.type === 'avatar' || this.type === 'icon') {
                    return {
                        "width": util.px2rem(this.size) + 'rem',
                        "height": util.px2rem(this.size) + 'rem',
                    };
                } else {
                    return null;
                }
            }
        },
        mounted() {
            if (!this.src) {
                if (this.type === 'avatar') {
                    this.imgSrc = avatar;
                } else {
                    this.imgSrc = news;
                }
            } else {
                this.imgSrc = this.src;
            }
        },
        methods: {
            handleError() {
                if (this.type === 'avatar') {
                    this.imgSrc = avatar;
                } else {
                    this.imgSrc = news;
                }
            },
            click() {
                this.$emit('click');
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/params";

    .bg {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    ._avatar {
        border-radius: 50%;
    }
</style>