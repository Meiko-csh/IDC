<template>
    <div id="alliDynamicWrapper" class="alliDynamicWrapper">

        <div id="contentWrap" class="width-max-1k2">
            <div class="alliCardName" style="position: absolute;top: 40px;z-index: 3">
                <div class="alliCardPoint red"></div>
                <div class="homeAlliCircleWrapper">
                    <div class="alliCardPoint red homeAlliCircle" style="position: absolute"></div>
                </div>
                <div class="alliCardTitle">
                    联盟动态
                </div>
            </div>
            <Row>
                <Col span="12" id="alliDynamicItemLeft" :class="['p-r-sm',leftItemAnimate]">
                    <div id="contentLeftImageDivWrap">
                        <div id="contentLeftImageDiv" :style="newsInfo.leftNews.icon|addApi">
                            <Spin fix size="large" v-if="spinShow">
                                <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                            </Spin>
                        </div>
                    </div>
                    <div class="itemContentWrap">
                        <div class="alliItemTitle">{{ newsInfo.leftNews.title }}</div>
                        <div class="alliItemTime" style="position: absolute;right: 0;top: 5px;">{{
                            newsInfo.leftNews.createTimeStr | formatDate('YYYY-MM-DD') }}
                        </div>
                        <div class="alliItemBrief" :title="newsInfo.leftNews.content">{{ newsInfo.leftNews.content }}
                        </div>
                    </div>
                </Col>
                <Col span="12" id="alliDynamicItemRight" style="padding-left: 10px" :class="rightItemAnimate">
                    <Row class="alliDynamicRightItem" v-for="(news, index) in newsInfo.rightNews" :key="index">
                        <Col span="7" style="height: 100%">
                            <div class="alliDynamicRightItemImg" style="height:100%;background-size:100%;background-position:center" :style="news.icon|addApi">
                                <Spin fix size="large" v-if="spinShow">
                                    <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                                </Spin>
                            </div>
                        </Col>
                        <Col span="17" class="alliDynamicRightItemContentWrap">
                            <div class="alliItemTitle">{{ news.title }}</div>
                            <div class="alliItemBrief" :title="news.content">{{ news.content }}</div>
                            <div class="alliItemTime">{{ news.startTimeStr | formatDate('YYYY-MM-DD') }}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    </div>
</template>
<script>
    export default {
        name: "AlliDynamicNews",
        computed: {
            // 结构化新闻数据
            newsInfo: function () {
                return {
                    leftNews: this.newsData[0],
                    rightNews: this.newsData.slice(1, 5)
                }
            }
        },
        data() {
            return {
                spinShow: true,
                newsData: [
                    {
                        title: '--',
                        content: '--',
                        icon: '',
                        createTime: ''
                    },
                    {
                        title: '--',
                        content: '--',
                        icon: '',
                        createTime: ''
                    },
                    {
                        title: '--',
                        content: '--',
                        icon: '',
                        createTime: ''
                    },
                    {
                        title: '--',
                        content: '--',
                        icon: '',
                        createTime: ''
                    }
                ],
                leftItemAnimate: 'fadeOut animated',
                rightItemAnimate: 'fadeOut animated'
            }
        },
        created() {
            //查询联盟动态数据
            this.queryAlliDynamic();

            //查询当前屏幕宽度，小于800直接设置动画，不进行滚动动画
            this.queryScreenWidth();
        },
        methods: {
            //查询当前屏幕宽度，小于800直接设置动画，不进行滚动动画
            queryScreenWidth() {
                if(window.screen.width<800){
                    this.leftItemAnimate = "fadeInLeft animated"
                    this.rightItemAnimate = "fadeInRight animated"
                }
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
                            "size": "4"
                        },
                    }
                ).then((response) => {

                    //response带着头信息呢
                    const retData = response.data;
                    if (retData.status === 200) {
                        this.newsData = retData.data.content;
                    }

                    //关掉加载动画
                    this.spinShow = false;
                }).catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            },

            //监听滚轮，到了一定高度就触发动画
            handleScroll() { //改变元素#searchBar的top值
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let height = this.getClientHeight()
                let bottom = top + height

                if(bottom > 900) {
                    if(this.leftItemAnimate === 'fadeOut animated') {
                        this.leftItemAnimate = "fadeInLeft animated"
                    }
                    if(this.rightItemAnimate === 'fadeOut animated') {
                        this.rightItemAnimate = "fadeInRight animated"
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

    #alliDynamicItemLeft {
        cursor: pointer;
    }

    #alliDynamicItemLeft:hover .alliItemTitle{
        color: #1B70E4;
        transition: all 0.2s;
    }

    .alliDynamicRightItemContentWrap {
        padding: 0 15px 10px 15px;
    }

    .alliDynamicRightItem {
        height: 150px;
        padding: 15px;
        transition: all 0.2s;
    }

    .alliDynamicRightItem:hover {
        background-color: #fff;
        -webkit-box-shadow: 0px 11px 20px 0px rgba(27,112,228,0.3);
        box-shadow: 0px 11px 20px 0px rgba(27,112,228,0.3);
        cursor: pointer;
        transition: all 0.2s;
    }

    #alliDynamicWrapper {
        position: relative;
        padding: 115px 0 30px 0;
        background: #E8F0FC;
    }

    #contentLeftImageDivWrap {
        height: 400px;
        overflow: hidden;
        position: relative;
    }

    #contentLeftImageDiv {
        height: 400px;
        /*background-image: url('~assets/img/home/dynamic1.png');*/
        background-size: 100%;
        background-position: center;
        transition: all 0.2s;
    }

    #alliDynamicItemLeft:hover #contentLeftImageDiv {
        transform: scale(1.1);
        transition: all 0.2s;
        background-position: center;
    }

    .alliItemTitle {
        margin-top: 10px;
        height: 33px;
        line-height: 33px;
        font-size: 22px;
        font-family: SourceHanSansCN-Regular;
        color: rgba(34, 34, 34, 1);
    }

    .alliItemTime {
        /*height: 33px;*/
        /*line-height: 33px;*/
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        color: rgba(153, 153, 153, 1);
    }

    .alliItemBrief {
        font-size: 14px;
    }

    .itemContentWrap {
        position: relative;
    }

</style>
