<template>
  <div id="father">
    <div class="subject-con">
      <p class="subject">IDC数据管理</p>
    </div>
    <!-- 顶部导航栏 -->
    <div class="nav">
      <ul class="nav-pills nav-justified">
        <li v-for="(item,i) in itemList" :key="i" :class="isSelect === item.id ? 'active' : ''" @click="getItem(i,item.name,item.url)"
          @mouseover="onmous($event)" @mouseout="mount($event)" onselectstart="return false">
          {{item.name}}</li>
      </ul>
    </div>
    <!---->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeClass: 0,
        onon: "just",
        user: 0,
        itemList:
          [
            { name: "产品介绍", url: "/idcproduct", id: 0 },
            { name: "案例分享", url: "/awaitwait", id:2},
            { name: "营销看板", url: "/marketingAwait",  id:3},
            { name: "赋能专区", url: "/idcenergy", id: 1 },
          ]
      }
    },
    computed: {

      isSelect: function () {
        return this.$route.name;
      }

    },
    created() {},
  
    methods: {

      getItem(i, item,url) {

         this.$router.push(url)
      },
      onmous(event) {
     
        if (event.currentTarget.className != "active") {
          event.currentTarget.className = this.onon
        }
      },
      mount(event) {
        if (event.currentTarget.className != "active") {
          event.currentTarget.className = ""
        }
      },


    }
  }
</script>
<style scoped>
  #father {
    width: 100%;

  }



  .subject-con {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
  }

  .subject-con .subject:before {
    display: inline-block;
    content: "";
    width: 4px;
    height: 16px;
    position: relative;
    top: 0px;
    background: #00a2ca;
    margin-top: 18px;
    margin-right: 15px;
    vertical-align: top;
  }

  .subject-con .subject {
    width: 1200px;
    margin: 0 auto;
    font-size: 16px;
    color: #00a2ca;
  }

  /*上方导航栏*/
  .nav {
    width: 100%;
    background: #f5f5f6;
  }

  .nav-justified {
    margin: 0 auto;
    width: 1200px;
  }

  .nav-justified>li {
    list-style-type: none;
    width: 25%;
    font-size: 15px;
    height: 40px;
    color: #23527c;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;

  }

  .active {
    color: #fff !important;
    background-color: #2db7f5;
    border: 1px solid #2db7f5 !important;
    cursor: pointer;

  }

  .just {
    color: #00a2ca !important;
    background-color: #EEEEEE;
    cursor: pointer;
  }

  .none-border-t {
    border-top: none !important;
    border-bottom: none !important;
  }

  button.btn-default {
    border: 1px solid #33cde5 !important;
    border-radius: 0px !important;
    height: 36px !important;
    line-height: 32px;
    padding: 0 31px 5px 31px !important;
    background: none !important;
    color: #33cde5 !important;
  }

  button.btn-default:active:focus {
    background: #33cde5 !important;
    border-color: #33cde5 !important;
    color: #fff !important;
  }

  button.btn-default:hover {
    background: #33cde5 !important;
    border-color: #33cde5 !important;
    color: #fff !important;
  }
</style>