<template>
    <!--联盟说明-->
    <div id="alliExplain" class="width-max-1k2">
        <Row class="explainRow">
            <Col class="explainCol animated zoomIn" span="8" v-for="(explainItem, index) in explainItems"
                 :key="index">
                <div class="explainItemWrapper" v-on:mouseenter="explainItemMouseEnter(index)">
                    <div :class="['explainItem',explainItem.explainItemInit]">
                        <div class="explainItemTitle">{{ explainItem.title}}</div>
                        <div class="explainItemContent">
                            <div v-for="liItem in explainItem.liItems">{{ liItem }}</div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "AlliExplain",
        data() {
            return {
                //联盟说明card对应的数据
                explainItems: [
                    {
                        title: "1个愿景",
                        explainItemInit: "",
                        liItems: [
                            "汇聚产业生态优势资源",
                            "领航5G应用快速发展"
                        ]
                    },
                    {
                        title: "5大目标",
                        explainItemInit: "explainItemInit",
                        liItems: [
                            "打造200+ 5G示范项目",
                            "制订20+ 5G应用标准",
                            "建立50+ 5G开放实验室",
                            "聚合1000+ 成员单位",
                            "孵化100+ 5G创新应用产品",
                        ]
                    },
                    {
                        title: "6大赋能",
                        explainItemInit: "",
                        liItems: [
                            "网络和平台赋能",
                            "产品孵化赋能",
                            "商业创新赋能",
                            "营销资源赋能",
                            "创投资本赋能",
                            "服务支撑赋能"
                        ]
                    }
                ],
            }
        },
        methods:{
            //鼠标移入有个mouseEnter事件,蓝条随着鼠标动
            explainItemMouseEnter: function (index) {
                for (let i = 0; i < this.explainItems.length; i++) {
                    this.explainItems[i].explainItemInit = "";
                }
                this.explainItems[index].explainItemInit = "explainItemInit";
            },
        }
    }
</script>

<style scoped>
    /*联盟说明*/
    .explainRow {
        margin: 20px 0;
    }

    .explainCol {
        /*margin: 20px;*/
    }

    .explainItemWrapper {
        height: 184px;
        margin: 10px;
        /*background-color: #4b9179;*/
        box-shadow: 0 0 40px 0 rgba(27, 112, 228, 0.3);
    }

    .explainItem {
        height: 100%;
        position: relative;
    }

    .explainItem:hover:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 4px;
        background-color: #0D9DF6;
    }

    .explainItem:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 4px;
        background: #0D9DF6;
        transition: all .3s ease-out;
    }

    .explainItemInit:before {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 4px;
        background: #0D9DF6;
    }

    .explainCol:nth-child(1) .explainItem {
        background-image: url("~assets/img/home/explain1.png");
        background-size: 100% 100%;
    }

    .explainCol:nth-child(2) .explainItem {
        background-image: url("~assets/img/home/explain2.png");
        background-size: 100% 100%;
    }

    .explainCol:nth-child(3) .explainItem {
        background-image: url("~assets/img/home/explain3.png");
        background-size: 100% 100%;
    }

    .explainItemTitle {
        line-height: 184px;
        /* text-align: center; */
        padding-left: 35px;
        white-space: nowrap;
        width: 120px;
        display: inline-block;
        font-size: 22px;
        color: #222222;
    }

    .explainItemContent {
        display: inline-block;
        vertical-align: middle;
        margin-top: -5px;
        font-size: 16px;
        color: #666666;
        padding-left: 5%;
    }

    /*联盟说明----------结束*/
</style>
