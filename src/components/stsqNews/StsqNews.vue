<template>
    <div id="wrap3">
        <div id="text3">热点资讯</div>
        <div id="contentWrap">
            <div id="contentLeft">
                <div id="left1Wrap">
                    <div id="left1" :style="{ backgroundImage: 'url('+ baseUrl + newsInfo.leftNews.icon+')' }"></div>
                </div>

                <div id="left2">
                    <div id="leftText1">{{ newsInfo.leftNews.title }}</div>
                    <div id="leftText2">{{ newsInfo.leftNews.createTimeStr | formatDate('YYYY-MM-DD') }}</div>
                    <div id="leftText3">{{ newsInfo.leftNews.content }}</div>
                </div>
            </div>
            <div id="contentRight">
                <div class="rightRow1" v-for="(news, index) in newsInfo.rightNews" :key="index">
                    <div class="row1Img" :style="{ backgroundImage: 'url(' + baseUrl + news.icon+')' }">

                    </div>
                    <div class="row1TextWrap">
                        <div class="row1Text1">{{ news.title }}</div>
                        <div class="row1Text3">{{ news.createTimeStr | formatDate('YYYY-MM-DD') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "StsqNews",
        props: [
            "newsData"
        ],
        computed: {
            // 结构化新闻数据
            newsInfo: function () {
                return {
                    leftNews: this.newsData[0],
                    rightNews: this.newsData.slice(1,5)
                }
            }
        },
        data() {
            return {
                baseUrl: process.env.VUE_APP_SERVER_HOST_PRE,
            }
        },
    }
</script>
<style scoped>
    #wrap3 {
        height: 722px;
        position: relative;
        width: 100%;
        background:linear-gradient(90deg,rgba(60,170,255,0.1),rgba(134,83,253,0.1));
    }
    #text3 {
        height: 32px;
        position: absolute;
        top: 60px;
        width: 100%;
        text-align: center;
        line-height: 32px;
        font-size:34px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    #contentWrap {
        width: 1200px;
        height: 722px;
        position: absolute;
        left: calc(50% - 600px);
    }
    #contentLeft {
        width: 600px;
        height: 520px;
        position: absolute;
        top: 150px;
        left: 0px;
        cursor: pointer;
    }
    #left1Wrap {
        overflow: hidden;
        width: 588px;
        height: 400px;
    }
    #left1 {
        width: 588px;
        height: 400px;
        background:url(../../assets/img/trend/2.jpg) no-repeat center center/cover;
        background-size: auto 100%;
        transform: scale(1);
        transition: all 0.2s;
    }
    #contentLeft:hover #left1{
        transform: scale(1.1);
        transition: all 0.2s;
        background-position: center;
    }
    #contentLeft:hover #leftText1{
        color: #1B70E4;
        transition: all 0.2s;
    }
    #left2 {
        position: relative;
    }
    #leftText1 {
        position: absolute;
        top:20px;
        left: 0px;
        height: 33px;
        line-height: 33px;
        font-size:22px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    #leftText2 {
        position: absolute;
        top:110px;
        left: 0px;
        height: 33px;
        line-height: 33px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    #leftText3 {
        position: absolute;
        top: 60px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    #contentRight {
        width: 600px;
        height: 480px;
        position: absolute;
        top: 150px;
        right: 0px;
    }
    .rightRow1 {
        width: 560px;
        height: 160px;
        position: relative;
        left: calc(50% - 280px);
        border:1px solid rgba(231,231,231,0);
        padding: 20px;
        cursor: pointer;
        transition: all 0.5s;
    }
    .rightRow1:hover {
        width: 560px;
        height: 160px;
        position: relative;
        left: calc(50% - 280px);
        padding: 20px;
        background:rgba(255,255,255,1);
        box-shadow:0px 11px 20px 0px rgba(27,112,228,0.3);
        cursor: pointer;
    }
    .row1Img {
        width: 180px;
        height: 120px;
        //background:url(../../assets/img/trend/3.jpg) no-repeat center center/cover;
        background:url(../../assets/img/trend/3.jpg) no-repeat center center/cover;
        background-size: 100%;
        position: absolute;
    }
    .row1TextWrap {
        position: absolute;
        width: 340px;
        right: 0px;
    }
    .row1Text1 {
        font-size:20px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        margin-bottom: 12px;
    }
    .row1Text2 {
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-bottom: 10px;
    }
    .row1Text3 {
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
</style>
