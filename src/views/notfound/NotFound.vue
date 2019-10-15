<template>
    <div>
        <my-nav-bar></my-nav-bar>
    <div class="container">
        <div class="main" align="center">
            <img class="image" src="../../assets/img/notfound/notfound.png" alt="" />
            <div class="styL1" align="center" >
                找不到页面~
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import MyNavBar from '../../components/portal/mynavbar/MyNavBar';
    export default {
        name: "NotFound",
        components: {
            MyNavBar
        }
    }
</script>

<style scoped>
    .container {
        display: block;
        width: 100%;
        overflow: hidden;
        height: 688px;
        background:rgba(243,243,243,1);
        margin: 0 auto;
    }
    .main{
        margin-top: 140px;
    }
    .image {
        width: 372px;
        height: 158px;

    }
    .styL1{
        width:82px;
        height:14px;
        margin-top: 30px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
        left: 50%;
    }
</style>
