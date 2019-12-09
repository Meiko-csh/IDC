<template>
    <div class='processHome'>
      <ProcessTop :list='headList' @click_proHead='clickHead'></ProcessTop>
      <div class="content">
         <ProcessBar :msg='list' @clickBar='slectBar'></ProcessBar>
         <div v-if="showBar == 0" class="modelPro">
           <div class="buttons">
            <input @click="newProcess" type="button" value="新建流程">
            <input type="button" value="查询">
            <input type="text" placeholder="请输入关键字">
          </div>
          <div class="cards">
            <div v-for="item in proArry" :key="item" class="processCard">
              <div class='titleImg'>

              </div>
              <div class="proName">
                <span>{{item}}</span>
              </div>
              <i class="iconfont icon-bianji_line_lightblue"></i>
              <i class="iconfont icon-shanchu_line"></i>
            </div>
          </div>
         </div>
         <div v-if='showBar == 1' class='outerPro'>
           暂无页面
         </div>
         <div v-if='showBar == 2' class="baseSet">
           <div class="setManage">
             <div class="setTitle">
               <p>常用审批意见管理</p>
               <i>设置</i>
             </div>
             <div class="li">
               <span v-for="(item,index) in inBtn" :key='index' class="lis">{{item}}</span>
             </div>
           </div>
           <div class="setManage">
             <div class="setTitle">
               <p>结束事件管理</p>
               <i>设置</i>
             </div>
             <div class="li">
               <span v-for="(item,index) in endBtn" :key='index' class="lis">{{item}}</span>
             </div>
           </div>
           <div class="table">
              <div class="addstep">
                  <span v-if="true">流程步骤</span>
                  <aloneButton class="fr" @listenBtn='addtple' :param="aloneList"></aloneButton>
                  <!-- <input type="button" value="添加步骤"> -->
              </div>
              <i-table 
                  :height='tableH'
                  :columns="columns1"
                  :data="tableList">
              </i-table>
          </div>
         </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
        headList:[],
        proArry:['天上的龙','地下的驴','海底的龟','森林的虎','山上的树','草丛的花'],
        list:['模板流程','外链流程','基本配置'],
        showBar: 0,
        inBtn: ['同意','已阅','已阅'],
        endBtn: ['完成','驳回','撤销','通过后撤销'],
        tableH: 'auto',
        aloneList:[
                '','添加模板'
            ],
        stopArry: ['步骤模板1'], //放停用的数组
        columns1: [
            {
                title: '模板名称',
                key: 'tplname',
                align:"center",
                width: 180,
            },
            {
                title: ' ',
                key: 'a',
                align:"left",
                width: 'auto',
                render:(h,params)=>{
                  let stop = 0;
                  let index = this.stopArry.indexOf(params.row.tplname);
                  if(index == -1){
                    stop = 0;
                  }else {
                    stop = 1;
                  }
                  if(stop){
                    return h('span',{
                          style:{
                              display: 'inline-block',
                              width: '66px',
                              height: '25px',
                              cursor: 'pointer',
                              color: '#696A6A',
                              border: '1px solid #DADCE0',
                              lineHeight: '24px',
                              textAlign: 'center',
                              marginLeft: '-42px'
                          }
                      },'已停用')
                  }
                }
            },
            {
                title: '操作',
                key: 'operation',
                align:"center",
                width: 160,
                render:(h,params)=>{
                  let stop = '';
                  let index = this.stopArry.indexOf(params.row.tplname);
                  if(index == -1){
                    stop = '停用';
                  }else {
                    stop = '启用';
                  }
                    return h('div',
                    [
                        h('span',{
                            style:{
                                display: 'inline-block',
                                width: '38px',
                                height: '20px',
                                cursor: 'pointer',
                            },
                            attrs:{
                                class: 't_dlte',
                            },
                            on: {
                                click:(e,q) =>{
                                  // console.log(params,params.row.tplname)
                                  if(index == -1){
                                    this.stopArry.push(params.row.tplname)
                                  }else {
                                    this.stopArry.splice(index,1)
                                  }
                                }
                            }
                        },stop),
                        h('span',{
                            style:{
                                display: 'inline-block',
                                width: '38px',
                                height: '20px',
                                cursor: 'pointer',
                            },
                            attrs:{
                                class: 't_dlte',
                            },
                            on: {
                                click:(e) =>{
                                    this.tableList.splice(params.index,1);
                                    this.changeH();
                                    let index = this.stopArry.indexOf(params.row.tplname);
                                    if(index == -1){
                                      
                                    }else {
                                      this.stopArry.splice(index,1)
                                    }
                                    if(e.preventDefault){
                                        e.stopPropagation();
                                    }else{
                                        window.event.returnValue == false;
                                    }
                                }
                            }
                        },'删除')
                    ])
                }
            }
        ],
        tableList:[],
      }
  },
  methods:{
    clickHead(i){
      console.log(i,'父级输出的i')
    },
    slectBar(i){  //切换tab栏
          this.showBar = i;
    },
    changeH(){  // 删除后 改变table高度
        if(this.tableList.length <=10){
            this.tableH = 'auto'
        }
    },
    addtple(){  //添加模板
        this.tableList.push({
            tplname: '步骤模板' + Math.round(50+Math.random()*100),
            operation: [''],
        })
        this.$nextTick(
            () => {
                // console.log(this.tableList.length)
                if(this.tableList.length >10){
                    // console.log(this.tableList.length)
                    this.tableH = '520';
                }
            }
        )
        // console.log('添加模板')
    },
    newProcess(){   //跳转新建流程
      this.$router.push({
        path: '/processAdd',
        query: {}
      })
    }
  },
  mounted(){
      // 获取到模板数量并渲染
        for(var i=1; i<6; i++){
            this.tableList.push({
                tplname: '步骤模板' + i,
                operation: ['删除','delete'],
            })
        }
        //当 模板数量大于10个时 出现滚动条
        if(this.tableList.length >10){
            // console.log(this.tableList.length)
            this.tableH = '520';
        }
  }
}
</script>
<style lang="less" scoped>
.processHome{
  background: #F5F5F6;
  overflow: hidden;
}
.content{
  margin: 13px auto 40px auto;
  width: 1026px;
  height: auto;
  background: #FFFFFF;
  overflow: hidden;
  .modelPro{
    height: 608px;
    .buttons{
      margin: 0 100px 0 100px;
      padding: 17px 0 12px 0;
      height: auto;
      font-size: 14px;
      overflow: hidden;
      input{
        float: right;
        font-size: 14px;
        height: 32px;
        outline: none;
        transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      }
      input[type='button']{
        width: 87px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #33CDE5;
        color: #33CDE5;
        background: #FFFFFF;
      }
      input[type='button']:hover{
        color: #FFFFFF;
        background: #33CDE5;
      }
      input[type='button']:nth-child(2){
        color: #73777A;
        border-color: #73777A;
        margin-right: 17px;
      }
      input[type='button']:nth-child(2):hover{
        color: #FFFFFF;
        background: #73777A;
      }
      input[type='text']{
        width: 157px;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #E8E8E8;
        margin-right: 22px;
        border-radius:2px;
      }
      input[type='text']:hover,
      input[type='text']:focus{
        border-color: #00c1de !important;
        // 以渐进增强的写法对各个浏览器进行box-shadow样式兼容
        -webkit-box-shadow: 0 0 2px #00c1de;
        -moz-box-shadow: 0 0 2px #00c1de;
        -ms-box-shadow: 0 0 2px #00c1de;
        -o-box-shadow: 0 0 2px #00c1de;
        box-shadow: 0 0 2px #00c1de;
      }
      input[type='text']::placeholder{
        color: #C9C9C9;
      }
    }
    .cards{
      width: 862px;
      margin: 0 auto;
      height: auto;
      overflow: hidden;
      .processCard{
        width: 179px;
        height: 94px;
        border: 1px solid #DADCE0;
        margin: 20px 18px 7px 18px;
        float: left;
        transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        position: relative;
        cursor: pointer;
        .titleImg{
          width: 46px;
          height:46px;
          border-radius: 50%;
          background: #00c0deea;
          position: absolute;
          top: 17px;
          left: 14px;
        }
        .proName{
          width: 100px;
          height: 30px;
          // border: 1px solid red;
          position: absolute;
          top: 30px;
          left: 69px;
          span{
            font-size: 16px;
            color: #373D41;
          }
        }
        .icon-bianji_line_lightblue{
          width: 16px;
          height: 16px;
          // border: 1px solid #00c0de;
          position: absolute;
          top: 66px;
          left: 16px;
          color: #00A2CA;
        }
        .icon-shanchu_line{
          width: 16px;
          height: 18px;
          // border: 1px solid #73777A;
          position: absolute;
          top: 66px;
          left: 40px;
        }
      }
      .processCard:hover{
        border-color: #33CDE5;
        -webkit-box-shadow: 0 0 3px #00c0deea;
        -moz-box-shadow: 0 0 3px #00c0deea;
        -ms-box-shadow: 0 0 3px #00c0deea;
        -o-box-shadow: 0 0 3px #00c0deea;
        box-shadow: 0 0 3px #00c0deea; 
      }
    }
  }
  .outerPro{
    height: 608px;
    margin: 30px auto;
    width: 828px;
  }
  .baseSet{
    padding-bottom: 50px;
    .setManage{
      margin: 0 auto;
      width: 828px;
      overflow: hidden;
      .setTitle{
        p{
          display: inline-block;
          color: #373D41;
          margin: 30px 17px 16px 0;
          font-weight: 400;
          font-size: 14px;
        }
        i{
          color: #00A2CA;
          cursor: pointer;
          font-size: 14px;
        }
      }
      .li{
        .lis{
          font-size: 14px;
          border: 1px solid #DADCE0;
          color: #686969;
          display: inline-block;
          width: 66px;
          height: 25px;
          line-height: 24px;
          text-align: center;
          margin: 5px 17px 5px 0;
          cursor: pointer;
        }
        .lis:nth-child(4){
          width: 117px;
        }
      }
    }
    .table{
        width: 828px;
        height: auto;
        margin: auto;
        margin-top: 21px;
      .addstep{
          margin-top: 8px;
          margin-bottom: 7px;
          overflow: hidden;
          span{
              font-size: 14px;
              color: #373D41;
              font-weight: 400;
          }
          input[type='button']{
              width: 87px;
              height: 32px;
          }
      }
    }
  }
}
</style>
<style lang="less">
.processHome{
    .ivu-table-header thead tr th{
        border: 0 !important;
    }
    .ivu-table-tbody .ivu-table-row{
        height: 50px;
        .t_dlte:hover{
            color: #00C1DE;
        }
        td{
          vertical-align: middle;
        }
        .ivu-table-column-left .ivu-table-cell{
          overflow: visible;
        }
    }   
}
</style>
