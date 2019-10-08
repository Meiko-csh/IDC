<template>
    <div class="continer">
        <div class="content">
            <Tabs value="notice" v-model="currentTab" @on-click="currentTabChange" >
                <TabPane label="全部消息" name="common" >
                    <div class="index-board-item"
                         v-for="(item,index) in  listData " @click="toDetail(item.messageId)" >
                        <div  :class=" item.idRead == 0 ? 'item-title bold':'item-title'">{{item.messageContent.substring(0,40)}} <span class="item-Date">{{ item.createDate | formatDate }}</span></div>
                        <div  class="item-content">{{item.messageDetail}}</div>
                        <div class="hr"></div>
                    </div>
                    <!--<div id="more" class="more" @click="moreNotice" v-if="commMore" >展示更多</div>-->
                    <div :class="showMore1" @click="moreNotice"  v-if="showDiv">{{more_title}}</div>
                    <!--<div :class="showMore2" @click="moreNotice" v-else  >{{more_title}}</div>-->
                </TabPane>
                <TabPane label="审批消息" name="approve" v-if="judge" >
                    <div class="index-board-item"
                         v-for="(item,index) in  approveData" @click="toApprove(item.approvalId)">
                        <div class="item-title">{{item.messageContent.substring(0,40)}} <span class="item-Date">{{ item.createDate | formatDate }}</span></div>
                        <div class="item-content">{{item.messageDetail}}</div>
                        <div class="hr"></div>
                    </div>
                    <div :class="showMore1" @click="moreNotice" v-if="showDiv" >{{more_title}}</div>
                </TabPane>
            </Tabs>
        </div>
    </div>

</template>

<script>
    import {formatDate} from '../../common/date.js';
    export default {
        name:"Notice",
        mounted: function(){
            var usertag=this.$store.state.user.data.role;
            if (usertag==='0'){ this.judge = false}
            else if(usertag==='000'){this.judge=true}
            this.commonNotice();

        },
        filters:{
            formatDate(time){
                var  date = new Date(time);
                return formatDate(date,'yyyy-MM-dd');
            }
        },
        methods: {
            currentTabChange:function(name){
                this.showDiv = false;
                this.showMore1 = "more1";
                this.more_title ="展示更多";
                // console.log(name);
                // console.log(this.currentTab)
                this.pageNum = 0;
                if(name =='common'){
                    this.listData =[];
                    this.commonNotice();
                }else if (name == 'approve'){
                    this.approveData = [];
                    this.approveNotice();
                }
            },

            //展示更多
            moreNotice: function(){
                if (this.currentTab == 'common'){
                    this.commonNotice('add');

                }else if(this.currentTab == 'approve'){
                    this.approveNotice('add');
                }

            },

            //普通消息
            commonNotice: function(type){
                this.$request(
                    {
                        method:'post',
                        url:'/log/message/qryMsgByUserId',
                        data:{ 'messageType':'','page':this.pageNum,'size':this.pageSize },
                        // headers: {
                        //     //'Access-Control-Expose-Headers': 'Authorization'
                        //     'Content-Type': 'application/x-www-form-urlencoded'
                        // },
                    }
                ).then((response) =>{
                    const retData = response.data;
                        console.log(retData);
                    if( retData.status == 200 ){
                        this.showDiv = true;
                        if(this.pageNum === 0){
                            this.pageNum = 1;
                        }else{
                            this.pageNum = this.pageNum + 1;
                        }
                        if(type == 'add'){
                            //this.approveData = [this.approveData,...retData1.data.content]
                            let newData = this.listData;
                            retData.data.content.forEach((element)=>{
                                newData.push(element)
                            })
                            this.listData = newData;
                            console.log('addData',this.listData );
                            //判断是否全部展示完成
                            this.judgeEnd(retData.data);

                            return false;
                        }
                        console.log(this.listData);
                        this.listData = retData.data.content;
                        //判断是否全部展示完成
                        this.judgeEnd(retData.data);
                    }
                }).catch(function (error){
                    console.log(error);
                });
            },

            //审批消息
            approveNotice: function(type){
                this.$request(
                    {
                        method:'post',
                        url:'/log/message/qryMsgByUserId',
                        data:{ 'messageType':'1','page':this.pageNum,'size':this.pageSize },
                        headers:{
                            // 'Content-Type':'application/json'
                        },
                    }
                ).then((response) =>{

                    const retData1 = response.data;
                        console.log(retData1,type)
                    if( retData1.status == 200 ){
                        this.showDiv = true;
                        if(this.pageNum === 0){
                            this.pageNum = 1;
                        }else{
                            this.pageNum = this.pageNum + 1;
                        }
                        if(type == 'add'){
                            //this.approveData = [this.approveData,...retData1.data.content]
                            let newData = this.approveData;
                            retData1.data.content.forEach((element)=>{
                                newData.push(element)
                            })
                            this.approveData = newData;
                            console.log('addData',this.approveData );
                            //判断是否展全部展示完
                            this.judgeEnd(retData1.data);
                            return false;
                        }
                        this.approveData = retData1.data.content;
                        console.log(this.approveData);
                        //首页 判断是否展示 显示更多
                        this.judgeEnd(retData1.data);

                    }

                }).catch(function (error){
                    console.log(error);
                });
            },

            //判断是否 全部展示完
            judgeEnd:function(returnData){
                console.log(returnData);
                if( returnData.totalPages -1 == returnData.number ){
                     this.showMore1 = "more2";
                     this.more_title ="全部展示完成"
                }
            },

            toDetail: function (id) {
                this.$router.push({
                    name:'NoticeDetail',params:{id:id}
                })
                console.log(id);
            },
            toApprove: function (approvalId) {
                let routeData = this.$router.resolve({
                    path:'/memberreview',query:{approvalId:approvalId}
                });
                window.open(routeData.href, '_blank');
            }


        },
        data(){
            return{
                showDiv:false,
                judge:false,
                showMore1:"more1",
                more_title: "展示更多 ",
                listData: [],
                approveData:[],
                currentTab:'common',
                //发送请求消息类型，审批消息：1
                commonType:'',
                approveType:'1',
                //初始请求的页数
                pageNum:0,
                pageSize:5,
                noticeList:
                    [
                        {
                            id: '1',
                            title: '5G合作伙伴加入',
                            content:'简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容简介内容啦啦啦啦简介内介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦啦啦啦简介内容啦容啦啦啦啦简介内'
                        },
                        {
                            id: '2',
                            title: '中兴通讯5G+XR登陆上海“城市之巅云端会客厅”',
                            content:'8月2日，上海中心全面启动5G部署，开展“城市之巅5G+XR创意科技展”活动。本次科技展由上海市经济和信息化委员指导，上海中心、上海交通大学文创学院和上海多媒体行业协会联合主办，上海联通、上海电信和上海移动提供5G网络支持。本次科技展期间，主办方与咪咕合作开设了“城市之巅云端会客厅”，邀请业内大咖共同探讨5G+XR应用发展。8月18日，中兴通讯、羽时金融、视天科技、睿悦信息等企业专家共同参加了“城市之巅云端会客厅”活动，本次活动由视天科技CEO张悦主持，现场专家就5G+XR技术的发展、5G+XR在金融领域的应用进行了交流，5G+XR金融解决方案首次登陆上海之颠，将本次活动推向了新的高度。视天科技总裁赵焕为本次活动开场，视天科技在国内最早成功研发移动体感技术核心算法，多年深耕于虚拟现实应用的开发。赵焕先生表示，5G技术的普及和牌照的正式颁发给XR技术和应用带来了新的契机， 除了最初的视听娱乐，在很多行业领域有着广阔空间，今天的沙龙活动即围绕5G与XR如何结合，以及金融行业应用展开探讨。'
                        },
                        {
                            id: '3',
                            title: '中兴通讯5G+XR登陆上海“城市之巅云端会客厅”',
                            content:'8月3日，上海中心全面启动5G部署，开展“城市之巅5G+XR创意科技展”活动。本次科技展由上海市经济和信息化委员指导，上海中心、上海交通大学文创学院和上海多媒体行业协会联合主办，上海联通、上海电信和上海移动提供5G网络支持。本次科技展期间，主办方与咪咕合作开设了“城市之巅云端会客厅”，邀请业内大咖共同探讨5G+XR应用发展。8月18日，中兴通讯、羽时金融、视天科技、睿悦信息等企业专家共同参加了“城市之巅云端会客厅”活动，本次活动由视天科技CEO张悦主持，现场专家就5G+XR技术的发展、5G+XR在金融领域的应用进行了交流，5G+XR金融解决方案首次登陆上海之颠，将本次活动推向了新的高度。视天科技总裁赵焕为本次活动开场，视天科技在国内最早成功研发移动体感技术核心算法，多年深耕于虚拟现实应用的开发。赵焕先生表示，5G技术的普及和牌照的正式颁发给XR技术和应用带来了新的契机， 除了最初的视听娱乐，在很多行业领域有着广阔空间，今天的沙龙活动即围绕5G与XR如何结合，以及金融行业应用展开探讨。'
                        },
                        {
                            id: '2',
                            title: '中兴通讯5G+XR登陆上海“城市之巅云端会客厅”',
                            content:'8月4日，上海中心全面启动5G部署，开展“城市之巅5G+XR创意科技展”活动。本次科技展由上海市经济和信息化委员指导，上海中心、上海交通大学文创学院和上海多媒体行业协会联合主办，上海联通、上海电信和上海移动提供5G网络支持。本次科技展期间，主办方与咪咕合作开设了“城市之巅云端会客厅”，邀请业内大咖共同探讨5G+XR应用发展。8月18日，中兴通讯、羽时金融、视天科技、睿悦信息等企业专家共同参加了“城市之巅云端会客厅”活动，本次活动由视天科技CEO张悦主持，现场专家就5G+XR技术的发展、5G+XR在金融领域的应用进行了交流，5G+XR金融解决方案首次登陆上海之颠，将本次活动推向了新的高度。视天科技总裁赵焕为本次活动开场，视天科技在国内最早成功研发移动体感技术核心算法，多年深耕于虚拟现实应用的开发。赵焕先生表示，5G技术的普及和牌照的正式颁发给XR技术和应用带来了新的契机， 除了最初的视听娱乐，在很多行业领域有着广阔空间，今天的沙龙活动即围绕5G与XR如何结合，以及金融行业应用展开探讨。'
                        },
                        {
                            id: '4',
                            title: '中兴通讯5G+XR登陆上海“城市之巅云端会客厅”',
                            content:'8月5日，上海中心全面启动5G部署，开展“城市之巅5G+XR创意科技展”活动。本次科技展由上海市经济和信息化委员指导，上海中心、上海交通大学文创学院和上海多媒体行业协会联合主办，上海联通、上海电信和上海移动提供5G网络支持。本次科技展期间，主办方与咪咕合作开设了“城市之巅云端会客厅”，邀请业内大咖共同探讨5G+XR应用发展。8月18日，中兴通讯、羽时金融、视天科技、睿悦信息等企业专家共同参加了“城市之巅云端会客厅”活动，本次活动由视天科技CEO张悦主持，现场专家就5G+XR技术的发展、5G+XR在金融领域的应用进行了交流，5G+XR金融解决方案首次登陆上海之颠，将本次活动推向了新的高度。视天科技总裁赵焕为本次活动开场，视天科技在国内最早成功研发移动体感技术核心算法，多年深耕于虚拟现实应用的开发。赵焕先生表示，5G技术的普及和牌照的正式颁发给XR技术和应用带来了新的契机， 除了最初的视听娱乐，在很多行业领域有着广阔空间，今天的沙龙活动即围绕5G与XR如何结合，以及金融行业应用展开探讨。'
                        },
                        {
                            id: '5',
                            title: '中兴通讯5G+XR登陆上海“城市之巅云端会客厅”',
                            content:'8月3日，上海中心全面启动5G部署，开展“城市之巅5G+XR创意科技展”活动。本次科技展由上海市经济和信息化委员指导，上海中心、上海交通大学文创学院和上海多媒体行业协会联合主办，上海联通、上海电信和上海移动提供5G网络支持。本次科技展期间，主办方与咪咕合作开设了“城市之巅云端会客厅”，邀请业内大咖共同探讨5G+XR应用发展。8月18日，中兴通讯、羽时金融、视天科技、睿悦信息等企业专家共同参加了“城市之巅云端会客厅”活动，本次活动由视天科技CEO张悦主持，现场专家就5G+XR技术的发展、5G+XR在金融领域的应用进行了交流，5G+XR金融解决方案首次登陆上海之颠，将本次活动推向了新的高度。视天科技总裁赵焕为本次活动开场，视天科技在国内最早成功研发移动体感技术核心算法，多年深耕于虚拟现实应用的开发。赵焕先生表示，5G技术的普及和牌照的正式颁发给XR技术和应用带来了新的契机， 除了最初的视听娱乐，在很多行业领域有着广阔空间，今天的沙龙活动即围绕5G与XR如何结合，以及金融行业应用展开探讨。'
                        },
                        {
                            id: '6',
                            title: '中兴通讯5G+XR登陆上海“城市之巅云端会客厅”',
                            content:'8月4日，上海中心全面启动5G部署，开展“城市之巅5G+XR创意科技展”活动。本次科技展由上海市经济和信息化委员指导，上海中心、上海交通大学文创学院和上海多媒体行业协会联合主办，上海联通、上海电信和上海移动提供5G网络支持。本次科技展期间，主办方与咪咕合作开设了“城市之巅云端会客厅”，邀请业内大咖共同探讨5G+XR应用发展。8月18日，中兴通讯、羽时金融、视天科技、睿悦信息等企业专家共同参加了“城市之巅云端会客厅”活动，本次活动由视天科技CEO张悦主持，现场专家就5G+XR技术的发展、5G+XR在金融领域的应用进行了交流，5G+XR金融解决方案首次登陆上海之颠，将本次活动推向了新的高度。视天科技总裁赵焕为本次活动开场，视天科技在国内最早成功研发移动体感技术核心算法，多年深耕于虚拟现实应用的开发。赵焕先生表示，5G技术的普及和牌照的正式颁发给XR技术和应用带来了新的契机， 除了最初的视听娱乐，在很多行业领域有着广阔空间，今天的沙龙活动即围绕5G与XR如何结合，以及金融行业应用展开探讨。'
                        },
                        {
                            id: '7',
                            title: '中兴通讯5G+XR登陆上海“城市之巅云端会客厅”',
                            content:'8月5日，上海中心全面启动5G部署，开展“城市之巅5G+XR创意科技展”活动。本次科技展由上海市经济和信息化委员指导，上海中心、上海交通大学文创学院和上海多媒体行业协会联合主办，上海联通、上海电信和上海移动提供5G网络支持。本次科技展期间，主办方与咪咕合作开设了“城市之巅云端会客厅”，邀请业内大咖共同探讨5G+XR应用发展。8月18日，中兴通讯、羽时金融、视天科技、睿悦信息等企业专家共同参加了“城市之巅云端会客厅”活动，本次活动由视天科技CEO张悦主持，现场专家就5G+XR技术的发展、5G+XR在金融领域的应用进行了交流，5G+XR金融解决方案首次登陆上海之颠，将本次活动推向了新的高度。视天科技总裁赵焕为本次活动开场，视天科技在国内最早成功研发移动体感技术核心算法，多年深耕于虚拟现实应用的开发。赵焕先生表示，5G技术的普及和牌照的正式颁发给XR技术和应用带来了新的契机， 除了最初的视听娱乐，在很多行业领域有着广阔空间，今天的沙龙活动即围绕5G与XR如何结合，以及金融行业应用展开探讨。'
                        }
                    ]
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
    .content {
        position: relative;
        width: 1000px;
        min-height: 1333px;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        left: calc(50% - 500px)
    }
    .index-board-item{
        text-align: left;
        margin-left: 3px;
        margin-right: 1px;
        margin-top: 12px;
        color: #8c939d;
    }
    .index-board-item:hover{
        box-shadow:0px 0px 10px 0px rgba(27,112,228,0.3);
    }
    .item-title{
        width:967px;
        height:18px;
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(34,34,34,1);
        margin-bottom: 19px;
        margin-left: 12px;
    }
    .item-Date{
        width:78px;
        height:11px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
        float: right;
        margin-right: 17px;
    }
    .item-content{
        padding-bottom: 12px;
        width:800px;
        /*height:33px;*/
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:20px;
        /*min-height: 33px;*/
        margin-left: 11px;
        word-break: break-all;
        height: 40px;
        overflow: hidden;
    }
    .bold{
        font-weight: bold;
        color:#000000

    }


    .hr{
        height: 1px;
        /*width: 100%;*/
        background-color: rgba(238,238,238,1);;
        margin-left: 12px;
        margin-right: 32px;
    }

    .more1{
        width:186px;
        height:44px;
        border:1px solid rgba(27,112,228,1);
        border-radius:4px;
        font-size: 18px;
        font-family:Source Han Sans CN;
        font-weight: 400;
        color: rgba(27,112,228,1);
        line-height: 44px;
        text-align: center;
        margin: 44px auto;
        cursor: pointer;
    }
    .more2{
        width:186px;
        height:44px;
        border:1px solid #8c939d;
        border-radius:4px;
        font-size: 18px;
        font-family:Source Han Sans CN;
        font-weight: 400;
        color: #8c939d;
        line-height: 44px;
        text-align: center;
        margin: 44px auto;
        pointer-events: none;
    }




</style>

