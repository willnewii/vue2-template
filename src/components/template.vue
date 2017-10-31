<template>
    <div>{{test}}</div>
</template>

<script>
    import {EventBus, Constants} from '../assets/js/index'

    export default {
        name: 'component-template',
        props: {
            test: {
                type: String,
                default: 'i am a template components'
            }
        },
        data () {
        },
        created(){
        },
        methods: {}
    }
</script>

<style lang="scss">
</style>