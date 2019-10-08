<template>
    <div class="continer">
        <div class="content">
            <div class="main">
                <div class="title">
                    {{ this.returnData.messageContent.substring(0,40) }}

                </div>
                <div class="edit">
                    {{ this.returnData.initiationStaffName}}&nbsp发表于{{ this.returnData.createDate | formatDate }}
                </div>
            </div>
            <div class="line"></div>
            <div class="mainBody">
                {{this.returnData.messageDetail}}
            </div>
        </div>



    </div>

</template>

<script>
    import { formatDate } from '../../common/date.js';

    export default {
        name:"NoticeDetail",
        mounted() {
            this.noticeDetail();

        },
        filters:{
            formatDate(time){
                var  date = new Date(time);
                return formatDate(date,'yyyy-MM-dd hh:mm:ss');
            }
        },
        methods:{
            noticeDetail: function(){
                this.$request(
                    {
                        method:'post',
                        url:'/log/message/qryMsgByMsgId',
                        // data:{ 'msgId': this.msgId },
                        data:{ 'msgId': this.$route.params.id },
                        // headers: {
                        //     //'Access-Control-Expose-Headers': 'Authorization'
                        // },
                    }
                ).then((response) =>{
                    if( response.data.status == 200 ){
                        this.returnData = response.data.data;
                        console.log(this.returnData);
                        console.log(this.returnData.messageContent);
                    }
                }).catch(function (error){
                    console.log(error);
                });
            },
        },
        data(){
            return{
                returnData: {},
            }
        }

    }
</script>

<style scoped>
    .continer{
        padding-top: 50px;
        padding-bottom: 30px;
        width:100%;
        background:rgba(243,243,243,1);
        text-align: center;
    }
    .content{
        position: relative;
        width: 1000px;
        min-height: 1333px;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        left: calc(50% - 500px)
    }
    .main{
        margin: 0 auto;
        height: 108px;
        width: 100%;

    }
    .title{
        text-align: left;
        padding-left: 90px;
        padding-right: 90px;
        width:100%;
        height:20px;
        font-size:19px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(27,112,228,1);
        line-height:19px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 33px;
    }
    .edit{
        width:350px;
        height:14px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:19px;
        margin-top: 35px;
        margin-left: 90px;
        text-align: left;
    }
    .line{
        width:1000px;
        height:1px;
        background:rgba(231,231,231,1);
    }
    .mainBody{
        width: 100%;
        min-height: 1000px;
        padding-left: 90px;
        padding-right: 90px;
        word-break: break-all;
        text-align: left;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:26px;
        margin-top: 21px;
    }


</style>
