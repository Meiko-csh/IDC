<template>
    <div id="contentBody">
        <div id="wrap1">
            <div id="textWrap1">
                <div id="text1">联盟成果</div>
                <div id="text2">A L L I A N C E&nbsp;&nbsp;&nbsp;&nbsp;R E S U L T S</div>
            </div>
            <div id="board">
                <div id="boardTitle">创新研究报告</div>
                <div id="bookMore">更多 <i id="icongengduo" class="iconfont icongengduo"></i></div>
                <div id="boardCard">
                    <Row id="boardCardRow" :gutter="50">
                        <Col v-if="!isShow1" :class="['boardCardCol animated zoomIn show', { '' : isAnimatedZoomIn } ]"
                             span="6"
                             v-for="(card, index) in boardCards" :key="index"
                        >
                            <div
                                class="boardCellContainer"
                                @mouseover="bookMouseenter(index)"
                                @mouseleave="bookMouseleave(index)"
                            >
                                <div class="bookContent">
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{{ card.content }}</div>
                                </div>
                                <a :href="baseUrl + '/lib/whiteBook/download?fileKey=' + card.fileUrl" :download="card.title">
                                    <div class="bookDownload"><Icon type="md-download" />下载</div>
                                </a>
                                <div :class="['bookImg',index===0 && book1Hover?'bookImgFlip1':'',index===1 && book2Hover?'bookImgFlip2':'',index===2 && book3Hover?'bookImgFlip3':'',index===3 && book4Hover?'bookImgFlip4':'']">
                                    {{ card.title }}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        <div id="wrap2">
            <div id="wrap2Title">5G创新业务应用</div>
            <div id="wrap2Btn">展示更多</div>
            <div id="content2" :class="[ { 'cardRowAnimation' : isCardRowAnimation } ]">
                <Row :class="['cardRow']" :gutter="30" v-for="(cardsRow, index) in cards" :key="index">
                    <Col class="cardCol" span="8"  v-for="(card, index) in cardsRow" :key="index">
                        <div  class="cellContainer" >
                            <div class="imgContainer">
                                <div :style="{ backgroundImage: 'url(' + card.url + ')' }" class="cellImg" alt="" />
                            </div>
                            <div class="cardText1">{{ card.title }}</div>
                            <div class="cardText2">{{ card.content }}</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>


        <page-footer></page-footer>
    </div>
</template>
<script>
    import ElCarousel from '../../components/stsqCarousel/carousel/ElCarousel';
    import ElCarouselItem from '../../components/stsqCarousel/carousel/ElCarouselItem';
    import PageFooter from "../../components/portal/pageFooter/PageFooter";
    export default {
        name: "Achievement",
        components: {
            ElCarousel,
            ElCarouselItem,
            PageFooter
        },
        mounted(){

        },
        created() {
            //  1.获取白皮书数据
            this.queryWhiteBook();
        },
        data() {
            return {
                book1Hover: false,
                book2Hover: false,
                book3Hover: false,
                book4Hover: false,
                bookUrl: require("../../assets/img/achievement/book.png"),
                cards: [
                    [
                        {
                            url: require("../../assets/img/trend/10.png"),
                            title: '新媒体',
                            content: ''
                        },
                        {
                            url: require("../../assets/img/trend/2.jpg"),
                            title: '智慧医疗',
                            content: ''
                        },
                        {
                            url: require("../../assets/img/trend/3.jpg"),
                            title: '智慧体育',
                            content: ''
                        }
                    ],
                    [
                        {
                            url: require("../../assets/img/trend/9.png"),
                            title: '智慧能源',
                            content: ''
                        },
                        {
                            url: require("../../assets/img/trend/5.jpg"),
                            title: '智能制造',
                            content: ''
                        },
                        {
                            url: require("../../assets/img/trend/6.jpg"),
                            title: '智能网联',
                            content: ''
                        }
                    ]
                ],
                boardCards: [
                    {

                    },
                    {

                    },
                    {

                    },
                    {

                    }
                ],
                baseUrl: process.env.VUE_APP_SERVER_HOST_PRE,
                isAnimatedZoomIn: false,
                isShow1: false,
                isShow2: false,
                isCardRowAnimation: false,
            }
        },
        methods: {
            bookMouseenter: function (index) {
                (index === 0) && (this.book1Hover = true) ||
                (index === 1) && (this.book2Hover = true) ||
                (index === 2) && (this.book3Hover = true) ||
                (index === 3) && (this.book4Hover = true) || null;
            },
            bookMouseleave: function (index) {
                (index === 0) && (this.book1Hover = false) ||
                (index === 1) && (this.book2Hover = false) ||
                (index === 2) && (this.book3Hover = false) ||
                (index === 3) && (this.book4Hover = false) || null;
            },
            queryWhiteBook: function () {
                const that = this;
                this.$request({
                    method: 'post',
                    url: '/lib/whiteBook/recommendations/page?size=4',
                    headers: {
                        //'Access-Control-Expose-Headers': 'Authorization'
                    },
                    data: {

                    }
                }).then(function (res) {
                    if( res.data && res.data.succeed === true){
                        // 渲染数据
                        that.boardCards = res.data.data.content;
                        // debugger
                    }else {
                        /* that.$Notice.error({
                            title: res.data.message
                        }); */
                        return;
                    }
                });
            },
            handleScroll() {
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let height = this.getClientHeight()
                let bottom = top + height
                /* if (bottom > 800 && this.isAnimatedZoomIn == false) {
                    this.isAnimatedZoomIn = true;
                    this.isShow1 = true;
                } */
                if (bottom > 1200 && this.isCardRowAnimation == false) {
                    this.isCardRowAnimation = true;
                    this.isShow2 = true;
                }
            },
            getClientHeight: function () {
                var clientHeight = 0;
                if (document.body.clientHeight && document.documentElement.clientHeight) {
                    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
                } else {
                    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
                }
                return clientHeight;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
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
        background:url(../../assets/img/achievement/achievement-banner.png) no-repeat center center/cover;
    }
    #board {
        height: 490px;
        width: 1200px;
        position: absolute;
        left: calc(50% - 600px);
        top: 330px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 30px 0px rgba(27,112,228,0.3);
        border-radius:20px;
        z-index: 99;
    }
    #textWrap1 {
        //height: 140px;
        width: 330px;
        position: absolute;
        left: calc(50% - 165px);
        top: calc(50% - 70px);
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
    #boardTitle {
        margin-top: 55px;
        text-align: center;
        font-size:36px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    #bookMore {
        position: absolute;
        right: 90px;
        top: 70px;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(27,112,228,1);
    }
    #boardCard {
        margin-top: 60px;
        margin-left: 85px;
        margin-right: 85px;
        height: 260px;
    }
    #boardCardRow {
        height: 100%;
    }
    .boardCardCol {
        height: 100%;
    }
    .boardCellContainer {
        height: 100%;
        position: relative;
        background:rgba(255,255,255,1);
        border:1px solid rgba(231,231,231,1);
        box-shadow:5px 8px 8px 0px rgba(27,112,228,0.15);
        overflow: hidden;
    }
    .boardCellContainer:hover {
        cursor: pointer;
        transform-style: preserve-3d
    }
    @keyframes flip-to-left {
        from {
            transform: rotateY(0);
        }
        to {
            transform: rotateY(-180deg);
        }
    }
    .bookImgFlip1 {

        //animation: flip-to-left 2s ease-in-out;
        transform: rotateY(-180deg);
    }
    .bookImgBack1 {
        //transform: rotateY(180deg);
        //transition: all 1.5s ease;
    }
    .bookImgFlip2 {
        transform: rotateY(-180deg);
    }
    .bookImgFlip3 {
        transform: rotateY(-180deg);
    }
    .bookImgFlip4 {
        transform: rotateY(-180deg);
    }

    .bookDownload {
        position: absolute;
        right: 20px;
        bottom: 20px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(27,112,228,1);
        cursor: pointer;
    }
    .bookImg {
        height: 100%;
        background:url(../../assets/img/achievement/book.png) no-repeat center center/cover;
        transform-style: preserve-3d;
        transform-origin: left center;
        transition: all 1.5s ease;
        font-size: 14px;
        text-align: right;
        font-weight: 600;
        padding-top: 50px;
        padding-right: 10px;
    }

    .bookImg:hover {

    }
    .bookContent {
        margin: 30px 20px 30px 20px ;
        position: absolute;
        left: 0px;
        top: 0px;
        line-height: 30px;
        overflow: hidden;
        height: 180px;
    }
    /* ---@@@--- */
    #wrap2 {
        height: 1600px;
        position: relative;
        width: 100%;
    }

    #wrap2Title {
        height: 140px;
        width: 330px;
        position: absolute;
        left: calc(50% - 165px);
        top: 510px;
        font-size:36px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    #content2 {
        height: 830px;
        width: 1200px;
        position: absolute;
        left: calc(50% - 600px);
        top: 720px;
    }
    .cardRow {
        height: 400px;
        margin-bottom: 30px;
    }
    .cardCol {
        height: 100%;
    }
    .cellContainer {
        height: 100%;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 30px 0px rgba(27,112,228,0.3);
        border-radius:0px 0px 6px 6px;
    }
    .cellContainer:hover {
        cursor: pointer;
    }
    .imgContainer {
        height: 300px;
        width: 100%;
        overflow: hidden;
    }
    .cellImg {
        height: 100%;
        //width: 100%;
        //background: no-repeat center center/cover;
        //background-size: 100%;
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .cellImg:hover {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        transition: all .5s ease;
    }
    .cardText1 {
        margin-top: 20px;
        margin-left: 25px;
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    .cardText2 {
        margin-top: 10px;
        margin-left: 25px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(102,102,102,1);
    }


    #wrap2Btn {
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
        top: 1500px;
        left: calc(50% - 115px);
        cursor: pointer;
    }
    @keyframes animateUpMove {
        from {
            top: 720px;
        }
        to {
            top: 620px;
        }
    }
    .cardRowAnimation {
        animation: animateUpMove 1s ease-out 0s forwards;
    }
    .show {
        display: block;
    }
</style>
