<!--
上传插件使用说明:
1. 实现功能：
   本插件为Vue附件上传组件，可以实现上传，下载，预览，删除功能
2. 实现功能：
 （1）参数传入：
    1. 先在父组件中引入该组件并注册：
    <script>
      const uploadComponent = () =>
        import("../../../components/upload/uploadComponent");
        ...
        export default {
          name:'...',
          components:{
            uploadComponent
          }
        ...
        }
    </script>
    引入路径根据实际项目自行更改
    2. 定义参数并传给该模块：
    <uploadComponent :msg="attachmentConfig"></uploadComponent>

    export default {
      data(){
        return{
          attachmentConfig:{
            deltoggle: true,
            viewtoggle: true,
            downloadtoggle: true
            ...
          }
        }
      }
    }
    将实现的参数放到任意对象中，然后在实现组件的标签上使用:msg='对象名'来实现传参，其中对象名可以为任意符合规则的命名，但必须与:msg后边的命名保持一致，实现功能的参数必须按照规则进行填写；
  （2）数据导出：
    1.数据的接收：
    <uploadComponent @transdata="getdata" @transimgdata="getimgdata"></uploadComponent>
    在父组件上使用@transdata="..."和@transimgdata="..."来获得子组件传的值，其中transdata是一般附件的相关数据，transimgdata是图片附件的相关数据，引号内内容可以自定义但接口必须保持一致
    2.数据的使用：
    export default {
      data(){
        dt:[],
        imgdt:[]
      },
      ...
      methods: {
        getdata(msg) {
          this.data = msg;
        },
        getimgdata(msg) {
          this.imgdata = msg;
        }
      }
    }
    先在父元素的methods中定义两个函数，函数名应与1中父组件中引号内定义的内容保持一致
    然后用形参将得到的值付给data中对应的参数
  （3）功能：
    deltoggle|boolean 选择是否显示删除按钮，默认值true
    viewtoggle|boolean 选择是否显示预览按钮，默认值true
    downloadtoggle|boolean 选择是否显示下载按钮，默认值为true
    uploadconfig|Array 上传文件参数：
    ————infoId：上传文件的编号，默认值为null，当该属性为数字时，为回显附件，为null时为新上传附件
    ————infoType：上传文件所属分类，默认值IDCProduct
    single|boolean 是否为单附件上传，默认值为true
    filelength|Number 批量上传附件长度，默认值为Infinity,当single为false的时候，该属性生效
    onlyimg|boolean 是否只能传图片，默认值为false
    onlyfile|boolean 是否只能传附件，默认值为false
-->

<template>
  <div class="fileUpload">
    <!-- <div>{{uploadconfig[0].infoId}}+{{uploadconfig[0].infoType}}。。。</div> -->
    <i-button type="default" icon="ios-cloud-upload-outline" @click="uploadclk()">上传文件</i-button>
    <input
      type="file"
      ref="Upload"
      name="files"
      multiple="multiple"
      v-show="false"
      @change="fileUpload('Upload',uploadconfig.infoId,uploadconfig.infoType)"
    />
    <div class="attachShow" v-if="frameshow">
      <div class="attachShowPart" v-for="(item,i) in dt" :key="'upload'+i">
        <i :class="['iconfont',icon]"></i>
        <span class="files-represont-group">
          <a href="javascript:void(0)" :title="dt[i].nameCh">{{dt[i].nameCh}}</a>
          <a href="javascript:void(0)">{{dt[i].fileSize}}KB</a>
        </span>
        <div class="upBtns">
          <i class="iconfont icon-yanjing" @click="showView(dt[i].flowId)" v-show="viewtoggle"></i>
          <i class="iconfont icon-xiazai" @click="download(dt[i].flowId)" v-show="downloadtoggle"></i>
          <i
            class="iconfont icon-shanchu"
            @click="delAttach('sysAddAttch',dt[i].flowId,'1','OppoIntegralTemplate')"
            v-show="deltoggle"
          ></i>
        </div>
      </div>
    </div>
    <div class="imageShow" v-if="imageshow">
      <div class="imgpart" v-for="(item,i) in dtimg" :key="'img'+i">
        <img :src="'/auth/attachment/download?id='+ dtimg[i].flowId" alt />
        <!-- <i :class="['iconfont',icon]"></i>
        <span class="files-represont-group">
          <a href="javascript:void(0)" :title="dtimg[i].nameCh">{{dtimg[i].nameCh}}</a>
          <a href="javascript:void(0)">{{dtimg[i].fileSize}}KB</a>
        </span>
        <div class="upBtns">
          <i class="iconfont icon-yanjing" @click="showView(dtimg[i].flowId)" v-show="viewtoggle"></i>
          <i
            class="iconfont icon-xiazai"
            @click="download(dtimg[i].flowId)"
            v-show="downloadtoggle"
        ></i>-->
        <!-- </div> -->
        <i
          class="iconfont icon-guanbi"
          @click="delAttach('sysAddAttch',dtimg[i].flowId,'1','OppoIntegralTemplate')"
          v-show="deltoggle"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadComponent",
  data() {
    return {
      //数据接收
      dt: [],
      dtimg: [],
      //附件显示框判断
      frameshow: false,
      imageshow: false,
      //参数配置
      deltoggle: true,
      viewtoggle: true,
      downloadtoggle: true,
      icon: "icon-wenjian1",
      uploadconfig: {
        infoId: null,
        infoType: "IDCProduct"
      },
      single: true,
      filelength: Infinity,
      onlyfile: false,
      onlyimg: false
    };
  },
  props: ["msg"],
  created(){
    
  },
  methods: {
    //附件上传
    fileUpload(elementId1, num1, type1) {
      // console.log(num1, type1);
      var that = this;
      var file_obj;
      if (that.single == true) {
        file_obj = [that.$refs.Upload.files[0]];
      } else {
        file_obj = that.$refs.Upload.files;
      }
      if (
        file_obj.length <= that.filelength &&
        that.dt.length < that.filelength &&
        that.dtimg.length < that.filelength
      ) {
        for (var j = 0; j < file_obj.length; j++) {
          var subInfoType1;
          var ext = file_obj[j].name.split(".");
          ext = ext[ext.length - 1];
          that.icon = that.typeIcon(ext);
          var tmp = file_obj[j].type.split("/");
          tmp = tmp[0];
          var transdata = file_obj[j];
          if (that.onlyimg == true) {
            if (tmp == "image") {
              subInfoType1 = "picture_pc";
              that.uploadrequest(
                transdata,
                num1,
                type1,
                subInfoType1,
                elementId1
              );
            } else {
              this.$Message.warning({
                content: "只能上传图片",
                duration: 2
              });
              return false;
            }
          } else if (that.onlyfile == true) {
            if (tmp != "image") {
              subInfoType1 = "material_pc";
              that.uploadrequest(
                transdata,
                num1,
                type1,
                subInfoType1,
                elementId1
              );
            } else {
              this.$Message.warning({
                content: "只能上传文件",
                duration: 2
              });
              return false;
            }
          } else {
            if (tmp == "image") {
              subInfoType1 = "picture_pc";
            } else {
              subInfoType1 = "material_pc";
            }
            that.uploadrequest(
              transdata,
              num1,
              type1,
              subInfoType1,
              elementId1
            );
          }
        }
      } else {
        this.$Message.warning({
          content: "文件不能超过" + that.filelength + "个",
          duration: 2
        });
        that.$refs.Upload.value = "";
        return false;
      }
      that.$refs.Upload.value = "";
    },
    //上传请求
    uploadrequest(resdata, num, type, subInfoType, elementId) {
      var infoId, infoType;
      var that = this;
      if (num != undefined && num != "null") {
        // console.log(1);
        infoId = num;
      } else {
        // console.log(2);
        infoId = "null";
      }
      if (type != undefined && type != "null") {
        // console.log(11);
        infoType = type;
      } else {
        // console.log(22);
        infoType = "IDCProduct";
      }
      let data = new FormData();
      data.append("files", resdata);
      data.append("infoType", infoType);
      data.append("infoId", infoId);
      data.append("subInfoType", subInfoType);
      if (!that.checkAllAttachmentType(elementId)) {
        that.$refs.Upload.value = "";
        return false;
      }
      that
        .$request({
          url: location.origin + "/auth/attachment/upload",
          method: "POST",
          data,
          headers: {}
        })
        .then(function(res) {
          var resdata = res.data.data;
          // console.log(resdata[0]);
          if (resdata[0].subInfoType == "picture_pc") {
            that.imageshow = true;
            if (that.single == true) {
              // console.log("yes");
              that.dtimg = [];
              that.dtimg.push(resdata[0]);
            } else {
              // console.log("no");
              that.dtimg.push(resdata[0]);
            }
            that.$emit("transimgdata", that.dtimg);
          } else {
            that.frameshow = true;
            // console.log(that.frameshow);
            if (that.single == true) {
              that.dt = [];
              that.dt.push(resdata[0]);
            } else {
              that.dt.push(resdata[0]);
            }
            that.$emit("transdata", that.dt);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //预览
    showView(id) {
      var that = this;
      var vUrl;
      let data = new FormData();
      data.append("id", id);
      that
        .$request({
          method: "post",
          url: location.origin + "/auth/attachController/showView",
          data,
          responseType: "text",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(function(data) {
          vUrl = data;
          window.open(vUrl);
        });
    },
    // 删除
    delAttach(formId, id, infoId, infoType, subInfoType) {
      var that = this;
      if (subInfoType && subInfoType != "null") {
        showAttachDivId = formId + "_" + subInfoType;
      }
      var fd = new FormData();
      fd.append("id", id);
      fd.append("formId", formId);
      fd.append("infoId", infoId);
      fd.append("infoType", infoType);
      fd.append("subInfoType", subInfoType);
      that
        .$request({
          method: "post",
          url: location.origin + "/auth/attachController/delAllAttach",
          data: fd,
          dataType: "JSON",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(function(d) {
          if (d.status == "200") {
            for (var i = 0; i < that.dt.length; i++) {
              if (that.dt[i].flowId == id) {
                that.dt.splice(i, 1);
                i--;
              }
              if (that.dt.length == 0) {
                that.frameshow = false;
              }
            }
            for (var i = 0; i < that.dtimg.length; i++) {
              if (that.dtimg[i].flowId == id) {
                that.dtimg.splice(i, 1);
                i--;
              }
              if (that.dtimg.length == 0) {
                that.imageshow = false;
              }
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //下载
    download(id) {
      window.open(
        location.origin + "/auth/attachment/download?id=" + id,
        "_self"
      );
    },
    //回显
    showAttach(flowId) {
      var that = this;
      that
        .$request({
          method: "GET",
          url: location.origin + "/authlxy/attachment/findByFlowId",
          async: false,
          params: { flowId: flowId }
          // dataType: "JSON",
          // headers: {
          //   "Content-Type": "application/x-www-form-urlencoded"
          // }
        })
        .then(function(res) {
          var resdata = res.data;
           console.log(resdata);
          if (resdata.subInfoType == "picture_pc") {
            that.imageshow = true;
            that.dtimg.push(resdata);
            // console.log(that.dtimg);
          } else {
            that.frameshow = true;
            that.dt.push(resdata);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //自定义上传按钮点击事件
    uploadclk() {
      var that = this;
      that.$refs.Upload.click();
    },
    //图标类型判断
    typeIcon(fileType) {
      fileType = fileType.toLowerCase();
      switch (fileType) {
        case "jpg":
          return "icon-jpg";
        case "gif":
          return "icon-gif";
        case "pdf":
          return "icon-pdf";
        case "zip":
          return "icon-zip";
        case "ppt":
          return "icon-ppt";
        case "txt":
          return "icon-txt";
        case "png":
          return "icon-png";
        case "mp3":
          return "icon-mp3";
        case "mp4":
          return "icon-mp4";
        case "xls":
          return "icon-excel";
        case "xlsx":
          return "icon-excel";
        case "doc":
          return "icon-word";
        case "docx":
          return "icon-word";
        case "rar":
          return "icon-rar";
        case "wmv":
          return "icon-WMV";
        default:
          return "icon-wenjian1";
      }
    },
    //上传检查
    checkAllAttachmentType(attachId) {
      var that = this;
      var ele = that.$refs.Upload;
      for (var i = 0; i < ele.files.length; i++) {
        if (ele.files[i].size > 500 * 1024 * 1024) {
          this.$Message.warning({
            content: "文件不能超过500M",
            duration: 2
          });
          return false;
        }
      }
      if (ele.value == "") {
        this.$Message.warning({
          content: "上传文件不能为空",
          duration: 2
        });
        return false;
      } else {
        if (
          !/\.(doc|docx|xls|xlsx|txt|pdf|jpg|png|ppt|pptx|mp4|wmv|mp3|zip|DOC|DOCX|XLS|XLSX|TXT|PDF|JPG|PNG|PPT|PPTX|MP4|WMV|MP3|ZIP)$/.test(
            ele.value
          )
        ) {
          ele.value = "";
          this.$Message.warning({
            content: "上传格式不正确",
            duration: 2
          });
          return false;
        }
      }
      return true;
    }
  },
  created() {
    console.log(this.msg)
    var that = this;
    if (that.msg.deltoggle != undefined && that.msg.deltoggle != null) {
      that.deltoggle = that.msg.deltoggle;
    }
    if (that.msg.viewtoggle != undefined && that.msg.viewtoggle != null) {
      that.viewtoggle = that.msg.viewtoggle;
    }
    if (
      that.msg.downloadtoggle != undefined &&
      that.msg.downloadtoggle != null
    ) {
      that.downloadtoggle = that.msg.downloadtoggle;
    }
    if (that.msg.uploadconfig != undefined && that.msg.uploadconfig != null) {
      for (var i = 0; i < that.msg.uploadconfig.length; i++) {
        if (
          that.msg.uploadconfig[i].infoId != undefined &&
          that.msg.uploadconfig[i].infoId != null &&
          that.msg.uploadconfig[i].infoId != ""
        ) {
          that.showAttach(that.msg.uploadconfig[i].infoId);
          that.uploadconfig.infoId = that.msg.uploadconfig[i].infoId;
          that.uploadconfig.infoType = that.msg.uploadconfig[i].infoType;
        } else {
          that.msg.uploadconfig[i].infoId = null;
          that.uploadconfig.infoId = that.msg.uploadconfig[i].infoId;
          that.uploadconfig.infoType = that.msg.uploadconfig[i].infoType;
          // console.log(that.uploadconfig);
        }
      }
    }

    if (that.msg.single != undefined && that.msg.single != null) {
      that.single = that.msg.single;
    }
    if (that.msg.filelength != undefined && that.msg.filelength != null) {
      that.filelength = that.msg.filelength;
    }
    if (that.msg.onlyfile != undefined && that.msg.onlyfile != null) {
      that.onlyfile = that.msg.onlyfile;
    }
    if (that.msg.onlyimg != undefined && that.msg.onlyimg != null) {
      that.onlyimg = that.msg.onlyimg;
    }
  },
  watch: {
    msg:{
      immediate: true,
       handler(newVal,oldval){
          console.log(newVal);
          
       }
     }
    // dt: {
    //   handler: function(val, oldval) {
    //     console.log(val);
    //     console.log(oldval);
    //   }
    // },
    // dtimg: {
    //   handler: function(val, oldval) {
    //     console.log(val);
    //     console.log(oldval);
    //   }
    // }
  }
};
</script>

<style lang="less" rel='stylesheet/less'>
.fileUpload {
  & > button {
    display: block;
  }
  .attachShow {
    float: left;
    margin: 10px 0px;
    .attachShowPart {
      border: 1px dashed #ff9d79;
      width: 240px;
      height: 50px;
      float: left;
      margin-right: 20px;
      line-height: normal;
      position: relative;
      & > i {
        &:first-child {
          float: left;
          font-size: 31px;
          color: #ff7744;
          margin: 5px 10px;
        }
      }
      .upBtns {
        position: absolute;
        right: 5px;
        bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        i {
          cursor: pointer;
          color: #ccc;
          margin: 0 3px;
        }
      }
      span {
        position: absolute;
        top: 6px;
        left: 50px;
        a {
          width: 120px;
          font-size: 12px;
          color: #ccc;
          text-decoration: none;
          cursor: default;
          &:first-child {
            display: block;
            width: 180px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #000;
          }
        }
      }
      .icon-guanbi {
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
        color: #ccc;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }
  .imageShow {
    float: left;
    margin: 10px 0px;
    .imgpart {
      position: relative;
      top: 0;
      left: 0;
      width: 200px;
      overflow: hidden;
      border: 1px dashed #ff7744;
      float: left;
      margin-right: 20px;
      img {
        display: block;
        width: 100%;
        height: 200px;
      }
      & > i {
        float: left;
        color: #ff7744;
        font-size: 36px;
      }
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 160px;
        box-sizing: border-box;
        margin: 10px 0 10px 40px;
        a {
          display: block;
          text-decoration: none;
          color: #ccc;
          font-size: 12px;
          cursor: default;
          &:first-child {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
      .upBtns {
        position: absolute;
        right: 5px;
        bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        i {
          cursor: pointer;
          color: #ccc;
          margin: 0 3px;
        }
      }
      .icon-guanbi {
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
        color: #ccc;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }
}
</style>