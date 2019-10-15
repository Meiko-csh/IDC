<template>
    <div id="loginFooter">
        <div class="footerContent">Copyright Reserved © 2019 联通5G应用创新联盟 版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京ICP备11000964号</div>
        <div class="footerContent">邮箱hqs-cu5gaia@chinaunicom.cn</div>
    </div>
</template>
<script>
    export default {
        name: "PageFooter"
    }
</script>
<style scoped>
    #loginFooter {
        width: 100%;
        height: 100px;
        background-color: rgba(30,30,30,1);
        position: relative;
        bottom: 0px;
        padding: 20px 0 20px 0;
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        font-weight: normal;
        color: #909090;
    }
    .footerContent {
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    .footerContent:first-child {
    //margin-top: 20px;
    }
</style>
