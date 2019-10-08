<template>
    <div id="contentBody">
        <div id="wrap1">
            <div id="textWrap1">
                <div id="text1">联盟动态</div>
                <div id="text2">A L L I A N C E&nbsp;&nbsp;&nbsp;&nbsp;N E W S</div>
            </div>
            <div id="board">
                <el-carousel  trigger="click" :interval="2000" type="card" height="380px">
                    <el-carousel-item
                        class="carouselItem1"
                        key="1"
                        @mouseover="carouselItemMouseOver"
                        @mouseleave="carouselItemMouseLeave"
                        :style="{ backgroundImage: 'url(' + baseUrl + trendData[0].propagandaImage+')' }"
                    >
                        <div :class="['carouselItemTextWrap', {'carouselItemTextWrap1Hover' : isCarouselItemTextWrap1Hover}]"
                             @mouseover="carouselItemMouseOver"
                             @mouseleave="carouselItemMouseLeave"
                             id="carouselItemTextWrap1"
                        >
                            <div class="carouselItemText1">
                                {{ trendData[0].title }}
                            </div>
                            <div class="carouselItemText1 itemBottom">

                            </div>
                            <div class="carouselItemText2">
                                {{ trendData[0].createTimeStr | formatDate('YYYY-MM-DD')  }}
                            </div>
                            <div class="carouselItemText2">

                            </div>
                            <div class="carouselItemText2">
                                {{ trendData[0].content }}
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item
                        class="carouselItem2"
                        key="2"
                        @mouseover="carouselItemMouseOver"
                        @mouseleave="carouselItemMouseLeave"
                        :style="{ backgroundImage: 'url(' + baseUrl + trendData[1].propagandaImage+')' }"
                    >
                        <div :class="['carouselItemTextWrap', {'carouselItemTextWrap2Hover' : isCarouselItemTextWrap2Hover}]"
                             @mouseover="carouselItemMouseOver"
                             @mouseleave="carouselItemMouseLeave"
                             id="carouselItemTextWrap2"
                        >
                            <div class="carouselItemText1">
                                {{ trendData[1].title }}
                            </div>
                            <div class="carouselItemText1 itemBottom">
                            </div>
                            <div class="carouselItemText2">
                                {{ trendData[1].createTimeStr | formatDate('YYYY-MM-DD')  }}
                            </div>
                            <div class="carouselItemText2">
                            </div>
                            <div class="carouselItemText2">
                                {{ trendData[1].content }}
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item
                        class="carouselItem3"
                        key="3"
                        @mouseover="carouselItemMouseOver"
                        @mouseleave="carouselItemMouseLeave"
                        :style="{ backgroundImage: 'url('+ baseUrl + trendData[2].propagandaImage+')' }"
                    >
                        <div :class="['carouselItemTextWrap', {'carouselItemTextWrap3Hover' : isCarouselItemTextWrap3Hover}]"
                             @mouseover="carouselItemMouseOver"
                             @mouseleave="carouselItemMouseLeave"
                             id="carouselItemTextWrap3"
                        >
                            <div class="carouselItemText1">
                                {{ trendData[2].title }}
                            </div>
                            <div class="carouselItemText1 itemBottom">
                            </div>
                            <div class="carouselItemText2">
                                {{ trendData[2].createTimeStr | formatDate('YYYY-MM-DD')  }}
                            </div>
                            <div class="carouselItemText2">
                            </div>
                            <div class="carouselItemText2">
                                {{ trendData[2].content }}
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div id="wrap2">

        </div>
        <stsq-news :news-data="newsData"></stsq-news>
        <div id="wrap4">
            <div id="wrap4Text">5G会议</div>
            <div id="cardWrap">
                <div :class="[isCard1Hover?'cardHover':'card',isCard1Hover?'card1PositionHover':'card1Position']"
                     @mouseover="cardMouseOver"
                     @mouseleave="cardMouseLeave"
                     ref="card1"
                     id="card1"
                >
                    <div :class="[isCard1Hover?'borderWrapHover':'borderWrap']">
                        <div :style="{ backgroundImage: 'url(' + baseUrl + conferenceData[0].icon+')' }" :class="[isCard1Hover?'cardImgHover':'cardImg']"></div>
                        <div :class="[isCard1Hover?'cardTextWrapHover':'cardTextWrap']">
                            <div :class="[isCard1Hover?'cardText1Hover':'cardText1']">
                                {{ conferenceData[0].title }}
                            </div>
                            <div :class="[isCard1Hover?'cardText2Hover':'cardText2']">
                                {{ conferenceData[0].content }}
                            </div>
                        </div>
                        <div :class="[isCard1Hover?'cardText3Hover':'cardText3']">{{ conferenceData[0].startTimeStr | formatDate('YYYY-MM-DD') }} {{ conferenceData[0].host }}</div>
                    </div>
                </div>
                <div :class="[isCard2Hover?'cardHover':'card',isCard2Hover?'card2PositionHover':'card2Position']"
                     @mouseover="cardMouseOver"
                     @mouseleave="cardMouseLeave"
                     ref="card2"
                     id="card2"
                >
                    <div :class="[isCard2Hover?'borderWrapHover':'borderWrap']">
                        <div :style="{ backgroundImage: 'url(' + baseUrl + conferenceData[1].icon+')' }" :class="[isCard2Hover?'cardImgHover':'cardImg']"></div>
                        <div :class="[isCard2Hover?'cardTextWrapHover':'cardTextWrap']">
                            <div :class="[isCard2Hover?'cardText1Hover':'cardText1']">
                                {{ conferenceData[1].title }}
                            </div>
                            <div :class="[isCard2Hover?'cardText2Hover':'cardText2']">
                                {{ conferenceData[1].content }}
                            </div>
                        </div>
                        <div :class="[isCard2Hover?'cardText3Hover':'cardText3']">{{ conferenceData[1].startTimeStr | formatDate('YYYY-MM-DD') }} {{ conferenceData[1].host }}</div>
                    </div>
                </div>
                <div :class="[isCard3Hover?'cardHover':'card',isCard3Hover?'card3PositionHover':'card3Position']"
                     @mouseover="cardMouseOver"
                     @mouseleave="cardMouseLeave"
                     ref="card3"
                     id="card3"
                >
                    <div :class="[isCard3Hover?'borderWrapHover':'borderWrap']">
                        <div :style="{ backgroundImage: 'url(' + baseUrl + conferenceData[2].icon+')' }" :class="[isCard3Hover?'cardImgHover':'cardImg']"></div>
                        <div :class="[isCard3Hover?'cardTextWrapHover':'cardTextWrap']">
                            <div :class="[isCard3Hover?'cardText1Hover':'cardText1']">
                                {{ conferenceData[2].title }}
                            </div>
                            <div :class="[isCard3Hover?'cardText2Hover':'cardText2']">
                                {{ conferenceData[2].content }}
                            </div>
                        </div>
                        <div :class="[isCard3Hover?'cardText3Hover':'cardText3']">{{ conferenceData[2].startTimeStr | formatDate('YYYY-MM-DD') }} {{ conferenceData[2].host }}</div>
                    </div>
                </div>
                <div :class="[isCard4Hover?'cardHover':'card',isCard4Hover?'card4PositionHover':'card4Position']"
                     @mouseover="cardMouseOver"
                     @mouseleave="cardMouseLeave"
                     ref="card4"
                     id="card4"
                >
                    <div :class="[isCard4Hover?'borderWrapHover':'borderWrap']">
                        <div :style="{ backgroundImage: 'url('+ baseUrl + conferenceData[3].icon+')' }" :class="[isCard4Hover?'cardImgHover':'cardImg']"></div>
                        <div :class="[isCard4Hover?'cardTextWrapHover':'cardTextWrap']">
                            <div :class="[isCard4Hover?'cardText1Hover':'cardText1']">
                                {{ conferenceData[2].title }}
                            </div>
                            <div :class="[isCard4Hover?'cardText2Hover':'cardText2']">
                                {{ conferenceData[2].content }}
                            </div>
                        </div>
                        <div :class="[isCard4Hover?'cardText3Hover':'cardText3']">{{ conferenceData[3].startTimeStr | formatDate('YYYY-MM-DD') }} {{ conferenceData[3].host }}</div>
                    </div>
                </div>
            </div>
            <div id="wrap4Btn">展示更多</div>
        </div>
        <page-footer></page-footer>
    </div>
</template>
<script>
    import ElCarousel from '../../components/stsqCarousel/carousel/ElCarousel';
    import ElCarouselItem from '../../components/stsqCarousel/carousel/ElCarouselItem';
    import PageFooter from "../../components/portal/pageFooter/PageFooter";
    import StsqNews from "../../components/stsqNews/StsqNews2";
    export default {
        name: "Trend",
        components: {
            StsqNews,
            ElCarousel,
            ElCarouselItem,
            PageFooter,
            StsqNews
        },
        created() {
            //  1.获取联盟动态数据
            this.queryAlliDynamic();
            //  2.获取热点资讯数据
            this.queryNews();
            //  3.获取会议数据
            this.queryConference();
        },
        data() {
            return {
                isCard1Hover: false,
                isCard2Hover: false,
                isCard3Hover: false,
                isCard4Hover: false,
                isCarouselItemTextWrap1Hover: false,
                isCarouselItemTextWrap2Hover: false,
                isCarouselItemTextWrap3Hover: false,
                leftNews: {},
                rightNews: [],
                newsData: [{},{},{},{}],
                conferenceData: [{},{},{},{}],
                trendData: [{},{},{}],
                baseUrl: process.env.VUE_APP_SERVER_HOST_PRE,
            }
        },
        methods: {
            cardMouseOver: function (event) {
                this.isCard1Hover = (event.currentTarget.id === "card1");
                this.isCard2Hover = (event.currentTarget.id === "card2");
                this.isCard3Hover = (event.currentTarget.id === "card3");
                this.isCard4Hover = (event.currentTarget.id === "card4");

            },
            cardMouseLeave: function (event) {
                (event.currentTarget.id === "card1") && (this.isCard1Hover = false) ||
                (event.currentTarget.id === "card2") && (this.isCard2Hover = false) ||
                (event.currentTarget.id === "card3") && (this.isCard3Hover = false) ||
                (event.currentTarget.id === "card4") && (this.isCard4Hover = false) || null
            },
            carouselItemMouseOver: function (event) {
                (event.currentTarget.id === "carouselItemTextWrap1") && (this.isCarouselItemTextWrap1Hover = true) ||
                (event.currentTarget.id === "carouselItemTextWrap2") && (this.isCarouselItemTextWrap2Hover = true) ||
                (event.currentTarget.id === "carouselItemTextWrap3") && (this.isCarouselItemTextWrap3Hover = true) || null;

            },
            carouselItemMouseLeave: function (event) {
                (event.currentTarget.id === "carouselItemTextWrap1") && (this.isCarouselItemTextWrap1Hover = false) ||
                (event.currentTarget.id === "carouselItemTextWrap2") && (this.isCarouselItemTextWrap2Hover = false) ||
                (event.currentTarget.id === "carouselItemTextWrap3") && (this.isCarouselItemTextWrap3Hover = false) || null;
            },
            queryNews: function () {
                const that = this;
                this.$request({
                    method: 'post',
                    url: '/lib/news/recommendations/page?size=6',
                    headers: {
                        //'Access-Control-Expose-Headers': 'Authorization'
                    },
                    data: {

                    }
                }).then(function (res) {
                    if( res.data && res.data.succeed === true ){
                        // 渲染数据
                        that.newsData = res.data.data.content;
                        that.leftNews = res.data.data.content[0];
                        that.rightNews = res.data.data.content.slice(1,5);
                    }else {
                        /* that.$Notice.error({
                            title: res.data.message
                        }); */
                        return;
                    }
                });
            },
            queryConference: function () {
                const that = this;
                this.$request({
                    method: 'post',
                    url: '/lib/conference/recommendations/page?size=4',
                    headers: {
                        //'Access-Control-Expose-Headers': 'Authorization'
                    },
                    data: {

                    }
                }).then(function (res) {
                    if( res.data && res.data.succeed === true ){
                        // 渲染数据
                        that.conferenceData = res.data.data.content;
                    }else {
                        /* that.$Notice.error({
                            title: res.data.message
                        }); */
                        return;
                    }
                });
            },
            //查询联盟动态
            queryAlliDynamic() {
                //查询数据：
                const that = this
                this.$request(
                    {
                        method: 'get',
                        url: '/lib/trend/recommendations/page',
                        params: {
                            "size": "3"
                        },
                    }
                ).then((response) => {

                    //response带着头信息呢
                    const retData = response.data;
                    if (retData.status === 200) {
                        this.trendData = retData.data.content;
                    }
                }).catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            }

        },
        mounted() {

        },
        computed: {

        }
    }
</script>
<style scoped>
    #contentBody {
    }
    #wrap1 {
        height: 380px;
        position: relative;
        width: 100%;
        background:url(../../assets/img/trend/trend-banner.png) no-repeat center center/cover;
    }
    #board {
        height: 380px;
        width: 1200px;
        position: absolute;
        left: calc(50% - 600px);
        top: 330px;
    }
    #textWrap1 {
        //height: 140px;
        width: 330px;
        position: absolute;
        left: calc(50% - 165px);
        top: calc(50% - 70px);;
    }
    #text1 {
        //height: 120px;
        width: 330px;
        //line-height: 120px;
        text-align: center;
        font-size:46px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
    #text2 {
        height: 20px;
        width: 330px;
        line-height: 20px;
        text-align: center;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
    }
    /* ---@@@--- */
    #wrap2 {
        height: 400px;
        position: relative;
        width: 100%;
    }

    /* ---@@@---
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
    }
    #left1 {
        width: 588px;
        height: 400px;
        background:url(../../assets/img/trend/2.jpg) no-repeat center center/cover;
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
        //border:1px solid rgba(231,231,231,1);
        box-shadow:0px 11px 20px 0px rgba(27,112,228,0.3);


        cursor: pointer;
    }
    .row1Img {
        width: 180px;
        height: 120px;
        background:url(../../assets/img/trend/3.jpg) no-repeat center center/cover;
        position: absolute;
    }
    .row1TextWrap {
        position: absolute;
        width: 340px;
        right: 0px;
        //padding: 10px;

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
    } */
    /* ---@@@--- */
    #wrap4 {
        height: 800px;
        position: relative;
        width: 100%;
    }
    #wrap4Text {
        position: absolute;
        top: 70px;
        text-align: center;
        width: 100%;
        font-size:34px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
    }

    #cardWrap {
        width: 1200px;
        height: 800px;
        position: absolute;
        left: calc(50% - 600px);
    }
    .card {
        position: absolute;
        width: 300px;
        height: 420px;
        padding: 7px;
        cursor: pointer;
        //transition: all .5s;
    }
    .cardHover {
        position: absolute;
        left: 0px;
        width: 333px;
        height: 470px;
        //width: 300px;
        //height: 470px;
        padding: 0px;
        z-index: 9;
        cursor: pointer;

    }
    .cardHover:hover {
        //-webkit-transform: scale(1);
        //transform: scale(1);
        transition: all .5s;
    }
    .cardImg {
        height: 340px;
        width: 100%;
        background:url(../../assets/img/trend/4.jpg) no-repeat center center/cover;
    }
    .cardImgHover {
        height: 190px;
        width: 100%;
        background:url(../../assets/img/trend/4.jpg) no-repeat center center/cover;
    }
    .cardTextWrap {
        height: 80px;
        width: 100%;
        background:rgba(255,255,255,1);
        border:1px solid rgba(231,231,231,1);
    }
    .cardTextWrapHover {
        height: 180px;
        width: 100%;
        padding: 0px 25px 25px 20px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(231,231,231,1);
    }
    .cardText1 {
        height: 80px;
        width: 100%;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height: 80px;
        text-align: center;
    }
    .cardText1Hover {
        height: 60px;
        //width: 100%;
        width: 300px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height: 60px;
        text-align: center;
        //border:1px solid rgba(231,231,231,1);
    }
    .cardText2 {
        display: none;
        height: 80px;
        width: 100%;
    }
    .cardText2Hover {
        height: 100px;
        //width: 100%;
        width: 300px;
        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        overflow:hidden;
    }
    .cardText3 {
        display: none;
        height: 80px;
        width: 100%;

    }
    .cardText3Hover {
        height: 100px;
        width: 100%;
        line-height: 100px;
        font-size:21px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(27,112,228,1);
        border-left:1px solid rgba(231,231,231,1);
        border-right:1px solid rgba(231,231,231,1);
        border-bottom: 6px solid rgba(27,112,228,1);
        background:rgba(255,255,255,1);
        text-align: center;
    }
    .borderWrap {
        //box-shadow:0px 11px 20px 0px rgba(27,112,228,0.3);
    }
    .borderWrapHover {
        box-shadow:0px 11px 20px 0px rgba(27,112,228,0.3);

    }
    .card1Position {
        left:0px;
        top:160px;
    }
    .card1PositionHover {
        left:-16px;
        top:140px;
    }
    .card2Position {
        left:300px;
        top:160px;
    }
    .card2PositionHover {
        left:284px;
        top:140px;
    }
    .card3Position {
        left:600px;
        top:160px;
    }
    .card3PositionHover {
        left:584px;
        top:140px;
    }
    .card4Position {
        left:900px;
        top:160px;
    }
    .card4PositionHover {
        left:884px;
        top:140px;
    }
    #wrap4Btn {
        position: absolute;
        width:230px;
        height:56px;
        border:1px solid rgba(27,112,228,1);
        border-radius:4px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(27,112,228,1);
        line-height: 56px;
        text-align: center;
        top: 680px;
        left: calc(50% - 115px);
        cursor: pointer;
    }





    .el-carousel__item {
        height: 380px;
        width: 908px;

        //background:url(../../assets/img/trend/4.jpg) no-repeat center center/cover;
    }
    .carouselItem1 {
        //opacity:0.6;

        border-radius:20px;
        background:url(../../assets/img/trend/4.jpg) no-repeat center center/cover;
    }
    .carouselItem2 {
        //opacity:0.6;
        border-radius:20px;
        background:url(../../assets/img/trend/7.jpg) no-repeat center center/cover;
    }
    .carouselItem3 {
        //opacity:0.6;
        border-radius:20px;
        background:url(../../assets/img/trend/8.jpeg) no-repeat center center/cover;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .carouselItemTextWrap {
        width: 100%;
        height: 100%;
        padding: 70px;
        background:rgba(35,8,99,0.6);
        border-radius:20px;
    }
    .carouselItemTextWrap1Hover {
        opacity: 0;
    }
    .carouselItemTextWrap2Hover {
        opacity: 0;
    }
    .carouselItemTextWrap3Hover {
        opacity: 0;
    }
    .carouselItemText1 {
        font-size:36px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
    .carouselItemText2 {
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(238,238,238,1);
    }
    .itemBottom {
        margin-bottom: 30px;
    }
</style>
