<template>
    <!-- 联盟成果 -->
    <div id="alliDynamicResult" class="width-max-1k2"
         style="margin-bottom: 70px;position: relative;margin-top: 90px;top: 100px" :class="animateUpMoveStyle">
        <div id="alliResult" style="position: relative">
            <div class="alliResultBG">
                <!--                    <div class="alliResultBGTitle">落地案例</div>-->
            </div>
            <div class="alliCardName" style="position: absolute;top: -10px;z-index: 3">
                <div class="alliCardPoint yellow"></div>
                <div class="homeAlliCircleWrapper">
                    <div class="alliCardPoint yellow homeAlliCircle" style="position: absolute"></div>
                </div>
                <div class="alliCardTitle" style="color: #fff">
                    联盟成果
                </div>
            </div>
            <Row style="z-index: 2;padding-top: 50px">
                <Col span="8" class="p-b-sm" v-for="(result,index) in alliResultsData" :key="index">
                    <div class="resultItemWrapper">
                        <div class="resultItem">
                            <div class="resultItemPic overflow-hidden">
                                <img class="imgScaleAnimate" :src="result.icon | imgAddApi" alt="">
                                <Spin fix size="large" v-if="spinShow">
                                    <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                                </Spin>
                            </div>
                            <div class="resultItemTitle" :title="result.shortTitle">{{result.shortTitle}}</div>
                            <div class="resultItemContent" :title="result.brief">{{result.brief}}</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlliResult",
        data() {
            return {
                spinShow: true,
                //首页案例：初始空数据
                alliResultsData: [
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
                animateUpMoveStyle: null
            }
        },
        created() {
            //查询案例数据
            this.queryCase();

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

            //查询案例数据
            queryCase() {
                //查询数据：
                const queryData = {
                    aaa: "abc",
                    bbb: "abc2"
                };

                this.$request(
                    {
                        method: 'get',
                        url: '/lib/case/recommendations',
                        // headers: {'X-Requested-With': 'XMLHttpRequest', 'sessionId': 'X611857761613361152'},
                        params: queryData,
                        headers: {
                            // 'Content-Type':'application/json'
                        },
                    }
                ).then((response) => {

                    //response带着头信息呢
                    const retData = response.data;
                    if (retData.status === 200) {
                        this.alliResultsData = retData.data;
                    }

                    //关掉加载动画
                    this.spinShow = false;
                }).catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            },

            //根据index写死图片地址
            getCaseItemImg: (index) => {
                return require("../../../assets/img/home/result" + (index + 1) + ".png");
            },

            //监听滚轮，到了一定高度就触发动画
            handleScroll() { //改变元素#searchBar的top值
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let height = this.getClientHeight()
                let bottom = top + height

                if(bottom > 1600) {
                    if(this.animateUpMoveStyle == null) {
                        this.animateUpMoveStyle = "animateUpMoveStyle"
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
            }
        },
        mounted() {
            //给window添加一个滚动滚动监听事件
            window.addEventListener('scroll', this.handleScroll)
            this.handleScroll()
        }
    }
</script>

<style scoped>
    /*联盟成果*/
    .alliResultBGTitle {
        font-size: 34px;
        color: #fff;
        padding-left: 35px;
        padding-top: 15px;
    }

    .alliResultBG {
        width: 240px;
        height: 475px;
        background-color: #1B70E4;
        position: absolute;
        top: -20px;
        left: -30px;
        z-index: 1;
    }

    .resultItemTitle {
        font-size: 22px;
        color: rgba(102, 102, 102, 1);
        padding: 15px 25px 5px 25px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .resultItemContent {
        font-size: 16px;

        color: rgba(153, 153, 153, 1);
        padding: 0px 25px 5px 25px;
        height: 72px;
        line-height: 24px;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-height: 72px;
    }

    .resultItemPic img {
        width: 100%;
        transition: all 0.2s;
    }

    .resultItem:hover img {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.2s;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .resultItem:hover .resultItemTitle {
        color: #1B70E4;
    }

    .resultItemPic {
        height: 200px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        position: relative;
    }

    .resultItemWrapper {
        margin: 10px;
        box-shadow: 0px 0px 10px 1px rgba(27, 112, 228, 0.3);
        border-radius: 6px;
    }

    .resultItem {
        height: 368px;
        background-color: #fff;
        border-radius: 6px;
        cursor: pointer;
    }

    /*联盟成果--------end*/
</style>
