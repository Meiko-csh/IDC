<template>
    <div class="detailsHighest">
        <!-- 赋能专区详情页 -->
        <div class="middle">
            <div class="basic-data">
                <div class="basic-title">
                    <span>{{particulars.energyProdName}}</span>
                </div>
                <hr class="hr-ab" style="border:0">
                <div style="padding-left: 25px;">
                    <row style="margin-top: 40px;" class="row">
                        <i-col span="8">负责人姓名：{{particulars.contactName}}</i-col>
                        <i-col span="8">
                            <div>产品模式：{{particulars.energyProdType}}</div>
                        </i-col>
                        <i-col span="8">上传时间：{{targetCustomer}}</i-col>
                    </row>
                    <row>
                        <i-col span="8">
                            <div>产品类型：{{particulars.energyProdMode}}</div>
                        </i-col>
                        <i-col span="8">产品分类：{{particulars.energyProdClass}}</i-col>
                    </row>
                    <row class="row">
                        <i-col span="24">
                            <div>
                                <div style="display: inline-block; vertical-align: top;">
                                    产品简介：{{particulars.energyProdIntroduction}}</div>
                                <div style="display: inline-block;width: calc(100% - 90px);line-height: 23px;"></div>
                            </div>
                        </i-col>
                    </row>
                    <!-- <row>
                            目标客户：{{particulars.targetCustomer}}
                        </row> -->
                </div>
            </div>
        </div>
        <!-- 第二层 -->
        <!-- <div class='prodFun'>
                <div class="other-card">
                    <div class="card-body">
                        <div class="basic-title">
                            <span>产品功能</span>
                        </div>
                        <row>
                            <div class="p-b">
                                <div v-for="(item,i) of particulars.prodFunction" class="function-sty">
                                    <div class="text-align-left">
    
                                        <svg style="width:60px" t="1572247080546" class="icon" viewBox="0 0 1024 1024"
                                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10916" width="200"
                                            height="200">
                                            <path
                                                d="M443.221 547.328H126.805c-19.456 0-35.328 15.872-35.328 35.328v316.416c0 19.456 15.872 35.328 35.328 35.328h316.416c19.456 0 35.328-15.872 35.328-35.328V582.656c0-19.968-15.872-35.328-35.328-35.328z m-20.992 330.24H148.31V603.136h274.432v274.432zM754.517 460.8c93.184 0 168.448-75.776 168.448-168.96s-75.264-168.96-168.448-168.96S586.07 198.656 586.07 291.84c-0.512 93.184 75.264 168.96 168.448 168.96z m1.024-276.48c59.392 0 108.032 49.152 108.032 109.568s-48.64 109.568-108.032 109.568c-59.392 0-108.032-49.152-108.032-109.568S696.15 184.32 755.541 184.32z m144.384 363.008H583.51c-19.456 0-35.328 15.872-35.328 35.328v316.416c0 19.456 15.872 35.328 35.328 35.328h316.416c19.456 0 35.328-15.872 35.328-35.328V582.656c0-19.968-15.872-35.328-35.328-35.328z m-20.992 330.24h-273.92V603.136h274.432v274.432zM443.221 90.112H126.805c-19.456 0-35.328 15.872-35.328 35.328v316.416c0 19.456 15.872 35.328 35.328 35.328h316.416c19.456 0 35.328-15.872 35.328-35.328V125.44c0-19.456-15.872-35.328-35.328-35.328z m-20.992 330.24H148.31v-273.92h274.432v273.92z"
                                                p-id="10917"></path>
                                            <path
                                                d="M642.901 291.328c0 62.464 50.176 112.64 112.64 112.64s112.64-50.176 112.64-112.64-50.176-112.64-112.64-112.64-112.64 50.688-112.64 112.64z"
                                                fill="#44BDD3" p-id="10918"></path>
                                        </svg>
                                    </div>
                                    <div class="prodFunCard">
                                        <div class="prodFunTitle">{{item.title}}</div>
                                        <div class="prodFunContent">
                                            {{item.content}}
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </row>
                    </div>
                </div>
            </div> -->
        <!-- 第三层 -->
        <!-- <div class="prodAdvRenderDiv">
                <div class="card">
                    <div class="card-body">
                        <div class="basic-title">
                            <span>产品优势</span>
                        </div>
                        <div class="prodAdvRow">
                            <div v-for="(item,i) of particulars.prodAdvantage" :key="i">
                                <i class="iconfont icon-dengpao prodAdvIcon"></i>
                                <span class="prodAdvTitle">{{item.title}}</span>
                                <span class="prodAdvContent">{{item.content}}</span>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div> -->
        <!-- 第四层 -->
        <!-- <div class="case">
                <div class="other-card">
                    <div class="card-body">
                        <div class="basic-title">
                            <span>问题解答</span>
                        </div>
                        <div class="prodAdvRow">
                            <div v-for="(item,i) of particulars.commonProblem" :key="i">
                                <i class="iconfont icon-dengpao prodAdvIcon"></i>
                                <span class="prodAdvTitle">{{item.title}}</span>
                                <span class="prodAdvContent">{{item.content}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        <!-- 第五层 -->
        <div class="prodSupport">
            <div class="card card-border">
                <div class="card-body">
                    <div class="basic-title">
                        <span>附件</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="divbutton"> <Button class="ayer" @click="backBtn">返回</Button></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                particulars: {},
                targetCustomer: "",
            }
        },
        created() {

            let vals = sessionStorage.getItem("key");
            this.particulars = window.JSON.parse(vals);
            document.querySelector('html').setAttribute('style', 'min-width:0')
            document.querySelector('body').setAttribute('style', 'min-width:0')
        },
        mounted() {
            this.time()
        },
        methods: {
            backBtn() {
                this.$router.go(-1);

            },
            time() {
                let time = this.particulars.createTime;
                let date = new Date(time)
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = date.getDate() + ' ';
                let h = date.getHours() + ':';
                let m = date.getMinutes() + ':';
                let s = date.getSeconds();
                this.targetCustomer = Y + M + D + h + m + s;
                console.log(this.targetCustomer);




            }
        }
    }
</script>
<style scoped>
    .detailsHighest {
        width: 100%;
    }

    .middle {
        padding: 10px 0 20px 0;
        border: 0;
        min-width: 800px;
        width: 100%;
        margin-bottom: 10px;
        display: block;
        font-family: '微软雅黑';

    }

    .basic-title {
        /* padding-left: 65px; */

        margin: 10px 200px 20px 200px;
    }

    .basic-data {
        max-width: 1200px;
        margin: 0 auto;
    }

    .basic-title span {
        display: block;
        color: #000;
        font-family: '微软雅黑';
        text-align: center;
        font-size: 24px;
        font-weight: bold
    }

    .hr-ab {
        margin-bottom: 20px;
    }

    .row {
        margin: 8px 0;
    }

    .prodFun {
        padding-top: 51px;
        margin-top: -51px;
    }

    .other-card {
        width: 100%;
        height: auto;
        background-color: #ddf8fd;
        padding: 10px 0 20px 0;
    }

    .card-body {
        padding: 16px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        width: 100% !important;
    }

    .p-b {
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .text-align-left {
        text-align: left;

    }

    .prodFunTitle {
        font-weight: bold;
        color: rgba(55, 61, 65, 1);
    }

    .prodFunContent {
        color: #73777A;
    }

    .card {
        padding: 10px 0 20px 0;
        width: 100%;
        height: auto;
    }

    .prodAdvRow {
        padding: 0 15px 15px 29px;
        margin-right: -15px;
        margin-left: -15px;

    }

    .prodAdvRow>div {
        margin: 20px 0;
    }

    /* .prodAdvRenderDiv{
    
        } */

    .prodAdvTitle {
        font-size: 16px;
        font-weight: bold;
        padding: 0 30px 0 15px;
    }

    .case {
        padding-top: 51px;
        margin-top: -51px;
    }

    .details-first-title {
        padding-left: 65px;
        margin-top: 10px;
        text-align: center;
    }

    .prodSupport {
        padding-top: 51px;
        margin-top: -51px;
    }

    .card-border {
        border-bottom: 0;
    }

    .divbutton {
        margin-top: 30px;
        max-width: 120px;
        margin: 0 auto;
    }

    .ayer {
        margin: 0 auto !important;
        margin-right: 10px;
        width: 120px;
        border-radius: 0px !important;
        height: 36px !important;

        background: none !important;
        border-color: #73777a !important;
        color: #73777a !important;
        /* transform: translateX(30%); */
    }

    .ayer:hover {
        background: #73777a !important;
        color: #fff !important;
    }

    .function-sty {
        width: 300px;
        margin: 2px 10px 50px 10px;
    }

    .doubt-one {
        width: 350px;
        display: inline-block;
    }

    >>>.icon {
        height: 60px;
    }
</style>