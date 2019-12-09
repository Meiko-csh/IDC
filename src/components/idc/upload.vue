<template>
    <div>
        <div class="upload-input">
            <label @click="uploadButton" class="uploadPicture">上传文件</label>
                <input type="file" id="fileUpload" name="files" multiple="multiple" @change="getAttachAjax($event);" v-show='false'
                ref="inputFile" />
        </div>
        <div v-for="(item,i) of this.list" :key="i">

            <div class="showcontent-list ">

                <i class="iconfont icon-wenjian files-logo"></i>
                <span class="span-text">{{item.nameCh}}</span>
                <span class="represont-group">
                    <!-- 预览 -->
                    <i class="iconfont icon-yanjing other-icon attachView"  @click="showView(item[0].flowId)"></i>
                    <!--     <button @click="showView(item.flowId)">预览</button> -->
                    <!-- 下载 -->
                    <i class="iconfont icon-xiazai other-icon attachDownload" @click="download(item[0].flowId)"></i>  
                    <!-- 删除 -->
                    <i class="iconfont icon-shanchu other-icon attachDelete"
                        @click="delAllAttach('sysAddAttch',item[0].flowId,'i','OppoIntegralTemplate',i)"></i>
                    <!--   <button @click="delAllAttach('sysAddAttch',item.flowId,'1','OppoIntegralTemplate')">删除</button> -->
                    <!-- <button @click="download(item.flowId)">下载</button> -->
                </span>
            </div>
        </div>
        <Alert type="error" show-icon v-show="alertShow" ref="alertRefs">
            An error prompt
            <span slot="desc">
                Custom error description copywriting.
            </span>
        </Alert>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: '',
                alertShow: false,

            }
        },
        methods: {
            //上传
            getAttachAjax(event) {
                // console.log(event);

                // formId, infoType, subInfoType
                var that = this;
                var file_obj = document.getElementById("fileUpload").files[0];
                var file_objName = file_obj.name;
                // var showAttachList = formId + "_attachList";
                // var fileElementId = formId + "_file";

                var AllImgExt = ".jpg|.jpeg|.gif|.bmp|.png|.img";
                var extName = file_objName.substring(file_objName.lastIndexOf(".")).toLowerCase();
                if (AllImgExt.indexOf(extName + "|") != -1) {
                    let data = new FormData();
                    data.append("files", file_obj);
                    data.append("infoType", "IDCProduct");
                    data.append("infoId", "null");
                    data.append("subInfoType", "material_pc");
                    // if (subInfoType && subInfoType != "null") {
                    //     showAttachList = formId + "_" + subInfoType;
                    //     fileElementId = subInfoType + "_file";
                    // }
                    that
                        .$request({
                            url: location.origin + "/auth/attachment/upload",
                            method: "POST",
                            data,
                            headers: {}
                        })
                        .then(res=>{

                            that.list = res.data.data;
                            console.log(that.list[0].flowId);
                            that.$emit('uploadID', that.list[0].flowId)


                            //     console.log(res);
                            //    console.log(that.list);

                        })
                        .catch(function (err) { });
                } else {
                    console.log(123);
                    // that.alertShow=true
                    //     setTimeout(function(){that.alertShow=false},1000);
                    alert("请输入正确的类型")

                }

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
                        dataType: "json",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                    .then(function (data) {
                        vUrl = data;
                        window.open(vUrl);
                    });

            },
            //删除
            delAllAttach(formId, id, infoId, infoType, subInfoType, i) {


                var that = this;
                let index = ""
                for (let i of that.list) {
                    index = i;
                }
                var showAttachDivId = formId + "_attachList";
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
                        dataType: 'JSON',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                    .then(function (data) {
                        that.list.splice(i, 1)
                    })
                    .catch(function () { });
            },
            download(id) {
                window.open('http://10.124.198.225/auth/attachment/download?id=' + id, '_self')
            },
            uploadButton() {
                let that = this;
                that.$refs.inputFile.click()
            }
        }
    }
</script>
<style scoped>
    .showcontent-list {
        border: 1px dashed #ff9d79;
        padding: 0 15px;
        margin: 5px 20px 5px 0;
        height: 50px;
        float: left;
    }

    .files-logo {
        font-size: 31px;
        color: #ff7744;
        display: inline-block;
        margin-right: 7px;
        top: -1px;
        float: left;
    }

    .span-text {
        display: block;
        width: 92px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        float: left;
        margin: 15px 5px 0 5px;
        color: #000;
        text-decoration: none !important;
    }

    .represont-group i {
        display: inline-block;
        margin-top: 12px;
        margin-left: 5px;
        cursor: pointer;
        color: rgb(204, 204, 204);
    }

    .upload-file-btn {
        width: 67px;
        height: 32px;
        line-height: 32px;
    }

    .uploadPicture {
        width: 67px;
        height: 32px;
        line-height: 32px;
        display: inline-block;
        background: #e1e1e1;
        text-align: center;
        color: #747474;
        border-radius: 3px;
        font-weight: normal;
        font-size: 12px;
        margin-bottom: 0;

    }

    .uploadPicture:hover {
        background: orange;
        color: #fff;
    }

    .upload-input {
        margin: 0 15px;
    }
</style>