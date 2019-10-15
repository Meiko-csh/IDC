<template>
    <div id="alliPartnerWrapper" class="alliPartnerWrapper"
         style="background-color: #fff;padding: 50px 0 2px 0;">
        <div style="position: relative;overflow: hidden"
             :class="animateUpMoveStyle">
            <div style="margin-top: 15px">
                <div id="alliPartnerBG" alt=""></div>
                <div alt="" :class="alliPartnerBG2"></div>
                <div alt="" :class="alliPartnerBG3"></div>
            </div>
            <div class="alliPartner width-max-1k2">
                <div class="alliCardName" style="position: absolute;top: -2px;z-index: 3">
                    <div class="alliCardPoint blue"></div>
                    <div class="homeAlliCircleWrapper">
                        <div class="alliCardPoint blue homeAlliCircle" style="position: absolute"></div>
                    </div>
                    <div class="alliCardTitle">
                        加入我们
                    </div>
                </div>
                <div class="alliCardContent">
                    <Row>
                        <Col class="joinPartnerItemWrapper" span="8">
                            <router-link tag="div" to="/introduce" class="joinPartnerItem"
                                         id="memberCooperationPartner">
                                <i class="iconfont iconhuoban joinPartnerItemIcon"></i>
                                <div class="joinPartnerItemTitle">成为联盟会员</div>
                            </router-link>
                        </Col>
                        <Col class="joinPartnerItemWrapper" span="8">
                            <router-link tag="div" to="/join" class="joinPartnerItem" id="realizeJoinflow">
                                <i class="iconfont iconweibiaoti joinPartnerItemIcon"
                                   style="font-size: 130px"></i>
                                <div class="joinPartnerItemTitle">了解加入流程</div>
                            </router-link>
                        </Col>
                        <Col class="joinPartnerItemWrapper" span="8">
                            <div class="joinPartnerItem" style="background-color: transparent">
                                <div style="font-size: 36px;color: #222222">成为联通5G</div>
                                <div style="font-size: 36px;color: #222222">应用创新联盟合作伙伴</div>
                                <div style="font-size: 18px;color: #999999">共赢5G美好未来</div>
                                <div class="blueLine" style="width: 300px"></div>
                                <div class="blueLine" style="width: 20px"></div>
                                <div class="blueLine" style="width: 10px"></div>
                                <div class="blueLine" style="width: 8px"></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlliPartner",
        data() {
            return {
                animateUpMoveStyle: null,
                alliPartnerBG2: null,
                alliPartnerBG3: null,
            }
        },
        created() {
            //查询当前屏幕宽度，小于800直接设置动画，不进行滚动动画
            this.queryScreenWidth();
        },
        methods: {
            //查询当前屏幕宽度，小于800直接设置动画，不进行滚动动画
            queryScreenWidth() {
                if(window.screen.width<800){
                    this.animateUpMoveStyle = "animateUpMoveStyle";
                }
            },
            //监听滚轮，到了一定高度就触发动画
            handleScroll() { //改变元素#searchBar的top值
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let height = this.getClientHeight()
                let bottom = top + height

                if (bottom > 2700) {
                    if (this.animateUpMoveStyle == null) {
                        this.animateUpMoveStyle = "animateUpMoveStyle"
                    }
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
            //给window添加一个滚动滚动监听事件
            window.addEventListener('scroll', this.handleScroll)
            this.handleScroll()

            //动画和轮播图同时加载出问题了，这里让轮播图加载完成后再去加波浪动画的css
            this.alliPartnerBG2 = 'alliPartnerBG2';
            this.alliPartnerBG3 = 'alliPartnerBG3';
        }
    }
</script>

<style scoped>
    /* 合作伙伴 */
    .blueLine {
        display: inline-block;
        border: 2px solid #1B70E4;
        border-radius: 2px;
        margin-right: 5px;
    }

    .joinPartnerItemTitle {
        line-height: 30px;
        color: #FFF;
        margin-top: -40px;
        font-size: 18px;
    }

    .joinPartnerItemIcon {
        color: #fff;
        line-height: 250px;
        font-size: 150px;
        display: block;
    }

    .joinPartnerItem {
        text-align: center;
        line-height: 250px;
    }

    .alliCardContent {
        margin: 20px 0 80px 0;
        padding-top: 45px;
    }

    .joinPartnerItem {
        margin: 20px;
        background-color: #fff;
        height: 280px;
    }

    #memberCooperationPartner {
        background-color: #1B70E4;
        cursor: pointer;
        transition: all 0.2s;
    }

    #memberCooperationPartner:hover {
        color: #1B70E4;
        background-color: #fff;
        transition: all 0.2s;
        box-shadow: 0 0 40px 0 rgba(27, 112, 228, 0.3);
    }

    #memberCooperationPartner:hover .joinPartnerItemTitle,
    #memberCooperationPartner:hover .joinPartnerItemIcon {
        color: #1B70E4;
        transition: all 0.2s;
    }

    #realizeJoinflow {
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 0 40px 0 rgba(27, 112, 228, 0.3);
    }

    #realizeJoinflow .joinPartnerItemIcon {
        color: #1B70E4;
    }

    #realizeJoinflow .joinPartnerItemTitle {
        color: #222222
    }

    #realizeJoinflow:hover {
        color: #fff;
        background-color: #1B70E4;
        transition: all 0.2s;
    }

    #realizeJoinflow:hover .joinPartnerItemTitle,
    #realizeJoinflow:hover .joinPartnerItemIcon {
        color: #fff;
        transition: all 0.2s;
    }

    .joinPartnerItemWrapper:first-child .joinPartnerItem {
        margin-left: 10px;
    }

    .joinPartnerItemWrapper:last-child .joinPartnerItem {
        margin-right: 10px;
        padding-top: 50px;
        line-height: normal;
        text-align: left;
    }

    .alliPartnerWrapper {
        position: relative;
    }

    #alliPartnerBG {
        background-image: url('~assets/img/home/footerBG.png');
        width: 100%;
        position: absolute;
        bottom: -14px;
        height: 120px;
        background-size: cover;
        z-index: 15;
        opacity: 0.5;
    }

    @keyframes move_wave {
        0% {
            transform: translateX(0) translateZ(0) scaleY(1)
        }
        50% {
            transform: translateX(-25%) translateZ(0) scaleY(0.75)
        }
        100% {
            transform: translateX(-50%) translateZ(0) scaleY(1)
        }
    }

    #alliPartnerBG2 {
        background-image: url('~assets/img/home/footerBG2.png');
        animation: move_wave 15s linear infinite;
        background-repeat: repeat no-repeat;
        width: 200%;
        position: absolute;
        bottom: -70px;
        height: 189px;
        background-size: 50% 120px;
        transform-origin: center bottom;
        /*z-index: 10;*/
        opacity: 0.75;
    }

    #alliPartnerBG3 {
        background-image: url('~assets/img/home/footerBG3.png');
        animation: move_wave 13s linear infinite;
        background-repeat: repeat no-repeat;
        width: 200%;
        position: absolute;
        bottom: -60px;
        height: 155px;
        background-size: 50% 120px;
        transform-origin: center bottom;
        /*z-index: 5;*/
    }


    .alliPartnerBG2 {
        background-image: url('~assets/img/home/footerBG2.png');
        animation: move_wave 15s linear infinite;
        background-repeat: repeat no-repeat;
        width: 200%;
        position: absolute;
        bottom: -70px;
        height: 189px;
        background-size: 50% 120px;
        transform-origin: center bottom;
        /*z-index: 10;*/
        opacity: 0.75;
    }

    .alliPartnerBG3 {
        background-image: url('~assets/img/home/footerBG3.png');
        animation: move_wave 13s linear infinite;
        background-repeat: repeat no-repeat;
        width: 200%;
        position: absolute;
        bottom: -60px;
        height: 155px;
        background-size: 50% 120px;
        transform-origin: center bottom;
        /*z-index: 5;*/
    }
    /* 合作伙伴 --------end*/
</style>
