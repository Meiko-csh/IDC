<template>
  <div id="headerFirstRow" class="bottom-border-gray row p-l p-r">
    <div class="logo-class" style="display: inline-block;float: left">
      <img id="intelligenceImageId" src="@/assets/img/home/logo.png"/>
    </div>
    <a id="logoutBtn" style="float: right;margin: 0 5px 0 5px;" href="javascript:;" @click="logOutClick">
      <span class="iconfont icon-tuichu iconfont-menu-right"></span>
      注销
    </a>
    <a id="personCentre" style="float: right;margin: 0 0 0 5px;" href="javascript:;" @click="personCentreClick">
      <span class="iconfont icon-gerenzhongxin1 iconfont-menu-right"></span>
      个人中心
    </a>
    <a id="userManual" style="float: right;margin: 0 0 0 -7px;" href="">
      <span class="iconfont icon-zuzhushouce iconfont-menu-right"></span>
      用户手册
    </a>
    <div id="ESdiv">
      <input id="ESInput" placeholder="搜索">
      <i id="ESInputIcon" class="icon iconfont icon-xiazai5"></i>
      <ul id="keywordRecommendUL"></ul>
    </div>
  </div>
</template>
<script>

  export default {
    name:'LoginInfoBar',
    props:{

    },
    data(){
      return {

      }
    },
    methods:{
      ESInputInit(){
        let that = this;
        //width自动伸缩的动画
        $("#ESInput").on("focus mouseenter",function () {
          $(this).stop(true,true).animate({
            "width": "280px"
          }).css({
            "border": "1px solid #00c1de"
          });
          $("#keywordRecommendUL").show();
        }).on("blur",function () {
          $(this).stop(true,true).animate({
            "width": "180px"
          }).css({
            "border": "0"
          });
          $("#keywordRecommendUL").hide();
        }).on("mouseout",function () {
          if($(this).is(':focus')){
            return;
          }
          $(this).stop(true,true).animate({
            "width": "180px"
          }).css({
            "border": "0"
          });
          $("#keywordRecommendUL").hide();
        });

        $("#ESInput").on("keyup",function (e) {
          if(e.keyCode==13){
            $("#ESInputIcon").trigger("click");
          }else {
            var keyword=$("#ESInput").val();
            var params = {
              "keyword": keyword,
            };
            console.log(keyword);
            console.log(that);
            that.$request({
              method:'post',
              url: '/kapply/elasticsearchSearch/keywordRecommend',
              headers: {
                'Content-Type': "application/json;charset=utf-8"
              },
              data: {
                "keyword":keyword
              }
            }).then(function (res) {
              console.log(res);
            }).catch(function (error) {
              console.log(error);
            })
          }
        });

        $("#ESInputIcon").on("click",function () {
          var keyword=encodeURIComponent(encodeURIComponent($("#ESInput").val()));
          var targetUrl = encodeURIComponent(encodeURIComponent(process.env.VUE_APP_SERVER_HOST+"kapply/elasticsearchSearch/toSearch?keyword="+keyword));
          window.open(process.env.VUE_APP_SERVER_HOST+'kapply/abilityLibHome/newPage?url='+targetUrl,"_blank");
        });
        $("#ESdiv").on("mousedown", ".keywordRecommendName", function () {
          $("#ESInput").val($(this).data("keyword"));
          $("#ESInputIcon").trigger("click");
        });
      },
      logOutClick(){
        let that = this;
        that.$request({
          type:'get',
          url:'/kapply/auth/user/delLoginCookie',
          params:{},
        }).then(function (res) {
          console.log(res);
          // document.cookie = "loginToken" + "=" + "" + "; " + "-1" + "; path=/";
          // window.location.href = "/";
        }).catch(function (err) {
          console.log(err);
          console.log("退出登录请求后台失败");
          // document.cookie = "loginToken" + "=" + "" + "; " + "-1" + "; path=/";
          // window.location.href = "/";
        });
      },
      personCentreClick(){
        // var targetUrl = encodeURIComponent(encodeURIComponent(process.env.VUE_APP_SERVER_HOST+"personal/center"));
        // window.open(AbLib.ctxPath+'abilityLibHome/newPage?url='+targetUrl,"_self");
      },

    },
    mounted(){
      this.ESInputInit();
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
  a:hover{
    color: #00c1de;
  }
  .row {
    display:block;
    margin-right: -15px;
    margin-left: -15px;
  }
  .p-r {
    padding-right: 15px;
  }
  .p-l {
    padding-left: 15px;
  }
  #headerFirstRow {
    line-height: 40px;
    height: 41px;
  }
  .bottom-border-gray {
    border-bottom: 1px solid hsla(0,0%,100%,.15);
  }
  .logo-class {
    display: inline-block;
    float: left;
    text-align: center;
    line-height: 38px;
    padding-right: 10px;
    padding-left: 10px;
    cursor: pointer;
  }

  .logo-class img {
    width: 100px;
  }

  /*大搜索样式css*/
  #ESdiv {
    position: relative;
    /* width: 106px; */
    float: right;
    background: hsla(0,0%,100%,.12);
    font-size: 0;
    margin-right: 10px;
    height:40px;
  }

  #ESInput {
    background: transparent;
    height: 40px;
    padding-left: 10px;
    padding-right: 30px;
    color: #fff;
    width: 180px;
    font-size:12px;
    border:0;
  }

  #ESInputIcon {
    position: absolute;
    right: 10px;
    color: #ccc;
    cursor: pointer;
    overflow: inherit;
  }

  #keywordRecommendUL {
    display: none;
    background: hsla(0,0%,100%,.12);
    background-color: #1E1D22;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  #keywordRecommendUL:hover {
    background-color: #000;
  }

  .keywordRecommendLI {
    text-align: left;
    height: 35px;
    line-height: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    width: 100%;
  }

  .keywordRecommendLI:hover {
    background: hsla(0,0%,100%,.12);
  }

  .keywordRecommendLI:hover>.keywordRecommendName{
    color: #00c1de !important;
  }

  .keywordRecommendName {
    color: #fff;
    line-height: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    padding-left: 10px;
  }

  /*大搜索样式css------------结束*/

  .bottom-border-gray {
    border-bottom: 1px solid hsla(0,0%,100%,.15);
  }

  #headerFirstRow {
    line-height: 40px;
  }

  .iconfont-menu-right {
    color: #fff;
    padding-right: 5px;
    padding-left: 7px;
    /*vertical-align: -1px;*/
    font-size: 14px;
  }
  #personCentre:hover .iconfont-menu-right{
    color: #00c1de;
  }
  #logoutBtn:hover .iconfont-menu-right{
    color: #00c1de;
  }
  #userManual:hover .iconfont-menu-right{
    color: #00c1de;
  }

</style>
