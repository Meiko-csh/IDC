<template>
    <div class="introduce">
        <div class="contentWrap">
            <div align="center" class="contentTitle1"> 5G应用创新联盟合作盟友</div>
            <div align="center" class="contentTitle2"> 5G APPLICATION INNOVATION ALLIANCE COOPERATION ALLIES
            </div>
        </div>
        <div class="contentWrap2">
            <div class="circle">
                <div class="circle1"></div>
                <div class="circle2">01</div>
                <div class="circle3" ></div>
                <div class="circle4">02</div>
                <div class="circle5" ></div>
                <div class="circle6">03</div>
                <div class="circle7" ></div>
                <div class="circle8">04</div>
                <div class="circle9" ></div>
                <div class="circle10">05</div>
                <div class="proOne">注册网站用户</div>
                <div class="proOnes">使用手机号注册并登陆</div>
                <div class="proTwo">提交加入申请</div>
                <div class="proTwos">同意联盟章程填写会员资料</div>
                <div class="proThree">工作人员审核</div>
                <div class="proThrees">工作人员审核、短信邮件通知</div>
                <div class="proFour">提交纸质资料</div>
                <div class="proFours">邮寄营业执照复印件等材料到联盟秘书处</div>
                <div class="proFive">颁发联盟证书</div>
                <div class="proFives">联盟邮寄证书到单位</div>
                <div class="proTitle">5G应用创新联盟加入流程</div>
                <div class="point">
                    <img src="../../assets/img/join/pointLogo.png" >
                </div>
                <div class="centerCircleOut">
                </div>
                <div class="centerCircleIn">
                </div>
                <div class="surround">
                    <i  class="iconfont iconliucheng " id="ifont"></i>
                </div>
                <!--<div class="joinus">-->
                    <!--<router-link to="/register" class="jfont">立即加入</router-link>-->
                <!--</div>-->
                <div class="joinus" >
                   <div class="jfont" @click="immeJoin"> 立即加入
                   </div>
                </div>

            </div>
            <div class="status">
                <div class="streamTotal">
                    <div class="upstream">上游</div>
                    <div class="upstreamNum">61</div>
                    <div class="upstreamNumAdd addSymbol">+</div>
                    <div class="upstreamText">芯片模组</div>
                    <div class="midstream">中游</div>
                    <div class="midstreamNum">319 </div>
                    <div class="midstreamNumAdd addSymbol">+</div>
                    <div class="midstreamText">平台应用</div>
                    <div class="downstream">下游</div>
                    <div class="downstreamNum">200 </div>
                    <div class="downstreamNumAdd addSymbol">+</div>
                    <div class="downstreamText">垂直行业</div>
                </div>
            </div>
            <div id="member" class="member">
                <div style="width:100%;height:100%;position:absolute;top:3px;" :class="members_animation">
                    <label class="memberTitle">联盟成员</label>
                    <AllianceMembers style="position:relative; top:100px"/>
                </div>

            </div>
        </div>
        <page-footer></page-footer>

    </div>
</template>
<script>
    import PageFooter from "../../components/portal/pageFooter/PageFooter";
    import AllianceMembers from "@/components/allianceMembers/AllianceMembers"
    export default {
        name:"Join",
        components: { PageFooter,  AllianceMembers },
        data(){
            return {
                members_animation : null,
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
            handleScroll: function() {
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let height = this.getClientHeight();
                let bottom = top + height;

                if(bottom > 1800) {
                    if(this.members_animation == null) {
                        this.members_animation = "members_animation"
                    }
                }
            },
            getClientHeight: function() {
                var clientHeight = 0;
                if(document.body.clientHeight && document.documentElement.clientHeight) {
                    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
                } else {
                    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
                }
                return clientHeight;
            },
            immeJoin: function () {
                if (this.$store.state.isLogin ) {
                    this.$router.push({path:'/agreement'});
                }else {
                    this.$router.push({path:'/register'});
                }


            }
        }
    }
</script>
<style scoped>
    .introduce {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    .contentWrap {
        /*width: 1366px;*/
        width: 100%;
        height: 380px;
        background: url("../../assets/img/join/aboveLogo.png");
        background-size: cover;
        background-position-x: 50%;
        background-position-y: 50%;
    }

    .contentTitle1 {
        padding-top: 113px;
        width: 100%;
        font-size: 46px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 8px;
        margin-left: auto;
        margin-right: auto;
    }

    .contentTitle2 {
        width: 100%;
        font-size: 18px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        /*letter-spacing: 4px;*/
        margin-left: auto;
        margin-right: auto;
    }

    .contentWrap2 {
        position: relative;
        /*max-width: 1200px;*/
        width: 100%;
        height: 1424px;
        background: url("../../assets/img/join/backLogo.png") no-repeat center center/cover ;
        overflow: hidden;
        /*left: calc(50% - 600px);*/
    }

    .circle {
        position: absolute;
        margin: 188px 0 auto;
        left: calc(50% - 430px);
        width: 860px;
        height: 410px;
        background: url("../../assets/img/join/cirLogo.png") no-repeat center;

    }
    .status{
        position: absolute;
        right: 0;
        height:160px;
        top:735px;
        width: 85%;
        background: url("../../assets/img/join/statusLog.png") no-repeat center center/cover;
    }

    .circle1 {
        width: 99px;
        height: 99px;
        background-color: #06BFDC;;
        border-radius: 50%;
        opacity: 0.5;
        position: absolute;
        left: -52px;
        top: 336px;
    }

    .circle2 {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #06BFDC;
        line-height: 70px;
        text-align: center;
        font-size: 40px;
        font-family: SourceHanSansCN-Medium;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        left: -37px;
        top: 352px;
    }

    .circle3 {
        width: 99px;
        height: 99px;
        background-color: #7CB4FB;;
        border-radius: 50%;
        opacity: 0.5;
        position: absolute;
        left: 82px;
        top: 72px;
    }

    .circle4 {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #7CB4FB;
        position: absolute;
        line-height: 70px;
        text-align: center;
        font-size: 40px;
        font-family: SourceHanSansCN-Medium;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        left: 97px;
        top: 88px;
    }

    .circle5 {
        width: 99px;
        height: 99px;
        background-color: #FFD34E;;
        border-radius: 50%;
        opacity: 0.5;
        position: absolute;
        left: 387px;
        top: -32px;
    }

    .circle6 {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #FFD34E;
        position: absolute;
        line-height: 70px;
        text-align: center;
        font-size: 40px;
        font-family: SourceHanSansCN-Medium;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        left: 402px;
        top: -16px;
    }

    .circle7 {
        width: 99px;
        height: 99px;
        background-color: #2FC973;
        border-radius: 50%;
        opacity: 0.5;
        position: absolute;
        left: 672px;
        top: 72px;
    }

    .circle8 {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #2FC973;
        position: absolute;
        line-height: 70px;
        text-align: center;
        font-size: 40px;
        font-family: SourceHanSansCN-Medium;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        left: 687px;
        top: 88px;
    }

    .circle9 {
        width: 99px;
        height: 99px;
        background-color: #FF3E3F;;
        border-radius: 50%;
        opacity: 0.5;
        position: absolute;
        left: 807px;
        top: 337px;
    }
    .circle10 {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #FF3E3F;
        position: absolute;
        line-height: 70px;
        text-align: center;
        font-size: 40px;
        font-family: SourceHanSansCN-Medium;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        left: 822px;
        top: 352px;
    }
    .circle .proOne{
        position: absolute;
        left: -50px;
        top: 449px;
        width:115px;
        height:18px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:bold;
        color:rgba(34,34,34,1);
        line-height:18px;
        letter-spacing:1px;
        text-align: center;
    }
    .circle .proOnes{
        position: absolute;
        left: -71px;
        top: 476px;
        width:153px;
        height:33px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:18px;
        letter-spacing:1px;
        text-align: center;

    }
    .circle .proTwo{
        position: absolute;
        left: 89px;
        top: 183px;
        width:114px;
        height:18px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:bold;
        color:rgba(34,34,34,1);
        line-height:18px;
        letter-spacing:1px;
        text-align: center;
    }
    .circle .proTwos{
        position: absolute;
        left: 90px;
        top: 209px;
        width:102px;
        height:14px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:18px;
        text-align: center;
        letter-spacing:1px;
    }
    .circle .proThree {
        position: absolute;
        left: 382px;
        top: 83px;
        width: 114px;
        height: 18px;
        font-size: 18px;
        font-family: SourceHanSansCN-Regular;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        line-height: 18px;
        text-align: center;
        letter-spacing:1px;
    }
    .circle .proThrees {
        position: absolute;
        left: 344px;
        top: 111px;
        width:195px;
        height:14px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:18px;
        text-align: center;
        letter-spacing:1px;
    }
    .circle .proFour {
        position: absolute;
        left: 660px;
        top: 181px;
        width:116px;
        height:18px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:bold;
        color:rgba(34,34,34,1);
        line-height:20px;
        text-align: center;
        letter-spacing:1px
    }
    .circle .proFours {
        position: absolute;
        left: 645px;
        top: 209px;
        width:148px;
        height:35px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:20px;
        text-align: center;
        letter-spacing:1px
    }
    .circle .proFive {
        position: absolute;
        left: 806px;
        top: 449px;
        width:116px;
        height:18px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:bold;
        color:rgba(34,34,34,1);
        line-height:18px;
        text-align: left;
        letter-spacing:1px
    }
    .circle .proFives {
        position: absolute;
        left: 795px;
        top:476px;
        width:137px;
        height:14px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:18px;
        text-align: left;
        letter-spacing:1px;
    }
    .circle .proTitle {
        position: absolute;
        left: 296px;
        top: -143px;
        width:308px;
        height:77px;
        font-size:36px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:45px;
        letter-spacing:5px;
        text-align: center;
    }
    .circle .status{
        position: absolute;
        left: -54px;
        top: 589px;

    }
    .circle .point{
        position: absolute;
        left: 95px;
        top: 209px;
    }
    .centerCircleOut {
        width:120px;
        height:120px;
        box-shadow:0px 11px 10px 0px rgba(0,21,133,0.6);
        opacity:0.3;
        border-radius:50%;
        position: absolute;
        left: 377px;
        top: 198px;
        background:rgba(27,112,228,1);
        animation: circle 1.5s infinite;
        animation-direction: alternate;

    }

    @keyframes circle {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.3);

        }
    }

    .centerCircleIn {
        width:120px;
        height:120px;
        background:rgba(27,112,228,1);
        border-radius:50%;
        position: absolute;
        left: 377px;
        top: 198px;
    }
    .surround{
        width: 68px;
        height: 66px;
        position: absolute;
        left: 403px;
        top: 209px;
    }
    #ifont {

        font-size: 65px;
        color: aliceblue;
    }
    .joinus{
        position: absolute;
        top:420px;
        left: 349px;
        width:180px;
        height:50px;
        background:rgba(27,112,228,1);
        border-radius:4px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
    }
    .joinus:hover{
        background-color: #175dbb;

    }
    .joinus:active{
        transform: scale(1.15, 1.15);

    }
    .jfont{
        color:rgba(255,255,255,1);
        font-size:20px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);

    }
    .streamTotal{
        position: absolute;
        top: 12px;
        width: 700px;
        height: 125px;
        color: red;
        left: 18%;

    }
    .upstream{
        position: absolute;
        left: 20px;
        top: 40px;
        width:58px;
        height:18px;
        font-size:24px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: left;
        letter-spacing: 5px;
    }
    .upstreamNum{
        position: absolute;
        left: 85px;
        top: 21px;
        width:48px;
        height:34px;
        font-size:44px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: left;
        letter-spacing: 5px;
    }
    .midstream{
        position: absolute;
        left: 279px;
        top: 40px;
        width:58px;
        height:18px;
        font-size:24px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: left;
        letter-spacing: 5px;
    }
    .midstreamNum{
        position: absolute;
        left: 344px;
        top: 21px;
        width:48px;
        height:34px;
        font-size:44px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: left;
        letter-spacing: 5px;
    }
    .downstream{
        position: absolute;
        left: 575px;
        top: 40px;
        width:58px;
        height:18px;
        font-size:24px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: left;
        letter-spacing: 5px;
    }
    .downstreamNum{
        position: absolute;
        left: 640px;
        top:21px;
        width:48px;
        height:34px;
        font-size:44px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: left;
        letter-spacing: 5px;
    }
    .addSymbol{
        width:9px;
        height:10px;
        font-size:18px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: left;
        letter-spacing: 5px;
    }
    .upstreamNumAdd{
        position: absolute;
        left: 145px;
        top: 40px;
    }
    .midstreamNumAdd{
        position: absolute;
        left: 442px;
        top: 40px;
    }
    .downstreamNumAdd{
        position: absolute;
        left: 738px;
        top: 40px;
    }
    .upstreamText{
        position: absolute;
        top: 85px;
        width:227px;
        height:16px;
        font-size:15px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#ccc;
        left: 61px;
    }
    .midstreamText{
        position: absolute;
        top: 85px;
        left: 233px;
        width:266px;
        height:35px;
        font-size:15px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#ccc;
        text-align: center;
    }
    .downstreamText{
        position: absolute;
        top: 85px;
        left: 635px;
        width:62px;
        height:16px;
        font-size:15px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#ccc;
    }
    .member {
        position: absolute;
        right: 0;
        height:1000px;
        top:935px;
        width: 1200px;
        left: calc(50% - 600px);
        text-align: center;
    }
    .memberTitle{
        position: relative;
        width: 100%;
        top: 50px;
        font-size:32px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:30px;

    }
    @keyframes members_move {
        from { top: 100px; }
        to   { top: 0px; }
    }
    .members_animation {
        animation: members_move 1s ease-out 0s forwards;
    }



</style>
