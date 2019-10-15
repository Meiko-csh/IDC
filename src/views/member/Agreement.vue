<template>
    <div class="container">
        <div class="main-div">
            <div class="agree-title-div">
                <h1 class="agree-title">中国联通5G应用创新联盟入会协议</h1>
            </div>
            <div class="agree-info">
                <h1 class="agree-1">
                    一、根据《中国联通5G应用创新联盟章程》规定，凡提出申请加入中国联盟5G应用创新联盟的单位，经联盟秘书处审批同意后，即成为中国联通<br>
                    5G应用创新联盟的正式成员，并颁发会员证书，享受会员的权利和义务。<br><br>
                    二、本联盟会员享有以下权利和义务：<br>
                    <h1 class="agree-2">
                        1、会员权利：本联盟的选举权、被选举权和表决权；参加本联盟的有关活动的权利；获得本联盟提供的服务和资讯信息的权利；对本联盟工作提<br>
                        出批评建议和监督的权利。入会自愿，退会自由，联盟将免费为会员单位在官网进行宣传，企业报送的信息经编辑后可刊登在联盟网站和内部刊物上。<br>
                        2、会员义务：遵守本联盟章程，执行本联盟决议；维护本联盟合法权益；积极完成本联盟交办的任务；向本联盟反映情况，提供有关资料和信息<br>
                        并提出建议；定期向本联盟报送活动信息。</h1><br>
                    三、入会单位认真填写入会申请表并加盖公章，与企业简介和营业执照复印件一并寄回联盟秘书处，联盟审核批准后将邮件形式及网上公示形式入<br>
                    会单位。<br><br>
                    四、入会单位接到入会通知后，联盟后续会将证书寄到申请入会单位。申请单位即成为中国联通5G应用创新联盟会员。<br><br>
                    五、中国联通5G应用创新联盟秘书处联系方式：<br>
                    电子邮箱：hqs-cu5gaia@chinaunicom.cn<br>
                    地    址：北京市西城区金融街21号中国联合通信集团有限公司A1219室。<br>
                    邮    编：100033<br>
                </h1>
            </div>
            <div  class="button-div">
               <!-- <button  class="noagree" v-on:click="noagree"  >不同意
                </button>
                <button  class="agree" v-on:click="agree" v-bind:disabled = "isDisabled">我同意
                    <span v-show="!show" class="count">({{count}}s)</span>
                </button>-->
                <div  class="noagree" v-on:click="noagree"  >不同意
                </div>
                <div  class="agree" v-on:click="agree" v-bind:disabled = "isDisabled">我同意
                   <!-- <span v-show="!show" class="count">({{count}}s)</span>-->
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import PageFooter from "../../components/portal/pageFooter/PageFooter";

    export default {
        components: {PageFooter},
        name: "agreement",
        data(){
            return{
                isDisabled:false,
                show: true,
                count: '',
                timer: null
            }
        },
        mounted (){
       /* const TIME_COUNT = 5;
        if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                    this.isDisabled = true
                } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                    this.isDisabled = false;

                }
            }, 1000)
        }*/
    },
        methods:{
            noagree(){
                       this.$router.push({
                           path: '/home'
                       })

            },
            agree() {
                if (this.timer === null){

                let routeUrl =this.$router.resolve({
                    path: '/memberapplication'
                })
                window.open(routeUrl.href, '_blank');
                this.$router.push({
                    path: '/home'
                })
                }
            }
        }


    }
</script>

<style scoped>
    .container {
        width:100%;

    }
    .main-div{
        width:1180px;
        height:669px;
        margin:auto;
        position: relative;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);

    }

    .agree-title-div{
        width:404px;
        height:26px;
        position: absolute;
        margin:49px 394px 0px 394px;
    }
    .agree-title{
        font-size:26px;
        margin:auto;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    .agree-info{
        width:1033px;
        height:448px;
        position: absolute;
        margin:114px 77px 0px 70px;
    }
    .agree-1{
        font-size:16px;
        margin:auto;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:24px;
    }
    .agree-2{
        font-size:16px;
        margin:auto;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color: rgb(102, 102, 102);
        line-height:24px;
    }

    .agree{
        width:140px;
        height:44px;
        position: absolute;
        margin-left:20px;
        background:rgba(27,112,228,1);
        border-radius:4px;
        margin:597px 440px 28px 600px;
        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        padding-top: 10px;
        text-align: center;
        color:rgba(255,255,255,1);
        line-height:24px;
    }
    .agree:hover {
        cursor: pointer;
    }
    .noagree{
        width:140px;
        height:44px;
        position: absolute;
        margin:597px 600px 28px 440px;
        background:rgba(231,231,231,1);
        border-radius:4px;
        font-size:16px;
        text-align: center;
        padding-top: 10px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:24px;
    }
    .noagree:hover {
        cursor: pointer;
    }



</style>