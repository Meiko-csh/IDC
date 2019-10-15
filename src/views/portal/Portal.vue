<template>
    <div id="portal" class="w-min-1k">
        <my-nav-bar></my-nav-bar>
        <router-view id="routerView"></router-view>
        <BackTop></BackTop>
    </div>
</template>

<script>
    import MyNavBar from '../../components/portal/mynavbar/MyNavBar';
    //import PageFooter from '../../components/pageFooter/PageFooter';
    export default {
        components: {
            MyNavBar
        }
    }
</script>

<style scoped>
    #portal {
        height: 100%;
    }
</style>
<style>
    .ivu-back-top-inner {
        background-color: #0000002e!important;
    }
</style>
