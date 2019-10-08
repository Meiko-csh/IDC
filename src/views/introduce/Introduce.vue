<template>
    <div style="width:100%;overflow:hidden;">
        <div id="main_container" style="position:relative;width:100%;max-width:1920px;height:2600px;margin: 0 auto;">
            <div id="background_wrapper" style="width:100%;height:100%;z-index:-10;">
                <div id="banner_bk_wrapper" class="bk_wrapper" style="height:380px;">
                    <img id="banner_image" src="../../assets/img/introduce/banner.png" alt="" style="width:100%;min-height:600px;margin-top:-100px;" />
                </div>
                <div id="aims5_bk_wrapper" class="bk_wrapper" style="height:560px;">
                    <div id="aims5_bk_title_row">
                        <div id="aims5_bk_dark_block">
                            <div id="aims5_bk_square_black" />
                        </div>
                        <div id="aims5_bk_title_block" style="opacity:0.0;" :class="aims5_content_animation">
                            <div id="aims5_bk_title">
                                <label style="margin-left:30px;margin-right: 30px;">领航者计划</label><img src="../../assets/img/introduce/5.png"/><label style="margin-left:10px;">大目标</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="abilities6_bk_wrapper" class="bk_wrapper" style="height:550px;background:rgba(27,112,228,1);">
                    <div id="abilities6_bk_dark_block">
                        <div id="abilities6_bk_square_black" />
                    </div>
                </div>
                <div id="spawn_process_bk_wrapper" class="bk_wrapper" style="height:600px;" />
                <div id="" class="bk_wrapper" style="height: 574px;background:linear-gradient(90deg,rgba(31,75,206,0.1),rgba(59,228,251,0.1));" />
            </div>
            <div class="content_container">
                <div id="title_section">
                    <div class="head">
                        <h1 style="width:100%;height:45px;font-size:46px;font-weight:400;">中国联通5G应用创新联盟</h1>
                        <p style="width:100%;height:14px;font-size:18px;">ChinaUnicom 5G Applications Innovation Alliance</p>
                        <div class="vision">
                            <div style="position:absolute;left:100px;top:25px;">
                                <img src="../../assets/img/introduce/1.png"/>
                            </div>
                            <div style="position:absolute;left:140px;top:45px;">
                                <label id="vision_big_title">个愿景</label>
                            </div>
                            <div style="position:absolute;left:280px;top:44px;">
                                <i class="iconfont iconshichangqianjing icon_marketvision" />
                            </div>
                            <div style="position:absolute;left:370px;top:35px;">
                                <p class="vision_introduce">汇聚产业生态优势资源</p>
                                <p class="vision_introduce" style="margin-top:22.5px;">领航5G应用快速发展</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="aims5_section">
                    <div id="aims5_block">
                        <ListItems :items="aims5_itemlist1" :iconLeft="aims5_iconLeft" style="position:relative;left:130px;top:10px;opacity:0.0;" :class="aims5_content_animation" />
                        <ListItems :items="aims5_itemlist2" :iconLeft="aims5_iconLeft" style="position:relative;left:480px;top:-305px;opacity:0.0;" :class="aims5_content_animation" />
                    </div>
                </div>
                <div id="abilities6_section">
                    <div ref="abilities_row1" :class="['abilities_row', row1_animation]" style="top:200px;">
                        <RectangeBlockItem v-for="(item,index) in abilities_row1" :key="index" :config="item.config" :data="item.data" /> 
                    </div>
                    <div ref="abilities_row2" :class="['abilities_row', row2_animation]" style="top:390px;">
                        <RectangeBlockItem v-for="(item,index) in abilities_row2" :key="index" :config="item.config" :data="item.data" /> 
                        <div id="abilities6_title_block">
                            <img src="../../assets/img/introduce/6.png"/><label style="margin-left:25px;">大赋能</label>
                        </div>
                    </div>
                </div>
                <div id="spawn_process" class="spawn_process">
                    <label class="spawn_title">创新孵化流程</label>
                    <div id="spawn_timeline_image">
                        <img src="../../assets/img/introduce/introduceTimeLine.png" alt="" style="width:100%;" />
                    </div>
                    <div style="position:absolute;left:-240px;top:150px;" :class="circle_triangle1_animation">
                        <CircleTriangleItem ref="circle_triangle1" :config="circle_trangle1.config" :data="circle_trangle1.data" />
                    </div>
                    <div style="position:absolute;left:1200px;top:280px;" :class="circle_triangle2_animation">
                        <CircleTriangleItem ref="circle_triangle2" :config="circle_trangle2.config" :data="circle_trangle2.data" />
                    </div>
                </div>
                <div id="alliance_members" class="alliance_members">
                    <div style="width:100%;height:100%;position:absolute;top:100px;" :class="members_animation">
                        <label class="spawn_title">联盟成员</label>
                        <AllianceMembers style="position:relative;top:100px"/>
                    </div>
                </div>
            </div>
        </div>
        <page-footer />
    </div>
</template>
<script>
    import PageFooter from "../../components/portal/pageFooter/PageFooter"
    import ListItems from './childComps/ListItems'
    import AllianceMembers from '@/components/allianceMembers/AllianceMembers'
    import RectangeBlockItem from './childComps/RectangeBlockItem'
    import CircleTriangleItem from './childComps/CircleTriangleItem'
    export default {
        name: "Introduce",
        components: { PageFooter, ListItems, AllianceMembers, RectangeBlockItem, CircleTriangleItem },
        data() {
            return {
                aims5_content_animation : null,
                row1_animation : null,
                row2_animation : null,
                circle_triangle1_animation : null,
                circle_triangle2_animation : null,
                members_animation : null,
                aims5_itemlist1 : [
                    { key: 1, title: "打造200+ 5G 示范项目", iconName:"iconchanpin" },
                    { key: 2, title: "建立50+ 5G开放实验室", iconName:"iconshiyanshi" },
                    { key: 3, title: "孵化100+ 5G创新应用", iconName:"iconchanpin1" }
                ],
                aims5_itemlist2 : [
                    { key: 1, title: "制订20+ 5G应用标准", iconName:"iconyingyong" },
                    { key: 2, title: "聚合1000+成员单位", iconName:"iconchengyuan-selected" }
                ],
                aims5_iconLeft: true,
                abilities_row1 : [
                    {
                        config: {
                            width: '380px',
                            left: '0px',
                            top: '0px'
                        },
                        data: {
                            title: '网络和平台赋能',
                            p1: '5G+AI能力 | 边缘计算能力',
                            p2: '物联网使能平台能力 | 云网融合能力'
                        }
                    },
                    {
                        config: {
                            width: '380px',
                            left: '410px',
                            top: '0px'
                        },
                        data: {
                            title: '产品孵化赋能',
                            p1: '网络及产品开放测试 | 10000+测试终端',
                            p2: '200+高级专家支撑'
                        }
                    },
                    {
                        config: {
                            width: '380px',
                            left: '820px',
                            top: '0px'
                        },
                        data: {
                            title: '商业创新赋能',
                            p1: '商业模式联合创新研究中心',
                            p2: '1000+场次联合商业推广'
                        }
                    },
                ],
                abilities_row2: [
                    {
                        config: {
                            width: '278px',
                            left: '0px',
                            top: '0px'
                        },
                        data: {
                            title: '营销资源赋能',
                            p1: '全国四级营销网络',
                            p2: '60000+ 营销队伍'
                        }
                    },
                    {
                        config: {
                            width: '278px',
                            left: '317px',
                            top: '0px'
                        },
                        data: {
                            title: '创投资本赋能',
                            p1: '组织百亿级资金用于孵化5G项',
                            p2: '联合投资及运营'
                        }
                    },
                    {
                        config: {
                            width: '278px',
                            left: '624px',
                            top: '0px'
                        },
                        data: {
                            title: '服务支撑赋能',
                            p1: '5G创新中心',
                            p2: '20+专业子公司及产互公司'
                        }
                    }
                ],
                circle_trangle1: {
                    config: {
                        main_style: 'left:120px;top:150px;',
                        icon1_left: '100px;',
                        icon1_top: '21px;',
                        icon2_left: '30px;',
                        icon2_top: '135px;',
                        icon3_left: '168px;',
                        icon3_top: '135px;',
                        title1_left: '100px;',
                        title1_top: '-10px;',
                        title2_left: '-30px;',
                        title2_top: '155px;',
                        title3_left: '225px;',
                        title3_top: '155px;'
                    },
                    data: {
                        main_title: '铁三角机制',
                        icon1_name: 'iconchanpin',
                        icon2_name: 'iconzijin',
                        icon3_name: 'iconshichang',
                        title1: '产品',
                        title2: '资金',
                        title3: '市场'
                    }
                },
                circle_trangle2: {
                    config: {
                        main_style: 'left:830px;top:280px;',
                        icon1_left: '100px;',
                        icon1_top: '181px;',
                        icon2_left: '30px;',
                        icon2_top: '65px;',
                        icon3_left: '168px;',
                        icon3_top: '65px;',
                        title1_left: '100px;',
                        title1_top: '230px;',
                        title2_left: '-30px;',
                        title2_top: '65px;',
                        title3_left: '225px;',
                        title3_top: '65px;'
                    },
                    data: {
                        main_title: '一体化信息',
                        icon1_name: 'iconxiaoshouzhongxin',
                        icon2_name: 'iconxiaorentou',
                        icon3_name: 'iconshouhoucopy',
                        title1: '售中',
                        title2: '售前',
                        title3: '售后'
                    }
                }
            }
        },
        mounted() {
            if(false == this.queryScreenWidth()) {
                window.addEventListener('scroll', this.handleScroll)
                this.handleScroll()
            }
        },
        methods: {
            queryScreenWidth: function() {
                if(window.screen.width < 800) {
                    this.aims5_content_animation = "aims5_content_animation"
                    this.row1_animation = "row1_animation"
                    this.row2_animation = "row2_animation"
                    this.circle_triangle1_animation = "circle_triangle1_animation"
                    this.circle_triangle2_animation = "circle_triangle2_animation"
                    this.members_animation = "members_animation"
                    return true
                } else {
                    return false
                }
            },
            handleScroll: function() {
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let height = this.getClientHeight()
                let bottom = top + height

                if(bottom >= 630) {
                    if(this.aims5_content_animation == null) {
                        this.aims5_content_animation = "aims5_content_animation"
                    }
                }
                
                if(bottom >= 1160) {
                    if(this.row1_animation == null) {
                        this.row1_animation = "row1_animation"
                    }
                }
                
                if(bottom >= 1350) {
                    if(this.row2_animation == null) {
                        this.row2_animation = "row2_animation"
                    }
                }

                if(bottom >= 1800) {
                    if(this.circle_triangle1_animation == null) {
                        this.circle_triangle1_animation = "circle_triangle1_animation"
                    }
                }

                if(bottom >= 1880) {
                    if(this.circle_triangle2_animation == null) {
                        this.circle_triangle2_animation = "circle_triangle2_animation"
                    }
                }

                if(bottom >= 2330) {
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
            }
        }
    }
</script>
<style scoped>
    @keyframes aims5_content_fade {
        from { opacity: 0.0; }
        to   { opacity: 1.0; }
    }
    .aims5_content_animation {
        animation: aims5_content_fade 1.5s linear 0.25s forwards;
    }
    @keyframes abilities_row1_move {
        from { top: 200px; }
        to   { top: 100px; }
    }
    @keyframes abilities_row2_move {
        from { top: 390px; }
        to   { top: 290px; }
    }
    .row1_animation {
        animation: abilities_row1_move 1s ease-out 0s forwards;
    }
    .row2_animation {
        animation: abilities_row2_move 1s ease-out 0s forwards;
    }
    @keyframes circle_triangle1_move {
        from { left: -240px; }
        to   { left: 120px;  }
    }
    @keyframes circle_triangle2_move {
        from { left: 1200px; }
        to   { left: 840px;  }
    }
    .circle_triangle1_animation {
        animation: circle_triangle1_move 1s ease-out 0s forwards;
    }
    .circle_triangle2_animation {
        animation: circle_triangle2_move 1s ease-out 0s forwards;
    }
    @keyframes members_move {
        from { top: 100px; }
        to   { top: 0px; }
    }
    .members_animation {
        animation: members_move 1s ease-out 0s forwards;
    }
    .content_container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        max-width: 1200px;
    }
    .bk_wrapper {
        width: 100%;
        overflow: hidden;
    }
    #aims5_bk_title_row {
        background:rgba(27,112,228,1);
        height: 278px;
        position: relative;
        top: 175px;
        right: 58%;
        left: auto;
        overflow: hidden;
        z-index: 100;
    }
    #aims5_bk_dark_block {
        background: rgba(255,255,255,0);
        width: 1200px;
        height: 100%;
        float: right;
        margin-right: 300px;
    }
    #aims5_bk_square_black {
        background: rgba(27,36,228,1);
        border-radius: 50px;
        opacity: 0.3;
        width: 1920px;
        height: 1920px;
        transform:  translateX(-1100px) translateY(-825px) rotate(45deg);
    }
    #aims5_bk_title_block {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    #aims5_bk_title {
        width: 485px;
        height: 100%;
        float: right;
        display: flex;
        align-items: center;
    }
    #aims5_bk_title label {
        font-size:36px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
    }
    #abilities6_bk_dark_block {
        background: rgba(255,255,255,0);
        width: 1200px;
        height: 100%;
        margin-left: 50%;
    }
    #abilities6_bk_square_black {
        background: rgba(27,36,228,1);
        border-radius: 50px;
        opacity: 0.3;
        width: 1920px;
        height: 1920px;
        transform:  translateX(380px) translateY(-685px) rotate(45deg);
    }
    #title_section {
        margin: 0 auto;
        width: 100%;
        height: 380px;
    }
    #title_section .head {
        position: absolute;
        top: 140px;
        left: 0px;
        width: 100%;
        text-align: center;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:#fff;
        line-height:30px;
        z-index: 10;
    }
    #title_section .head .vision {
        width:683px;
        height:120px;
        background:rgba(255,255,255,1);
        box-shadow:0px 10px 30px 0px rgba(31,75,206,0.3);
        border-radius:10px;
        position: relative;
        margin: auto;
        bottom: -90px;
    }
    .icon_marketvision {
        font-size: 60px;
        color:rgba(31,75,206,1);
    }
    #vision_big_title {
        font-size:36px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(27,112,228,1);
        line-height:22px;
    }
    .vision_introduce {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(32,32,32,1);
        line-height:6px;
        text-align: left;
    }
    #aims5_section {
        display: block;
        width: 100%;
        height: 560px;
    }
    #aims5_section #aims5_block {
        width: 806px;
        height: 360px;
        position: relative;
        top: 130px;
        margin-bottom: auto;
        overflow: hidden;
        float: right;
        background:rgba(255, 255, 255, 1);
        box-shadow:0px 0px 30px 0px rgba(27,112,228,0.16);
    }
    #abilities6_section {
        display: block;
        position: relative;
        width: 100%;
        height: 550px;
    }
    .abilities_row {
        width: 100%;
        height: 160px;
        position: absolute;
    }
    #abilities6_title_block {
        position: absolute;
        left: 960px;
        top: 0px;
        width: 240px;
        height: 160px;
        display: flex;
        align-items: center;
    }
    #abilities6_title_block label {
        font-size:36px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:18px;
    }
    .spawn_process {
        display: block;
        position: relative;
        width: 100%;
        height: 600px;
        text-align: center;
    }
    .spawn_title {
        position: relative;
        width: 100%;
        top: 40px;
        font-size:32px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:30px;
    }
    #spawn_timeline_image {
        position: absolute;
        left: 0%;
        top: 10%;
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;
        z-index: -10;
    }
    .alliance_members {
        display: block;
        width: 100%;
        height: 574px;
        overflow: hidden;
        text-align: center;
        position: relative;
    }
</style>
