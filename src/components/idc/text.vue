<template>
        <div>
            <div class="subject-con">
                <p class="subject">发布产品</p>
            </div>
            <hr class="subject-one">
            <div class="other-card">
                <div class="card-body">
                    <div class="body-content">
                        <!-- 第一栏 -->
                        <row :gutter="16" id="rowHeader">
                            <i-col :sm="12" :md="16" :lg="24">
                                <row>
                                    <i-col span="8" class="label-cont">
                                        <label class="star" style="margin-left: 10px;">产品名称：</label>
                                        <input type="text" id="topic" placeholder="请输入产品名称" class="inBox" v-model="prodName"
                                            autocomplete="off" @change="prodShow">
                                        <div class="div-small"><small v-show="prodNameShow">此项不能为空</small></div>
                                    </i-col>
                                    <!-- 三级菜单-第一级 -->
                                    <i-col span="8">
                                        <label class="star">产品模式：</label>
    
                                        <Select style="width:190px;" @on-open-change='getSltData' v-model="selected"
                                            @on-change="prodList($event)">
                                            <Option v-for="item in this.projectList" :key="item.codeID"
                                                :value="item.codeID">{{item.codeName}}</Option>
                                        </Select>
                                        <div class="div-small div-small-two"><small class="small-son"
                                                v-show="prodListShow">此项不能为空</small></div>
                                    </i-col>
                                    <!-- 三级菜单-第二级 -->
                                    <i-col span="8">
                                        <label class="star">产品类型：</label>
    
                                        <Select style="width:190px" @on-open-change='getSlectType' v-model="selectedType"
                                            @on-change="prodTypes" :disabled="disabled1">
                                            <Option v-for="item in this.prodType" :key="item.codeID" :value="item.codeID">
                                                {{item.codeName}}</Option>
    
                                        </Select>
                                        <div class="div-small div-small-two"><small class="small-son"
                                                v-show="selectedTypeShow">此项不能为空</small></div>
                                    </i-col>
                                </row>
    
                                <!-- 第二行 -->
                                <row class="rowtwo">
                                    <!-- 三级菜单-第三级 -->
                                    <i-col span="8" style="margin-right: -10px;margin-left: 10px;">
                                        <label class="star">产品分类：</label>
                                        <!-- <Select style="width:190px" v-model="selectedClass">
                                                <Option value="beijinga">New York</Option>
                                            </Select> -->
                                        <Select style="width:190px" @on-open-change='getSlectClass' v-model="selectedClass"
                                            :disabled="disabled2">
                                            <Option v-for="item in this.prodClass" :key="item.codeID" :value="item.codeID">
                                                {{item.codeName}}</Option>
                                        </Select>
                                        <div class="div-small div-small-four"><small
                                                v-show="selectedClassShow">此项不能为空</small></div>
                                    </i-col>
    
                                    <!--模糊搜索-->
                                    <i-col span="8">
                                        <div style="display: flex;">
                                            <label class="star" style="margin-left: -10px">负责人信息：</label>
                                            <fuzzy style="position: absolute; left: 92px;" @fyzzyID="getMsg"
                                                @lickserch='licksch' :opscontent1='lsContent' ref="fuzzyShow"
                                                :tasks="principal"></fuzzy>
                                        </div>
                                        <span>{{parentMsg}}</span>
                                    </i-col>
                                    <i-col span="8">
                                        <div v-show="deptShow">
                                            负责人部门:&nbsp;
                                            <!-- <input type="text" class="inBox" v-model="dept"> -->
                                            <i-input class="inBox-input" v-model="dept" disabled></i-input>
                                        </div>
                                    </i-col>
                                </row>
    
                            </i-col>
    
                        </row>
                        <row class="rowtwo">
                            <i-col span="8">
                                <div v-show="phoneShow">
                                    <label style="margin-left: 17px;">负责人联系方式：</label>
                                    <!-- <input type="text" class="inBox" v-model="phone" > -->
                                    <i-input class="inBox-input" v-model="phone" disabled></i-input>
                                </div>
                            </i-col>
                            <i-col span="8">
                                <div v-show="emailShow">
                                    <label style="margin-left: 23px;"> 负责人邮箱：</label>
                                    <!-- <input type="text" class="inBox" v-model="email" v-show="emailShow"> -->
                                    <i-input class="inBox-input" v-model="email" v-show="emailShow" disabled></i-input>
                                </div>
                            </i-col>
                        </row>
                    </div>
                </div>
            </div>
    
            <div class="hrone">
                <hr>
            </div>
    
            <!-- 第二栏 -->
            <div class="other-two">
                <div class="card-body">
                    <div class="body-content body-second">
                        <div class="text-margin">
                            <label class="star">产品简介：</label>
                            <input type="text" id="topic" placeholder="请输入产品名称" class="inBox inBox-Second"
                                autocomplete="off" v-model="projectBrief" @change="prodTwoShow">
                            <div class="div-small"><small v-show="projectBriefShow">此项不能为空</small></div>
                        </div>
                        <div class="text-margin">
                            <label class="star">目标客户：</label>
                            <input type="text" id="chargeMsg" placeholder="请输入目标用户" autocomplete="off" name="projectName"
                                class="inBox inBox-Second" v-model="projectName" @change="prodThreeShow">
                            <div class="div-small"><small v-show="projectNameShow">此项不能为空</small></div>
                        </div>
                        <div>
                            <!-- 产品功能 -->
    
                            <div class="form-group" style="width: 1200px;">
                                <row>
                                    <div class="label-cont">
                                        产品功能：
                                    </div>
    
                                    <i-col span="15" class="form-cont add-table">
                                        <table class="">
                                            <thead style="width: 100%;">
                                                <tr>
                                                    <th class="" style="width:300px">标题</th>
                                                    <th style="width:60%">
                                                        详情
                                                        <span class="click-icon" @click="tbshow=!tbshow">
                                                            <i
                                                                :class="tbshow==true?'icon iconfont icon-shang':'icon iconfont icon-xia'"></i>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody style="display: table-row-group;" v-show="tbshow">
                                                <tr>
                                                    <td>示例：数据资源管理平台</td>
                                                    <td>示例：数据资源规划、数据资源中心、数据管理平台、数据服务、地理信息服务。
                                                    </td>
                                                </tr>
                                                <tr v-for="(item, i) of this.prodFunction" :key='i'>
                                                    <td><Input v-model='item.title' style="width:200px"></Input></td>
                                                    <td><Input v-model='item.content'
                                                            style="display: inline-block;width: 300px;"></Input>
                                                        <span @click='del(i)' class="delList">删除</span>
                                                    </td>
                                                </tr>
                                            </tbody>
    
                                        </table>
                                    </i-col>
                                    <Button @click="adddTrFn(0)" class="add-hang">添加一行</Button>
                                </row>
                            </div>
                            <!-- 第二层 -->
                            <div class="form-group" style="width: 1200px;">
                                <row>
    
                                    <div class="label-cont">
                                        产品优势：
                                    </div>
    
                                    <i-col span="15" class="form-cont add-table">
                                        <table class="">
                                            <thead style="width: 100%;">
                                                <tr>
                                                    <th class="" style="width:300px">标题</th>
                                                    <th style="width:60%">
                                                        详情
                                                        <span class="click-icon" @click="tbshow2=!tbshow2">
                                                            <i
                                                                :class="tbshow2==true?'icon iconfont icon-shang ':'icon iconfont icon-xia '"></i>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody style="display: table-row-group;" v-show="tbshow2">
                                                <tr>
                                                    <td>示例：数据资源管理平台</td>
                                                    <td>示例：数据资源规划、数据资源中心、数据管理平台、数据服务、地理信息服务。
                                                    </td>
                                                </tr>
                                                <tr v-for="(item, i) of this.prodAdvantage" :key='i'>
                                                    <td><Input v-model='item.title' style="width:200px"></Input></td>
                                                    <td><Input v-model='item.content'
                                                            style="display: inline-block;width: 300px;"></Input>
                                                        <span @click='del2(i)' class="delList">删除</span>
                                                    </td>
                                                </tr>
                                            </tbody>
    
                                        </table>
                                    </i-col>
                                    <Button @click="adddTrFn2(0)" class="add-hang">添加一行</Button>
                                </row>
                            </div>
                            <!-- 第三层 -->
                            <div class="form-group" style="width: 1200px;">
                                <row>
    
                                    <div class="label-cont">
                                        常见问题：
                                    </div>
    
                                    <i-col span="15" class="form-cont add-table">
                                        <table class="">
                                            <thead style="width: 100%;">
                                                <tr>
                                                    <th class="" style="width:300px">标题</th>
                                                    <th style="width:60%">
                                                        详情
                                                        <span class="click-icon" @click="tbshow3=!tbshow3">
                                                            <i
                                                                :class="tbshow3==true?'icon iconfont icon-shang ':'icon iconfont icon-xia '"></i>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody style="display: table-row-group;" v-show="tbshow3">
                                                <tr>
                                                    <td>示例：数据资源管理平台</td>
                                                    <td>示例：数据资源规划、数据资源中心、数据管理平台、数据服务、地理信息服务。
                                                    </td>
                                                </tr>
                                                <tr v-for="(item, i) of this.commonProblem" :key='i'>
                                                    <td><Input v-model='item.title' style="width:200px"></Input></td>
                                                    <td><Input v-model='item.content'
                                                            style="display: inline-block;width: 300px;"></Input>
                                                        <span @click='del3(i)' class="delList">删除</span>
                                                    </td>
                                                </tr>
                                            </tbody>
    
                                        </table>
                                    </i-col>
                                    <Button @click="adddTrFn3(0)" class="add-hang">添加一行</Button>
                                </row>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
            <!-- 尾部 -->
            <div class="idc-bottom">
                <!-- 上传附件 -->
                <div>
                    <div class="idc-text">
                        <label style="margin:0">附件</label>
                        <div class="text-color">(产品宣传材料)</div>
                    </div>
                    <div class="idc-bottom-one">
                        <uploadComponent :msg="attachmentConfigss" @transdata="getattachment"></uploadComponent>
                    </div>
                    <div class="idc-bottom-one">
                        <!-- <span class="text-color">(文件类型：支持多种类型ppt,word)</span> -->
                    </div>
                    <div class="bottom-file">
                        <div class="bottom-file-first">
                        </div>
                    </div>
                </div>
                <!-- 上传配图 -->
                <div class="upload-input">
                    <div class="idc-text">
                        <label style="margin:0">上传配图</label>
                        <div class="text-color">(图片)</div>
                    </div>
                    <div class="idc-bottom-one">
                        <uploadComponent :msg="attachmentConfigs" @transimgdata="getimgdataillustration"></uploadComponent>
                    </div>
                    <div class="idc-bottom-one">
    
                    </div>
                </div>
                <!-- 上传封面 -->
    
                <div class="upload-input">
                    <div class="idc-text">
                        <label style="margin:0">上传配图</label>
                        <div class="text-color">(图片)</div>
                    </div>
                    <div class="idc-bottom-one">
                        <uploadComponent :msg="attachmentConfig" @transimgdata="getimgdata"></uploadComponent>
                    </div>
                    <div class="idc-bottom-one">
    
                    </div>
                </div>
                <div class="idc-bottom-btn">
                    <Button class="btn-return" @click="btnTo">返回</Button>
                    <Button class="btn-return btn-save" ghost @click="ProductsSave()">保存</Button>
                    <Button class="btn-return" ghost @click="uploading()">发布</Button>
                </div>
            </div>
        </div>
    </template>
    <script>
        import fuzzy from '@/components/idc/fuzzy.vue';
        import upload from '@/components/idc/upload.vue';
        import uploadComponent from '@/components/idc/uploadComponent.vue'
        export default {
    
            components: {
                // treeList,
                fuzzy,
                upload,
                uploadComponent
            },
            data() {
                return {
    
                    //给子组件传负责人名字
                    principal: "",
                    //封面
                    attachmentConfig: {
                        'deltoggle': true,
                        'viewtoggle': true,
                        'downloadtoggle': true,
                        'uploadconfig': [
                            {
                                'infoId': "",
                                'infoType': 'IDCProduct',
                          
                            }
                        ],
                        'single': true,
                    },
                    //配图
                    attachmentConfigs: {
                        'deltoggle': true,
                        'viewtoggle': true,
                        'downloadtoggle': true,
                        'uploadconfig': [
                            {
                                'infoId': "",
                                'infoType': 'IDCProduct',
                                
                            }
                        ],
                        'single': true,
                    },
                    //附件
                    attachmentConfigss: {
                        'deltoggle': true,
                        'viewtoggle': true,
                        'downloadtoggle': true,
                        'uploadconfig': [
                            {
                                'infoId': null,
                                'infoType': 'IDCProduct',
                            }
                        ],
                        'single': true,
                        'filelength': 5
                    },
                    dt: [],
                    imgdt: "",
                    illustration: "",
                    dataImg: [],
    
                    //
                    //获取产品id
                    productID: "",
    
                    //上传配图传来的id
                    upload: "",
    
                    lsContent: 123,
    
                    //显示隐藏提示
                    parentMsg: "",
    
                    disabled1: true,
                    disabled2: true,
                    selectList: [],
    
                    //产品模式
                    // productModel: "集团产品",
                    //产品名称
                    prodName: "",
    
                    att: "",
    
                    //产品分类
                    // productClass: "IDC基础产品",
    
                    //目标用户
                    projectName: "",
    
                    //产品模式
                    projectList: [],
                    //产品模式的数据
                    selected: "",
                    selectedName: "",
    
                    //产品类型
                    prodType: [],
                    selectedType: "",
                    selectedTypeName: "",
    
                    //产品分类
                    prodClass: [],
                    selectedClass: "",
                    selectedClassName: "",
    
                    //产品列表的内容
                    ProListItem: "",
                    projectPattern: "",
    
                    //名字
                    opscontent: "",
                    //模糊查询的id
                    fuzzycodeID: "",
                    //地址
                    dept: "",
                    //手机号
                    phone: "",
                    //邮箱
                    email: "",
                    deptShow: false,
                    phoneShow: false,
                    emailShow: false,
    
                    //产品简介
                    projectBrief: "",
    
                    //目标客户
                    projectClient: "",
                    projectfunction: "",
                    projectadvantage: "",
                    typicalcases: "",
                    // 产品功能：
                    tbshow: true,
    
                    // 产品优势
                    tbshow2: true,
    
                    //典型案例 
                    tbshow3: true,
    
                    prodFunction: [],
                    num: 0,
    
                    // 产品优势
                    prodAdvantage: [],
                    numtow: 0,
    
                    //典型案例
                    commonProblem: [],
                    numthree: 0,
                    //产品名称
                    prodNameShow: false,
                    //产品模式
                    prodListShow: false,
                    //产品简介
                    projectBriefShow: false,
                    //目标客户
                    projectNameShow: false,
                    //产品类型
                    selectedTypeShow: false,
                    //产品分类
                    selectedClassShow: false,
                }
            },
            created() {
                this.getSltData();
                this.isEdit();
    
    
            },
            mounted() {
                this.isEdit();
    
            },
    
            watch: {
                selected(val) {
                    this.prodListShow = this.selected == "" ? true : false;
                },
                selectedType() {
                    this.selectedTypeShow = this.selectedType == "" ? true : false;
                },
                selectedClass() {
                    this.selectedClassShow = this.selectedClass == "" ? true : false
                },
    
    
            },
    
            methods: {
                //草稿返回内容后根据手机号模糊查询
                userPhone() {
    
    
                    let that = this;
                    that.$request({
                        methods: 'get',
                        url: '/auth/user/getUserInfoBySearch',
                        // async: false,
                        params: {
                            "orgId": 99,
                            "inputText": that.phone
                        },
                    }).then(function (res) {
                        if (res.data[0].phone >= 10) {
                            let detailed = res.data[0]
                            that.contactName = detailed.contactName;
                            that.principal = detailed.name;
                            that.dept = detailed.dept;
                            that.phone = detailed.phone;
                            that.email = detailed.email;
                            that.emailShow = true;
                            that.deptShow = true;
                            that.phoneShow = true;
    
    
                        }
    
                    }).catch(function (err) {
                        console.log(err);
                    });
                },
    
    
    
                //上传附件
                getattachment(msg) {
                    let setUpload = {}
                    for (let item of msg) {
                        setUpload.attachId = item.flowId
                        setUpload.attachName = item.nameCh
                    }
                    this.dt.push(setUpload)
    
                    console.log(this.dt);
                    // console.log(msg);
    
    
                },
                //上传封面
                getimgdata(msg) {
                    this.imgdt = msg[0].flowId;
                    console.log(this.imgdt);
                },
    
                //上传配图
                getimgdataillustration(msg) {
                    this.illustration = msg[0].flowId;
                    console.log(this.illustration)
                },
    
                //获取产品id后渲染页面
                isEdit() {
                    console.log(this, 123)
                    let that = this;
                    if (this.$route.query.prodID == null) {
                        this.productID = -1;
                    } else if (this.$route.query.prodID > 0) {
                        that.productID = this.$route.query.prodID
                        console.log(that.productID);
                    }
                    if (this.productID > 0) {
                        this.$request({
                            method: "GET",
                            url: "/kapplyjrq/idcProduct/prodEdit",
                            async: false,
                            params: {
                                "prodID": that.productID
                            }
                        }).then(res => {
    
                            console.log(res.data.DataRows[0])
                            let userinfo = res.data.DataRows[0];
                            console.log(userinfo);
                            this.phone = userinfo.contactPhone;
                            this.productID = userinfo.prodId;
                            this.prodName = userinfo.prodName;
                            this.selectedTypeName = userinfo.prodMode;
                            this.selectedName = userinfo.prodType;
                            this.selectedClassName = userinfo.prodClass;
                            this.fuzzycodeID = userinfo.principalUserID;
                            this.projectBrief = userinfo.prodIntroduction;
                            this.projectName = userinfo.targetCustomer;
                            this.prodFunction = userinfo.prodFunction;
    
                            this.prodAdvantage = userinfo.prodAdvantage;
                            this.commonProblem = userinfo.commonProblem;
                            that.$refs.fuzzyShow.opscontentchange();
                            this.principal = userinfo.contactName;
    
                            this.userPhone()
                            // "dcAttach": "",
                            // "idcPicture": "",
                            //封面
                            let coverPicture = userinfo.coverPicture;
                            let idccoverPicture = {
                                'formId': coverPicture,
                                'formType': "",
                            }
                            that.attachmentConfig.uploadconfig.push(idccoverPicture)
    
                            //配图
                            let idcPicture = userinfo.idcPicture;
                            let objIdcPicTure = {
                                'formId': idcPicture,
                                'formType': "",
                            }
                            that.attachmentConfigs.uploadconfig.push(objIdcPicTure)
    
                            //根据草稿返回的id查找附件
                            let uploadList = userinfo.idcAttach
                            console.log(uploadList);
                            
                            for (let item of uploadList) {
                                let data = {
                                    'formId': item.attachId,
                                    'formType': "",
                                };
                                this.attachmentConfigss.uploadconfig.push(data)
                                console.log(this.attachmentConfigss);
                            }
    
    
    
                            //触发三级联动
                            for (let i of that.projectList) {
                                if (i.value == that.selectedName) {
                                    that.selected = i.codeID
                                    that.disabled1 = false;
                                    if (that.selected != 0) {
                                        that.getSlectType()
                                        if (that.selectedType != 0) {
                                            that.getSlectClass()
                                        }
                                    }
                                }
                            }
                        })
                    }
                },
    
                licksch(i) {
                    let that = this;
    
                    //  console.log(that.phone)
                    if (i == 19089865343) {
                        that.deptShow = true;
                        that.phoneShow = true;
                        that.emailShow = true;
                        return;
                    }
                    if (i != '' && that.dept != '') {
    
                        that.deptShow = true;
    
                    } else {
                        that.deptShow = false
                        that.dept = "";
                    }
    
    
    
                    if (i != '' && that.phone != '') {
                        that.phoneShow = true;
    
                    } else {
                        that.phoneShow = false
                        that.phone = "";
                    }
    
                    if (i != '' && that.email != '') {
                        that.emailShow = true;
    
                    } else {
                        that.emailShow = false;
                        that.email = "";
                    }
    
                },
                //显示隐藏提示
                prodShowAll() {
                    this.prodListShow = this.selected == "" ? true : false;
                    this.selectedTypeShow = this.selectedType == "" ? true : false;
                    this.selectedClassShow = this.selectedClass == "" ? true : false
    
                },
    
                prodShow() {
                    this.prodNameShow = this.prodName == "" ? true : false
                },
                prodTwoShow() {
                    this.projectBriefShow = this.projectBrief == "" ? true : false
                },
                prodThreeShow() {
                    this.projectNameShow = this.projectName == "" ? true : false
                },
    
    
    
    
                //接受fuzzy(模糊查询)传过来的id
                getMsg(opscontent, data, dept, phone, email) {
                    this.opscontent = opscontent;
                    this.fuzzycodeID = data;
                    this.dept = dept;
                    this.phone = phone;
                    this.email = email;
    
    
                },
                //接受上传文件的id
                // getUploadID(upID) {
                //     this.upload = upID
                //     console.log(this.upload);
    
                // },
    
                adddTrFn(n) {
                    this.tbshow == false ? this.tbshow = true : "";
                    let data = {
                        content: "",
                        title: "",
                    };
                    ++this.num
                    data.subShowOrder = this.num
                    this.prodFunction.push(data);
                },
                del(i) {
                    this.prodFunction.splice(i, 1);
                    --this.num;
                },
                //产品优势    
                adddTrFn2(n) {
                    this.tbshow2 == false ? this.tbshow2 = true : "";
                    let data2 = {
                        content: "",
                        title: ""
                    };
                    ++this.numtow
                    data2.subShowOrder = this.numtow
                    this.prodAdvantage.push(data2);
                },
                del2(i) {
                    this.prodAdvantage.splice(i, 1);
                    --this.numtow
                },
                //典型案例
                adddTrFn3(n) {
                    this.tbshow3 == false ? this.tbshow3 = true : "";
                    let data3 = {
                        content: "",
                        title: ""
                    };
                    ++this.numthree
                    data3.subShowOrder = this.numthree
    
                    this.commonProblem.push(data3);
                },
                del3(i) {
                    this.commonProblem.splice(i, 1);
                    --this.numthree
                },
    
                //清空产品类型和产品分类
                prodList(e) {
    
                    this.selectedType = "";
                    this.selectedClass = "";
                    this.disabled2 = true;
                },
                prodTypes() {
                    this.selectedClass = "";
                    this.disabled2 = true
    
                },
    
                //产品分类
                getSlectClass() {
                    if (this.selectedType != "") {
    
                        let that = this;
    
                        that.$request({
                            method: "get",
                            url: "/kapplyjrq/idcCode/findCodeName",
                            params: {
                                "parentID": this.selectedType,
                                "codeType": "product"
                            }
                        }).then(res => {
                            this.prodClass = res.data.DataRows;
                            for (let item of that.prodClass) {
                                if (item.codeName == that.selectedClassName) {
                                    that.selectedClass = item.codeID
    
                                }
                            }
                        }).catch(function (error) {
                            console.log(error)
                        })
                    } else {
                        this.selectedClass = "";
                        disabled2 = true
                    }
                    for (var i of this.prodClass) {
                        if (i.codeID == this.selectedClass) {
                            this.selectedClassName = i.codeName
    
                        }
                    }
                },
    
    
    
    
                //产品类型
                getSlectType() {
                    this.disabled2 = this.selectedType && this.selected != 0 ? false : true;
                    // if (this.selectedType == "") {
                    //     this.disabled2 = true
                    // } else {
                    //     this.disabled2 = false
                    // }
    
                    let that = this;
                    that.$request({
                        method: "get",
                        url: "/kapplyjrq/idcCode/findCodeName",
                        params: {
                            "parentID": this.selected,
                            "codeType": "product"
                        }
                    }).then(res => {
                        this.prodType = res.data.DataRows;
                        for (let item of that.prodType) {
                            if (item.codeName == that.selectedTypeName) {
                                that.selectedType = item.codeID
                                that.disabled2 = false;
                                that.getSlectClass()
                            }
                        }
    
                    }).catch(function (error) {
                        console.log(error)
                    })
                    for (var i of this.prodType) {
                        if (i.codeID == this.selectedType) {
                            this.selectedTypeName = i.codeName
    
                        }
                    }
                },
    
                //获取产品模式
                getSltData() {
                    this.disabled1 = this.selected.length != 0 ? false : true;
                    let that = this;
                    this.$request({
                        method: "get",
                        url: "/kapplyjrq/idcCode/findCodeName",
                        params: {
                            "parentID": 0,
                            "codeType": "product"
                        }
                    }).then(res => {
                        let addlit = res.data.DataRows;
                        for (var i of addlit) {
                            i.value = i.codeName
                        }
    
                        that.projectList = addlit
    
                    }).catch(function (error) {
                        console.log(error)
                    })
                    for (var i of this.projectList) {
                        if (i.codeID == this.selected) {
                            this.selectedName = i.codeName
                        }
    
    
    
                    }
                },
                //返回
                btnTo() {
                    this.$router.go(-1)
                },
    
                // 保存
                ProductsSave() {
                    let that = this;
    
    
                    let list = {
                        "prodID": that.productID,
                        "prodName": this.prodName,
                        "prodType": this.selectedTypeName,
                        "prodMode": this.selectedName,
                        "prodClass": this.selectedClassName,
                        "principalUserID": this.fuzzycodeID,
                        "prodIntroduction": this.projectBrief,
                        "targetCustomer": this.projectName,
                        "prodFunction": this.prodFunction,
                        "prodAdvantage": this.prodAdvantage,
                        "commonProblem": this.commonProblem,
                        "idcAttach": this.dt,
                        "idcPicture": this.illustration,
                        "coverPicture": this.imgdt,
                    };
    
                    if (that.prodName && that.selectedTypeName && that.selectedName && that.selectedClassName && that.fuzzycodeID && that.projectBrief && that.projectName && that.prodFunction && that.prodAdvantage && that.commonProblem.length != 0) {
    
                        that.$request({
                            method: "POST",
                            url: "/kapplyjrq/idcProduct/prodSave",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            data: list
                        }).then(res => {
    
    
                            // window.location.href = "http://10.124.198.225/taskjrq/tasks/workplatform"
                            //   location.origin+"taskjrq/tasks/workplatform"
                            window.open(location.origin + "/taskjrq/tasks/workplatform")
                        }).catch(function (error) {
                            console.log(error)
                        })
                    } else {
                        that.prodShow();
                        that.prodTwoShow();
                        that.prodThreeShow();
                        that.$refs.fuzzyShow.opscontentchange(123);
                        // this.prodListShow = this.selected!=0 ? true : false;
                        //that.prodListShow = this.selected == "" ? true : false
                        that.prodShowAll()
    
                        console.log("请输入内容")
                    }
                },
                //上传
                uploading() {
                    let that = this;
    
                    let list = {
                        "prodID": that.productID,
                        "prodName": this.prodName,
                        "prodType": this.selectedTypeName,
                        "prodMode": this.selectedName,
                        "prodClass": this.selectedClassName,
                        "principalUserID": this.fuzzycodeID,
                        "prodIntroduction": this.projectBrief,
                        "targetCustomer": this.projectName,
                        "prodFunction": this.prodFunction,
                        "prodAdvantage": this.prodAdvantage,
                        "commonProblem": this.commonProblem,
                        "idcAttach": this.dt,
                        "idcPicture": this.illustration,
                        "coverPicture": this.imgdt,
                    };
    
    
    
                    if (this.prodName && this.selectedTypeName && this.selectedName && this.selectedClassName && this.fuzzycodeID && this.projectBrief && this.projectName && this.prodFunction && this.prodAdvantage && this.commonProblem.length != 0) {
                        let that = this;
                        that.$request({
                            method: "POST",
                            url: "/kapplyjrq/idcProduct/prodPublish",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            data: list
                        }).then(res => {
                            that.$router.push('/idcproduct')
    
                        }).catch(function (error) {
    
                        })
                    } else {
                        that.prodShow();
                        that.prodTwoShow();
                        that.prodThreeShow();
                        that.$refs.fuzzyShow.opscontentchange(123);
                        that.prodShowAll()
                        console.log("请输入内容")
                    }
                },
    
            },
        }
    </script>
    <style scoped>
        .subject-con {
            width: 100%;
            height: 50px;
            line-height: 50px;
            background-color: #fff;
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
    
        .other-card {
            width: 100%;
            height: auto;
            background: none;
            border-color: #e8eaec;
            background: #fff;
            /*border-radius: 2px;*/
            font-size: 14px;
            position: relative;
            transition: all 0.2s ease-in-out;
        }
    
        .card-body {
            padding: 16px;
        }
    
        .body-content {
            max-width: 1200px;
            padding: 16px 0;
            margin: 0 auto;
    
            border-bottom: 1 dashed #dcdee2;
        }
    
        #rowHeader {
            margin-left: 30px !important;
    
        }
    
        .label-cont label {
            color: #373d41;
            font-size: 14px;
        }
    
        .inBox {
            padding: 5px 7px;
            font-size: 12px;
            border: 1px solid #dcdee2;
            border-radius: 2px;
            color: #999;
            height: 32px;
            width: 190px;
            transition: all linear 0.3s;
        }
    
        .inBox:focus,
        .inBox:hover,
        .productBox:focus,
        .productBox:hover {
            border-color: #00c1de !important;
            transition: all linear 0.3s;
            outline: none
        }
    
        .productBox {
            width: 190px !important;
            padding: 5px 7px;
            font-size: 12px;
            border: 1px solid #dcdee2;
            border-radius: 2px;
            color: #999;
            cursor: text;
            transition: all linear 0.3s;
        }
    
        .body-second {
            max-width: 1000px;
            margin: 0 auto;
            border: 0 !important;
        }
    
        .inBox-Second {
            width: 85%;
            border-radius: 2px;
        }
    
        .text-margin {
    
            margin-left: -10px;
        }
    
    
    
    
    
        .Atitle {
            background-color: #f9f8f8;
            min-width: 0;
            box-sizing: border-box;
            vertical-align: middle;
            white-space: nowrap;
            font-weight: bold;
            color: #373d41;
            background: #f9f8f8;
            border: 1px solid #f2f2f3 !important;
            background: #f9f8f8;
            border-right: 1px solid #eeeeee !important;
            padding: 0 20px;
    
        }
    
        .Atitle>th {
            height: 36px;
            background-color: #f9f8f8;
            min-width: 0;
            text-align: center;
            box-sizing: border-box;
            vertical-align: middle;
            white-space: nowrap;
            font-weight: bold;
            color: #373d41;
            line-height: 36px;
            padding: 0 18px;
            background: #f9f8f8;
            width: 32em !important;
        }
    
        .btn-add {
            position: absolute;
            top: 5px;
            left: 16px;
        }
    
        >>>.ivu-select-selection {
            border-radius: 0;
        }
    
        >>>.ivu-select-selection:hover {
            border-color: #00c1de
        }
    
        .group-radio {
            /* position: absolute;
                margin: 5px 5px 2px 0; */
    
        }
    
        /* .provincial-radio {
                position: absolute;
                margin: 5px 20px 2px 10px;
            } */
    
        /* .group-radio+label {
                margin-left: 20px;
            } */
    
        /* .provincial-radio+label {
                margin-left: 30px;
            } */
    
        .rowtwo {
            margin: 0px 0 -10px 0;
    
        }
    
        .Threelines {
            width: 800px;
            margin-left: 66px !important;
            margin: 15px 0 -15px 0;
            display: flex;
            line-height: 25px !important;
        }
    
        .Threelines>input {
            line-height: 10px !important;
            margin: 7px 2px -5px 15px;
    
        }
    
        .other-two {
    
            width: 100%;
            height: auto;
            background: none;
            border-color: #e8eaec;
            background: #fff;
            /*border-radius: 2px;*/
            /* font-size: 14px; */
            position: relative;
            transition: all 0.2s ease-in-out;
    
    
        }
    
        .hrone {
            width: 1200px;
            margin: 0 auto;
        }
    
    
        .hr-two {
            position: absolute;
            width: 1100px !important;
            right: 240px;
        }
    
        .subject-one {
            width: 100% !important;
            border: 1px solid #e8e8e8;
            margin: 0 auto !important;
        }
    
        .idc-bottom {
            max-width: 1200px !important;
            margin: 0 auto;
    
        }
    
        .idc-text {
            width: 120px;
            text-align: right;
            margin-left: 2.75em;
            display: inline-block;
        }
    
        .idc-bottom-one {
            display: inline-block;
            margin-left: 10px;
            margin-top: 5px;
    
        }
    
        .idc-bottom-one>button {
            margin: -20px 20px 0 9px;
        }
    
        .text-color {
            color: #aca6a8;
            font-size: 13px;
        }
    
        /* .idc-bottom-one>.text-color {
            display: flex;
            transform: translateY(-10px);
        } */
    
        .bottom-file {
            display: flex;
            padding-left: 157px;
            margin-top: 10px;
    
    
        }
    
        .bottom-file-first {
    
            /* margin-left: 13px;
            width: 150px;
            height: 40px;
            background-color: yellow; */
        }
    
        .idc-bottom-btn {
            padding: 30px 0;
            text-align: center;
            width: 100%;
        }
    
        .ivu-btn>span {
            font-size: 12px;
        }
    
        /* .idc-bottom-btn>button {
            width: 75px;
            height: 36px;
            line-height: 14px;
            margin: 50px 10px;
        } */
    
        .tjbtn {
            padding: 0;
            display: inline-block;
            text-align: center;
            width: 100%;
            max-width: 90px;
            border: 1px solid #e6e6e6;
            color: #666;
            float: right;
            cursor: pointer;
            margin: 10px auto;
        }
    
        >>>.ivu-btn-primary {
            margin-left: 20px;
        }
    
        .table {
            text-align: left;
        }
    
        .add-line {
            margin-bottom: 20px;
    
        }
    
        .table-fixbug {
            overflow: visible;
            width: 720px !important;
        }
    
        .form-group {
            margin-bottom: 15px;
            margin-right: -15px;
    
    
        }
    
        .label-cont {
            float: left;
        }
    
        .pro-left {
            margin-left: -13px;
        }
    
        .form-cont .add-table {
            padding-left: 0 !important;
            height: 35px;
            line-height: 35px;
            margin-left: -23px;
        }
    
        tr th {
            height: 36px;
            background-color: #f9f8f8;
            min-width: 0;
            text-align: center;
            box-sizing: border-box;
            vertical-align: middle;
            white-space: nowrap;
            font-weight: bold;
            color: #373d41;
            line-height: 36px;
            border-right: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
            padding: 0 18px;
            background: #f9f8f8;
        }
    
        .click-icon {
            position: relative;
            float: right;
            margin-top: 8px;
            background: #eee;
            display: inline-block;
            height: 22px;
            width: 22px;
            cursor: pointer;
        }
    
        .click-icon i {
            color: #fff;
            position: relative;
            top: -7px;
            left: 0;
        }
    
        tr td {
            transition: background-color 0.2s ease-in-out;
            min-width: 0;
            overflow: hidden;
            /* text-overflow: ellipsis; */
            text-align: center;
            vertical-align: top;
            box-sizing: border-box;
            font-family: HelveticaNeue;
            color: #666666;
            background: #fff;
            border-left: 1px solid #eeeeee;
            border-right: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
            padding: 10px;
            line-height: 20px;
        }
    
        tr:hover td {
            background: #dbf3f6;
        }
    
        .delList {
            float: right;
            line-height: 29px;
            margin-right: 5px;
            cursor: pointer;
        }
    
        .add-hang {
            margin-left: 30px;
            border-radius: 0;
            height: 35px;
        }
    
        /* 星号 */
        .star::before {
            content: "*";
            display: inline-block;
            margin-right: 4px;
            line-height: 1;
            font-family: SimSun;
            font-size: 12px;
            color: #f50f50;
        }
    
        /* 隐藏提示 */
        .div-small {
            height: 17px;
            line-height: 10px;
            font-size: 16px;
            color: #f50f50;
    
    
        }
    
        .div-small>small {
            margin-left: 92px;
        }
    
        .div-small>.small-son {
            margin-left: 82px !important;
        }
    
        .div-small-two {
            line-height: 12px;
        }
    
        .div-small-three {
            line-height: 18px;
        }
    
        .div-small-four {
            margin-left: -12px;
    
        }
    
        >>>.inBox-input {
            width: 0;
        }
    
        >>>.inBox-input>input {
            width: 188px;
    
            border-radius: 0px !important;
    
        }
    
        .btn-return {
            margin-right: 10px;
            width: 120px;
            border-radius: 0px !important;
            height: 36px !important;
            /* line-height: 31px !important; */
            background: none !important;
            border-color: #73777a !important;
            color: #73777a !important;
            font-size: 14px;
        }
    
        .btn-return:hover {
            background: #73777a !important;
            border-color: #73777a !important;
            color: #fff !important;
        }
    
        .btn-save {
            border: 1px solid #33cde5 !important;
            color: #33cde5 !important;
        }
    
        .btn-save:hover {
            background: #33cde5 !important;
            border-color: #33cde5 !important;
            color: #fff !important;
        }
    
        .upload-input {
            display: flex;
            margin: 20px 0;
    
        }
    </style>