<template>
        <div id="loginFooter">
        <div class="headlineLogo">
            <img src="@/assets/img/home/headlineLogo.png" alt="">
        </div>
        <div class="QRCode">
            <img src="@/assets/img/home/QRCode.png" alt="">
            <div class="QRCodeTitle">下载“创新头条APP”</div>
        </div>
        <div class="pageFootContent">
            <div>
                <span><a class="aTabGrey hoverBlue" href="http://support.qq.com/product/57421" target="_blank">建议反馈</a></span><span><a class="aTabGrey hoverBlue" href="http://www.10010.com" target="_blank">联通官网</a></span><span>联系我们：hqs-toutiao@chinaunicom.cn</span>
            </div>
            <div>
                <span>Copyright © 1999-2017 中国联通 All Rights Reserved 京ICP备11000964号-6</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      name: "PageFooter",
    }
</script>
<style scoped>
    #loginFooter {
        width: 100%;
        background-color: #373D41;
        height: 180px;
        /*margin-top: -12px;*/
        position: relative;
    }
    .headlineLogo {
        position: absolute;
        top:50px;
        left: 100px;
        width: 80px;
    }
    .headlineLogo img{
        width: 100%;
    }
    .QRCode {
        position: absolute;
        top: 40px;
        right: 100px;
        width: 100px;
    }
    .QRCode img {
        width: 100%;
    }
    .QRCodeTitle {
        color: #ffffff;
        font-size: 12px;
        white-space: nowrap;
        margin-left: -4px;
        margin-top: 5px;
    }
    .pageFootContent {
        padding-left: 200px;
        padding-top: 64px;
    }
    .pageFootContent span {
        margin: 5px 15px 5px 15px;
        color: #9B9EA0;
        display: inline-block;
    }
    .aTabGrey {
        color: #9B9EA0;
    }
    .hoverBlue:hover {
        color: #00C1DE;
    }
</style>
