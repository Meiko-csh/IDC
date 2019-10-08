<template>
    <div id="alliDynamicWrapper" class="">
        <div id="alliDynamic" class="" style="padding-top: 110px">
            <div id="alliDynamicBGDivWrapper" style="overflow: hidden">
                <div id="alliDynamicBGDiv" style="width: 1920px">
                    <!--                    <img class="alliDynamicBGImg bgImg1" src="~assets/img/home/dynamicBG.png" alt="">-->
                </div>
            </div>
            <div class="width-max-1k2">
                <Row>
                    <Col span="9" style="padding-right: 35px;margin-top: -75px">
                        <div class="alliCardName" style="position: absolute;top: -10px;z-index: 3">
                            <div class="alliCardPoint red"></div>
                            <div class="alliCardTitle">
                                联盟动态
                            </div>
                        </div>
                        <div class="dynamicTitleOneWrapper">
                            <div class="dynamicItemLeftPic">
                                <img class="imgScaleAnimate" src="~assets/img/home/dynamic1.png" alt="">
                            </div>
                            <div class="dynamicItemTitle" :title="alliDynamicData[0].shortTitle">
                                {{alliDynamicData[0].shortTitle}}
                            </div>
                            <div class="dynamicItemContent" :title="alliDynamicData[0].brief">
                                {{alliDynamicData[0].brief}}
                            </div>
                        </div>
                    </Col>
                    <Col span="15" class="p-l-lg">
                        <div class="dynamicTitleTwoWrapper">
                            <div class="alliDynamicBG"></div>
                            <div class="dynamicItemPicRight m-b-md">
                                <img class="imgScaleAnimate" src="~assets/img/home/dynamic2.png" alt="">
                            </div>
                            <div class="dynamicItemTitle" :title="alliDynamicData[1].shortTitle">
                                {{alliDynamicData[1].shortTitle}}
                            </div>
                            <div class="dynamicItemContent" :title="alliDynamicData[1].brief">
                                {{alliDynamicData[1].brief}}
                            </div>
                        </div>
                        <div class="dynamicTitleTwoWrapper" style="margin-left: 66px">
                            <div class="dynamicItemPicRight m-b-md" style="height: 350px">
                                <img class="imgScaleAnimate" src="~assets/img/home/dynamic3.png" alt="">
                            </div>
                            <div class="dynamicItemTitle" :title="alliDynamicData[2].shortTitle">
                                {{alliDynamicData[2].shortTitle}}
                            </div>
                            <div class="dynamicItemContent" :title="alliDynamicData[2].brief">
                                {{alliDynamicData[2].brief}}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlliDynamic",
        data() {
            return {
                //联盟动态数据
                alliDynamicData: [
                    {
                        "brief": "--",
                        "showH5": 0,
                        "recommendation": 0,
                        "id": 0,
                        "shortTitle": "--",
                        "type": 0,
                        "clazz": "--"
                    },
                    {
                        "brief": "--",
                        "showH5": 0,
                        "recommendation": 0,
                        "id": 0,
                        "shortTitle": "--",
                        "type": 0,
                        "clazz": "--"
                    },
                    {
                        "brief": "--",
                        "showH5": 0,
                        "recommendation": 0,
                        "id": 0,
                        "shortTitle": "--",
                        "type": 0,
                        "clazz": "--"
                    }],
            }
        },
        created() {
            //查询联盟动态数据
            this.queryAlliDynamic();

            //
            // const dataString = "abcabc";
            // console.log("明文是：abcabc")
            // console.log(this.$jsencrypt(dataString));
        },
        methods: {
            //查询联盟动态
            queryAlliDynamic() {
                //查询数据：
                const that = this
                this.$request(
                    {
                        method: 'get',
                        url: '/lib/trend/recommendations/page',
                        params: {
                            "size":"4"
                        },
                    }
                ).then((response) => {

                    //response带着头信息呢
                    const retData = response.data;
                    if (retData.status === 200) {
                        this.alliDynamicData = retData.data.content;
                    }
                }).catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            },
        }
    }
</script>

<style scoped>
    /*联盟动态*/

    #alliDynamicWrapper {
        background: url(~assets/img/home/dynamicBG.png) center -225px no-repeat;
        position: relative;
        overflow: hidden;
        padding-top: 105px;
        /*padding-bottom: 150px;*/
    }

    .alliDynamicBG {
        width: 240px;
        height: 240px;
        background-color: #1B70E4;
        position: absolute;
        top: -30px;
        right: 45px;
        z-index: 1;
    }

    .dynamicTitleTwoWrapper {
        padding-left: 54px;
        padding-right: 10px;
        top: -147px;
        margin-bottom: 147px;
        position: relative;
    }

    .imgScaleAnimate {
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
    }

    .imgScaleAnimate:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all .5s ease;
    }

    .dynamicItemLeftPic {
        /*width: 100%;*/
        margin: 30px 0 20px 0;
        overflow: hidden;
        height: 578px;
    }

    .dynamicItemPicRight {
        height: 400px;
        width: 585px;
        overflow: hidden;
        z-index: 2;
        position: relative;
    }

    .dynamicItemLeftPic img {
        width: 100%;
        height: 578px;
    }

    .dynamicItemPicRight img {
        /*width: 100%;*/
        height: 100%;
    }

    .dynamicItemTitle {
        font-size: 22px;
        color: rgba(102, 102, 102, 1);
        padding-left: 10px;
        margin-right: 60px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .dynamicItemContent {
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        padding-left: 10px;
        margin-right: 60px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .alliDynamicBGImg {
        display: inline-block;
        position: absolute;
        width: 100%;
    }

    .mirrorRotateLevel {
        transform: rotateY(180deg); /* 水平镜像翻转 */
    }

    .alliCardPoint {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: rgba(255, 211, 78, 1);
        border-radius: 50%;
        margin: 4px 12px 4px 10px;
        box-shadow: 0px 0 0px 5px rgba(255, 211, 78, .5);
    }

    .alliCardPoint.red {
        background-color: #FF3E3F;
        box-shadow: 0px 0 0px 5px rgba(255, 62, 63, 0.5);
    }

    .alliCardPoint.blue {
        background-color: #01C4D8;
        box-shadow: 0px 0 0px 5px rgba(1, 196, 216, 0.5);
    }

    .alliCardTitle {
        display: inline-block;
        width: 156px;
        /*height: 36px;*/
        font-size: 38px;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
    }

    /*联盟动态----------结束*/
</style>
