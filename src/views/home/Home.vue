<template>
    <div id="homePageId" style="min-width: 1000px">
        <!-- 轮播图 -->
        <HomeCarousel :carouselValue="carouselConfig.carouselValue"
                      :carouselSetting="carouselConfig.carouselSetting"></HomeCarousel>

        <!-- 联盟权益说明 -->
        <AlliExplain></AlliExplain>

        <!-- 联盟动态 -->
        <AlliDynamicNews></AlliDynamicNews>

        <!-- 联盟成果 -->
        <AlliResult></AlliResult>


        <!-- 联盟成员 -->
        <div id="alliMemberWrapper" class="alliMemberWrapper" style="position: relative;background-color: #E8F0FC">
            <div id="member" class="member width-max-1k2">
                <div class="alliCardName" style="position: absolute;top: 40px;z-index: 3">
                    <div class="alliCardPoint deepBlue"></div>
                    <div class="homeAlliCircleWrapper">
                        <div class="alliCardPoint deepBlue homeAlliCircle" style="position: absolute"></div>
                    </div>
                    <div class="alliCardTitle">
                        联盟会员
                    </div>
                </div>
                <AllianceMembers style="position:relative;padding:100px 0 30px 0;height: 100%;"/>
            </div>
        </div>

        <!-- 合作伙伴 -->
        <AlliPartner></AlliPartner>

        <!-- 页脚  -->
        <page-footer style="z-index: 16"></page-footer>
    </div>
</template>
<script>
    import PageFooter from "../../components/portal/pageFooter/PageFooter";
    import HomeCarousel from "../../views/home/childComps/HomeCarousel"
    import AlliDynamic from "../../views/home/childComps/AlliDynamic"
    import AlliResult from "./childComps/AlliResult";
    import AlliPartner from "./childComps/AlliPartner";
    import AlliExplain from "./childComps/AlliExplain";
    import AlliDynamicNews from "./childComps/AlliDynamicNews";

    import AllianceMembers from "@/components/allianceMembers/AllianceMembers"


    export default {
        name: "Home",
        components: {
            AlliExplain,
            AlliPartner,
            AlliResult,
            PageFooter,
            HomeCarousel,
            AlliDynamic,
            AlliDynamicNews,
            AllianceMembers
        },
        data() {
            return {
                //首页banner、轮播图参数：
                carouselConfig: {
                    carouselValue: 0,
                    carouselSetting: {
                        //这里把自动播放先关了，以后要做个判断，仅有一张图片时不让他自动播放，并且
                        autoplay: false,
                        autoplaySpeed: 2000,
                        dots: 'inside',
                        radiusDot: false,
                        trigger: 'click',
                        arrow: 'never',
                        loop: true,
                    }
                }
            }
        }
    }
</script>
<style scoped>
</style>
<style>
    .homeAlliCircleWrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
    }
    .homeAlliCircle{
        animation: homeAlliCircle-opacity 2s infinite;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        opacity: 0;
        left: 0;
        top: 13px;
    }

    @keyframes homeAlliCircle-opacity{
        from {
            opacity: 2;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(1.7);
        }
    }

    .alliCardPoint {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 12px 4px 10px;
    }

    .alliCardPoint.yellow {
        background: rgba(255, 211, 78, 1);
        box-shadow: 0px 0 0px 3px rgba(255, 211, 78, .5);
    }

    .alliCardPoint.red {
        background-color: #FF3E3F;
        box-shadow: 0px 0 0px 3px rgba(255, 62, 63, 0.5);
    }

    .alliCardPoint.blue {
        background-color: #01C4D8;
        box-shadow: 0px 0 0px 3px rgba(1, 196, 216, 0.5);
    }

    .alliCardPoint.deepBlue {
        background-color: #0155d2;
        box-shadow: 0px 0 0px 3px rgba(170, 204, 255, 0.5);
    }

    .alliCardTitle {
        display: inline-block;
        width: 156px;
        /*height: 36px;*/
        font-size: 34px;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
    }

    .homeAlliCircle.deepBlue {
        background-color: #1B70E4;
    }
    .homeAlliCircle.yellow {
        background-color: #FFD34E;
    }
    .homeAlliCircle.red {
        background-color: #FF3E3F;
    }
    .homeAlliCircle.blue {
        background-color: #01C4D8;
    }
</style>
