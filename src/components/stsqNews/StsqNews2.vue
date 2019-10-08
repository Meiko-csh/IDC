<template>
    <div id="wrap3">
        <div id="text3">热点资讯</div>
        <div id="contentWrap">
            <div id="textMore">查看更多 <i id="icongengduo" class="iconfont icongengduo"></i></div>
            <Carousel
                id="stsqCarousel"
                :height="carouselHeight"
                :radius-dot="radiusDot"
            >
                <CarouselItem v-for="(item, index) in newsInfo.news" :key="index" >
                    <div class="itemWrap" >
                        <div class="leftContent">
                            <div class="textWrap">
                                <div class="text1">{{ item.title }}</div>
                                <div class="text2">{{ item.createTimeStr | formatDate('YYYY-MM-DD') }}</div>
                                <div class="text3">{{ item.content }}</div>
                                <div class="text4">了解更多 <i id="icongengduo" class="iconfont icongengduo"></i></div>
                            </div>
                        </div>
                        <div class="rightContent" :style="{ backgroundImage: 'url(' + baseUrl + item.icon+')' }"></div>
                    </div>
                </CarouselItem>
            </Carousel>

        </div>
    </div>
</template>
<script>
    export default {
        name: "StsqNews2",
        props: [
            "newsData"
        ],
        computed: {
            // 结构化新闻数据
            newsInfo: function () {
                return {
                    news: this.newsData.slice(0,6)
                }
            }
        },
        data() {
            return {
                baseUrl: process.env.VUE_APP_SERVER_HOST_PRE,
                carouselHeight: 410,
                radiusDot: true,
            }
        },
    }
</script>
<style scoped>
    #wrap3 {
        height: 610px;
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
        height: 610px;
        position: absolute;
        left: calc(50% - 600px);
    }
    #textMore {
        position: absolute;
        right:0px;
        top:65px;
        font-size:16px;
        font-weight:400;
        color:rgba(0,193,222,1);
        cursor: pointer;
    }
    #stsqCarousel {
        left: 0px;
        top: 145px;
    }
    .itemWrap {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .leftContent {
        position: absolute;
        left: 0px;
        width: 890px;
        height: 410px;
        background:rgba(255,255,255,1);
        box-shadow:10px 0px 10px 0px rgba(0,193,222,0.15);
    }
    .textWrap {
        width: 580px;
        height: 100%;
        padding-top: 60px;
        margin-left: 30px;
    }
    .text1 {
        width: 100%;
        font-size:20px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    .text2 {
        width: 100%;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-top: 10px;
    }
    .text3 {
        width: 100%;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top: 15px;
        height: 150px;
        line-height: 25px;
    }
    .text4 {
        width: 100%;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(27,112,228,1);
        position: absolute;
        bottom: 80px;
        cursor: pointer;
    }
    .rightContent {
        position: absolute;
        right: 0px;
        top: 45px;
        width: 520px;
        height: 320px;
        background:url(../../assets/img/trend/3.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 6px;
    }
</style>
<style>
    #contentWrap .ivu-carousel-dots-inside {
        width: 100px;
        right: 0px;
    }
    #contentWrap .radius {
        background: rgba(51,205,229,0.5);
        height: 8px;
        width: 8px;
    }
    #contentWrap .ivu-carousel-active .radius {
        background: rgba(51,205,229,1);
        height: 8px;
        width: 8px;
    }

</style>
