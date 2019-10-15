<template>
  <!-- 头部 -->
  <div class="header bottom-border-gray navbar-default" style="padding: 0 15px 0 15px;">
    <!-- 导航部分 -->
    <div class="nav-bar clearfix">
      <login-info-bar></login-info-bar>
      <ul class="p-l nav-main clearfix fl" id="libMenuId">
        <li class="nav-item" id="homeMenuId" data-id="home">
          <a :href="homeUrl">首页</a>
        </li>
        <li class="nav-item" id="fivegenerationMenuId" data-id="fivegeneration">
          <a :href="fiveGUrl" >5G<sup>n</sup>创新</a>
        </li>
        <li class="nav-item-dropdown">
          <a class="nav-item-dropdown-a">内容库</a>
          <ul class="nav-item-dropdown-ul clearfix">
            <li class="nav-item" id="productMenuId" data-id="product">
              <a :href="productUrl" >重点产品</a>
            </li>
            <li class="nav-item" id="planMenuId" data-id="plan">
              <a :href="planMenuUrl" >解决方案</a>
            </li>
            <li class="nav-item" id="expertMenuId" data-id="expert">
              <a :href="expertMenuUrl" >专家人才</a>
            </li>
            <li class="nav-item" id="caseMenuId" data-id="case">
              <a :href="caseMenuUrl" >投标合同</a>
            </li>
            <li class="nav-item" id="busiCaseMenuId" data-id="busiCase">
              <a :href="busiCaseMenuUrl" >业务案例</a>
            </li>
            <li class="nav-item" id="intelligenceMenuId" data-id="intelligence">
              <a :href="intelligenceMenuUrl" >资质证件</a>
            </li>
          </ul>
        </li>
        <li class="nav-item-dropdown" style="">
          <a class="nav-item-dropdown-a">支撑流程</a>
          <ul class="nav-item-dropdown-ul clearfix">
            <li class="nav-item" id="clueMenuId" data-id="clue">
              <a :href="clueMenuUrl" >线索录入</a>
            </li>
            <li class="nav-item" id="inneroppoMenuId" data-id="inneroppo">
              <a :href="inneroppoMenuUrl" >商机录入</a>
            </li>
            <li class="nav-item" id="oppoMenuId" data-id="oppo">
              <a :href="oppoMenuUrl" >跨省支撑</a>
            </li>
            <li class="nav-item" id="aioppoMenuId" data-id="aioppo" style="padding-left:8px">
              <a :href="aioppoMenuUrl"  style="white-space: nowrap">AI需求支撑</a>
            </li>
          </ul>
        </li>
        <li class="nav-item" id="knowledgeMenuId" data-id="knowledge">
          <a :href="knowledgeMenuUrl" >头条资讯</a>
        </li>
        <li class="nav-item" id="displayMenuId" data-id="display">
          <a :href="displayMenuUrl" >演示专区</a>
        </li>
        <li class="nav-item" id="excavateMenuId" data-id="excavate">
          <a :href="excavateMenuUrl" >招标讯息</a>
        </li>
        <li class="nav-item" id="videoMenuId" data-id="video">
          <a :href="videoMenuUrl">视频学习</a>
        </li>
        <li class="nav-item" id="statisticsMenuId" data-id="statistics">
          <a :ref="statisticsMenuUrl" v-show="showStatisticsShow">统计展示</a>
        </li>
        <li class="nav-item" id="authorizationMenuId" data-id="authorization">
          <a :href="authorizationMenuUrl" v-show="ShowAuthorization">授权管理</a>
        </li>
        <li class="nav-item" id="showCompetitionMenuId" data-id="competition">
          <a :href="showCompetitionMenuUrl" v-show="showCompetition">双线争锋</a>
        </li>
        <li class="nav-item" id="showskipMenuId" data-id="showskip">
          <a :href="showskipMenuUrl" v-show="showSkip">商机积分补录</a>
        </li>
        <li class="nav-item" id="workplatformMenuId" data-id="workplatform">
          <a :href="workplatformMenuUrl">
            工作台
            <span class="badgeWrapper"><span id="taskcount" class="badge hidden-ab"></span></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import LoginInfoBar from './loginInfoBar/LoginInfoBar';
  export default {
    name:'MyNavBar',
    data(){
      return{
        homeUrl:process.env.VUE_APP_SERVER_HOST+'kapply/abilityLibHome/home',
        fiveGUrl:process.env.VUE_APP_SERVER_HOST+'kapply/fiveGen/fiveGenPortal',
        productUrl:process.env.VUE_APP_SERVER_HOST+'kapply/keditProductHomePageController/getProductHomePage',
        planMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/keditPlanHomePageController/getPlanHomePage',
        expertMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/keditProfHomePage/getProfPage',
        caseMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/kapplyInfoController/getCasePage?storageFlag=0',
        busiCaseMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/kapplyInfoController/getBusiCasePage?storageFlag=0',
        intelligenceMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/kapplyInfoController/getAptitudePage?storageFlag=0',
        clueMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/abilityLibHome/clue',
        inneroppoMenuUrl:process.env.VUE_APP_SERVER_HOST+'oppo/procreate',
        oppoMenuUrl:process.env.VUE_APP_SERVER_HOST+'oppo/createOppo',
        aioppoMenuUrl:process.env.VUE_APP_SERVER_HOST+'oppo/createOppoAI',
        knowledgeMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/keditKnowHomePage/hotNewsPath ',
        displayMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/displayHomePage ',
        excavateMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/kesBusiHomePage/getBusiPage',
        videoMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/',//视频学习
        statisticsMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/statisticsHomePage',
        authorizationMenuUrl:process.env.VUE_APP_SERVER_HOST+'kapply/auth/authorization/manage',
        showCompetitionMenuUrl:process.env.VUE_APP_SERVER_HOST+'compController/compPcUpload',
        showskipMenuUrl:process.env.VUE_APP_SERVER_HOST+'klog/business/showSkip',
        workplatformMenuUrl:process.env.VUE_APP_SERVER_HOST+'task/tasks/workplatform',

        showStatisticsShow:false,
        ShowAuthorization:false,
        showCompetition:false,
        showSkip:false
      }
    },
    components:{
      LoginInfoBar
    }
  }
</script>
<style scoped>
  div {
    color: inherit;
  }
  a {
    font-size: 12px;
    color: #fff;
    text-decoration: none!important;
  }
  .bottom-border-gray {
    border-bottom: 1px solid hsla(0,0%,100%,.15);
  }
  .navbar-default {
    background-color: #1E1D22;
    width: 100%;
    position: fixed;
    z-index: 999;
  }
  .clearfix {
    zoom: 1;
  }
  .p-l {
    padding-left: 15px;
  }

  .fl {
    display: inline;
    float: left;
  }
  ul{
    list-style: none;
    margin-bottom: 0;
  }
  /*导航栏开始*/
  .nav-bar {
    margin: auto;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
  }

  .nav-bar .nav-main .nav-item:first-child {
    padding-left: 0px;
  }

  .nav-bar .nav-main {
    height: 50px;
  }

  .nav-bar .nav-main .nav-item-dropdown-ul .nav-item:first-child {
    padding: 0 15px;
  }

  .nav-bar .nav-main .nav-item {
     float: left;
     padding: 0 15px;
     /*height: 50px;*/
   }

  .nav-bar .nav-main .nav-item-dropdown {
    float: left;
    padding: 0;
    width: 86px;
  }

  .nav-bar .nav-main .nav-item-dropdown > a,
  .nav-bar .nav-main .nav-item > a {
    color: #fff;
    /*font-size: 16px;*/
    font-size: 14px;
  }

  .nav-bar .nav-main .nav-item:hover > a,
  .nav-bar .nav-main .nav-item.active > a,
  .nav-bar .nav-main .nav-item:hover > a > sup,
  .nav-bar .nav-main .nav-item.active > a > sup,
  .nav-bar .nav-main .nav-item-dropdown:hover > a,
  .nav-bar .nav-main .nav-item-dropdown.active > a {
    color: #00c1de;
    text-decoration: none;
  }

  .nav-bar .nav-main .nav-item > a > sup,
  .nav-bar .nav-main .nav-item > a > sup{
    color: #FFF
  }

  .nav-item,
  .nav-item-dropdown {
    position: relative;
  }

  .nav-item-dropdown-ul {
    background-color: #000;
    margin: 0;
    display: none;
  }

  .nav-item-dropdown:hover .nav-item-dropdown-ul {
    display: block;
  }

  .nav-item-dropdown:hover {
    background-color: #000;
  }

  .nav-item-dropdown-a {
    cursor: default;
  }

  .nav-item-dropdown-a .iconfont{
    color: #fff;
    padding-left: 3px;
    font-size: 13px;
  }

  .nav-item-dropdown:hover .icon-shang {
    color: #00c1de;
  }

  .nav-item-dropdown:hover .icon-shang,
  .nav-item-dropdown .icon-xia {
    display: inline;
  }

  .nav-item-dropdown .icon-shang,
  .nav-item-dropdown:hover .icon-xia {
    display: none;
  }

  .nav-bar .action-btn {
    position: relative;
    width: 100px;
    border-left: 1px solid #52585b;
    z-index: 1000;
  }

  .nav-bar .action-btn:hover {
    background-color: #00c1de;
  }

  .nav-bar .action-btn:hover .drop-menu {
    display: block;
    padding: 10px 0 20px;
    height: inherit;
  }

  .nav-bar .action-btn > a,
  .nav-bar .action-btn > a:hover {
    display: block;
    height: 100%;
    color: #fff;
  }
  .nav-bar .action-btn .drop-menu {
    display: none;
    position: absolute;
    top: 50px;
    right: 0;
    width: 130px;
    height: 0;
    background: rgba(0, 0, 0, .6);
    text-align: left;
    font-size: 0;
    overflow: hidden;
    transition: all 1s ease-in;
  }

  .nav-bar .action-btn .drop-menu .menu-item {
    float: left;
    width: 50%;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    vertical-align: top;
  }
  /*导航栏结束------*/

</style>
