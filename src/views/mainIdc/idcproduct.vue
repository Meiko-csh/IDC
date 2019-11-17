<template>
    <div class="highest">
        <!-- IDC产品首页 -->
        <div class="pigeIdc-main">
            <datam></datam>

            <div class="subject-con none-border-t">
                <p class="subject">IDC产品发布</p>
            </div>

            <div class="subject-con none-border-t" style="height: 30px;line-height: 30px;width: 1200px;margin: 0 auto;">
                <button class="btn btn-default" id="submitProduct" @click="re1lease">发布产品</button>
            </div>
            <i-button type="primary" @click="time" v-show="false"></i-button>
            <div id="scrollbar" style="height: 500px;">
                <Menu :active-name="activemenu">

                    <Submenu v-for="(item,index) in list" :key='index' :name="index" style="margin-left: 3px;">
                        <!-- 根节点 -->
                        <template slot="title" v-if="item.title!=''?true:false">
                            <div class="rootnode">
                                <span @click="addrootNod($event,item.parentID,item.title)" v-html="rootnode"
                                    class="rootnodeone" v-show="power==1?false:true"></span>
                                {{item['title']}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="nodebutton">
                                    <span @click="addNod($event,item.codeID,item.title)" v-html="svgplus"
                                        v-show="power==1?false:true"></span>
                                    <span @click="rename($event,item.parentID,item.codeID,item.title)"
                                        v-html="Modifyname" v-show="power==1?false:true"> </span>
                                    <span @click="deleteMenu($event,item.parentID,item.codeID,item.title)"
                                        v-html="svgdel" v-show="power==1?false:true"></span>&nbsp;
                                </span>
                            </div>
                        </template>
                        <Submenu v-for="(items,indexs) in item['content']" :key='indexs' :name="indexs" class="bianju">
                            <!-- 二级节点 -->
                            <template slot="title">
                                <div class="rootnode">
                                    {{items['title']}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span class="nodebutton">

                                        <span ref="spanInput" @click="addNod($event,items.codeID,item.title)"
                                            v-html="svgplus" v-show="power==1?false:true"></span>
                                        <span @click="rename($event,item.codeID,items.codeID,items.title)"
                                            v-html="Modifyname" v-show="power==1?false:true"></span>

                                        <span @click="deleteMenu($event,item.codeID,items.codeID,items.title)"
                                            v-html="svgdel" v-show="power==1?false:true"></span>
                                    </span>
                                </div>
                            </template>
                            <!-- 三级节点 -->
                            <MenuItem v-for="(itemss,indexss) in items['content']" :key='indexss' :name="indexss"
                                @click.native='fnClick(itemss,indexss)'>

                            <div class="rootnode">
                                {{itemss['title']}}&nbsp;
                                <span class="nodebutton">
                                    <span @click="addNod($event,items.codeID,item.title)" v-html="svgplus"
                                        v-show="power==1?false:true"></span>
                                    <span @click="rename($event,items.codeID,itemss.codeID,itemss.title)"
                                        v-html="Modifyname" v-show="power==1?false:true"></span>

                                    <span @click="deleteMenu($event,items.codeID,itemss.codeID,itemss.title)"
                                        v-html="svgdel" v-show="power==1?false:true"></span>
                                </span>

                            </div>

                            </MenuItem>
                        </Submenu>
                    </Submenu>
                </Menu>
            </div>
            <div class="focuson" v-show="rightmsg">
                <div class="text-div focusonHover" v-for="(item,i) of listRows" :key="item.creator"
                    @click="listdetails(item)">

                    <!-- <p>{{title}}</p> -->
                    <p class="text-wz">{{item.prodName}}</p>
                    <p class="details">{{item.prodIntroduction}}</p>
                    <!-- <div v-show="power==1?false:true" style="margin-top:12px;"> -->
                    <!-- 产品下方按钮 -->
                    <div class="PermissionsButton">
                        <div v-if="power==1?false:true">
                            <Button class="btn-zd" @click="setKey(item.prodID,item.recommendationFlag,item.prodName)"
                                v-show="item.recommendationFlag==0?true:false">设置重点产品</Button>
                            <Button class="btn-zd" @click="cancelKey(item.prodID,item.recommendationFlag)"
                                v-show="item.recommendationFlag==1?true:false">取消重点产品</Button>
                        </div>
                        <Button class="btn-sc" @click="deleteKey(item.prodID,item.prodName,item.creator)"
                            :class="power==1?'delMargin':'btn-sc'">删除</Button>
                    </div>
                    <!-- </div> -->
                </div>
                <Page :total="totalElements" class="page" @on-change="search" :page-size="pagesize" v-show="PageShow" />
            </div>
        </div>
        <!-- 尾部 -->
        <div class="subject-cons">
            <p class="subjects">重点产品</p>
            <div class="focusons">
                <div class="text-divs focusonHover" v-for="(item,i) of this.bottomKeyList" :key="item.indexId"
                    v-show="item.infoType=='energy'?false:true">
                    <h4>{{item.infoName}}</h4>
                    <p class="text-wzs">{{item.infoIntroduction}}</p>
                    <p class="detailss bottompx" @click="listdetails(item)" style="margin-bottom: 0;">了解详情</p>

                    <Button class="btn-zds" @click="cancelKey(item.prodID)">取消重点产品</Button>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    import datam from '@/components/idc/datam.vue';

    // import treeList from '@/components/idc/treeList.vue';
    // import tail from '@/components/idc/tail';
    export default {

        components: {
            datam,
            // treeList,
            // tail,
        },
        data() {
            return {
                //分页每条切换的条数
                currentPage:0,
                pagesize: 12,
                //分页
                totalElements: 0,
                //三级目录父级id
                itemParentID: "",
                //父级名字
                parentName: "",
                //显示隐藏分页
                PageShow: false,
                //用户权限
                power: "",
                //用户id
                userID: "",

                upload: "",
                statue: 0,
                valMunt: "",
                list: {},
                listRows: [],
                title: "",
                rightmsg: true,
                parameters: [],
                bottomKeyList: [],
                activemenu: "1-1-1",
                type: [],
                popUpTitle: "",
                current:0,
                //节点树初始数据
                threeListRows: [],
                svgplus: '<svg  t="1573053042533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23090" width="200" height="200"><path d="M612.37248 411.62752V30.208h-200.74496v381.41952H30.208v200.74496h381.41952v381.41952h200.74496V612.37248h381.41952v-200.74496z" p-id="23091" fill="#1afa29"></path></svg>',
                svgdel: '<svg t="1573053918266" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23374" width="200" height="200"><path d="M896 213.333333h-170.666667V170.666667c0-72.533333-55.466667-128-128-128h-170.666666C354.133333 42.666667 298.666667 98.133333 298.666667 170.666667v42.666666H128c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h42.666667v554.666666c0 72.533333 55.466667 128 128 128h426.666666c72.533333 0 128-55.466667 128-128V298.666667h42.666667c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667zM384 170.666667c0-25.6 17.066667-42.666667 42.666667-42.666667h170.666666c25.6 0 42.666667 17.066667 42.666667 42.666667v42.666666H384V170.666667z m384 682.666666c0 25.6-17.066667 42.666667-42.666667 42.666667H298.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667V298.666667h512v554.666666z m-341.333333-426.666666c-25.6 0-42.666667 17.066667-42.666667 42.666666v256c0 25.6 17.066667 42.666667 42.666667 42.666667s42.666667-17.066667 42.666666-42.666667v-256c0-25.6-17.066667-42.666667-42.666666-42.666666z m170.666666 0c-25.6 0-42.666667 17.066667-42.666666 42.666666v256c0 25.6 17.066667 42.666667 42.666666 42.666667s42.666667-17.066667 42.666667-42.666667v-256c0-25.6-17.066667-42.666667-42.666667-42.666666z" p-id="23375"></path></svg>',
                Modifyname: '<svg t="1573055786839" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13207" width="200" height="200"><path d="M799.999887 289.356358H224.000113a31.970084 31.970084 0 0 0 0 63.940169h575.999774a31.970084 31.970084 0 0 0 0-63.940169zM799.999887 480.093133H224.000113a31.970084 31.970084 0 1 0 0 63.940169h575.999774a31.970084 31.970084 0 1 0 0-63.940169zM799.999887 670.829908H224.000113a31.970084 31.970084 0 0 0 0 63.940169h575.999774a31.970084 31.970084 0 0 0 0-63.940169z" fill="#1296db" p-id="13208"></path><path d="M948.041247 156.14406A150.750689 150.750689 0 0 0 809.164645 63.940169h-0.278158l-73.444496 1.325765a31.988147 31.988147 0 0 0 1.112631 63.965456l72.866506-1.260741a86.124156 86.124156 0 0 1 61.100792 25.449632c16.41131 16.41131 25.366546 38.234054 25.366546 61.440361v594.278716c0 23.206308-8.955236 44.956802-25.366546 61.368112a86.059133 86.059133 0 0 1-61.357275 25.377384H214.835355c-23.206308 0-45.061563-8.969686-61.472873-25.377384A86.18918 86.18918 0 0 1 127.880338 809.139358V214.860642a86.94418 86.94418 0 0 1 86.940568-86.882768h73.173562a31.970084 31.970084 0 1 0 0-63.940169H214.835355A150.82655 150.82655 0 0 0 63.940169 214.860642v594.278716A150.598966 150.598966 0 0 0 214.835355 959.825022h594.32929A150.328033 150.328033 0 0 0 959.825022 809.139358V214.860642a149.836742 149.836742 0 0 0-11.783775-58.716582z" fill="#1296db" p-id="13209"></path><path d="M415.997629 127.880338h192.001129a31.970084 31.970084 0 0 0 0-63.940169h-192.001129a31.970084 31.970084 0 0 0 0 63.940169z" fill="#1296db" p-id="13210"></path></svg>',
                rootnode: '<svg t="1573203955354" class="icon icon-root" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24783" width="200" height="200"><path d="M512 129.536238c-211.228819 0-382.463762 171.234943-382.463762 382.463762s171.234943 382.463762 382.463762 382.463762 382.463762-171.234943 382.463762-382.463762S723.228819 129.536238 512 129.536238zM602.373287 757.88513 430.639994 757.88513l0-60.159148 51.414997 0L482.054991 309.838697l-107.377566 58.410318 0-73.100902 147.599639-82.543971 27.981285 0 0 485.120816L602.373287 697.724958 602.373287 757.88513z" p-id="24784" fill="#1296db"></path></svg>'
            }
        },


        methods: {
            //分页
            search(currentPage) {
                // this.rightmsg = true;
             
                let that = this;
                that.$request({
                    methods: "get",
                    url: "/kapply/idcProduct/findProdList",
                    params: {
                        "prodClass": that.parentName,
                        "parentID": that.itemParentID,
                        "pageNum": currentPage-1,
                        "pageSize": that.pagesize
                    }
                }).then(res => {
                    that.listRows = res.data.DataRows    
                }).catch(function (error) {
                    // console.log(error)
                })
            },

            time() {
                this.$Notice.open({
                    title: this.popUpTitle,
                    duration: 5
                });
            },
            //获取用户权限
            sperUser() {

                let that = this;
                that.$request({
                    method: 'GET',
                    url: "/kapply/idc/idcIndex",
                }).then(res => {
                    if (res.data.DataRows.power == 2 || res.data.DataRows.power == 1) {
                        that.power = res.data.DataRows.power;
                        that.userID = res.data.DataRows.userID;
                    }
                })
            },

            re1lease() {
                this.$router.push("/prodIssue")

            },

            //修改节点名字
            rename(e, parentID, codeID, title) {

                this.theThree();
                e.stopPropagation();
                let that = this;
                that.$Modal.confirm({
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: '确定',
                    cancelText: '取消',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: title,
                                autofocus: true,
                                placeholder: '请输入新的名字'
                            },
                        })
                    },
                    onOk: (val) => {
                        let inputVlaue = document.querySelector(".ivu-input-default").value;
                        
                        for (let item of this.threeListRows) {
                            if (item.codeName == inputVlaue) {
                                var nametitle = inputVlaue;

                            }
                        }
                        if (nametitle==undefined) {
                            if (inputVlaue==!0) {
                            that.$request({
                                method: "POST",
                                url: "/kapply/idcCode/updateMenu",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                params: {
                                    "codeID": codeID,
                                    "parentID": parentID,
                                    "codeName": inputVlaue,
                                    'codeType': "product",
                                }
                            }).then(res => {
                                that.theThree()
                                that.popUpTitle = "修改成功"
                                that.time();

                            }).catch(function (error) {
                                that.theThree();
                            })
                        } else {
                            that.popUpTitle = "目录名字不能为空"
                            that.time();
                        }
                        } else {
                            that.popUpTitle = "目录中已经相同名字"
                            that.time();
                        }
                    },

                })

            },

            //删除节点

            deleteMenu(e, parentID, codeID, title) {
                e.stopPropagation()
                let that = this;
                // that.theThree()
                that.$Modal.confirm({
                    content: `<p>是否删除——${title}</p>`,
                    okText: '确定',
                    cancelText: '取消',
                    onOk: (val) => {
                        that.$request({
                            method: "POST",
                            url: "/kapply/idcCode/deleteMenu",
                            headers: { "Content-Type": "application/json" },
                            params: {
                                "codeID": codeID,
                                "parentID": parentID,
                                "codeName": title,
                                'codeType': "product",
                            }
                        }).then(res => {
                            if (res.data.DataRows == '0000') {
                                that.popUpTitle = "删除成功"

                                that.time();
                                that.theThree()
                            } else if (res.data.DataRows == '8801') {
                                that.popUpTitle = "该目录下有子级目录，无法删除"
                                that.time();
                            } else if (res.data.DataRows == '8802') {
                                that.popUpTitle = "当前目录下有产品，无法删除"
                                that.time();
                            } else if (res.data.DataRows == '8803') {
                                that.popUpTitle = "该目录下有草稿，无法删除"
                                that.time();
                            } else if (res.data.DataRows == '8800') {
                                that.popUpTitle = "用户无管理权限"
                                that.time();
                            }
                            //    console.log(res);

                        }).catch(error => {
                            that.popUpTitle = "删除失败"
                            that.time();

                            that.theThree()
                        })

                    },

                })

            },
            //添加根节点
            addrootNod(e, parentID, title) {
                title = ""

                e.stopPropagation();
                let that = this;
                that.$Modal.confirm({
                    okText: '确定',
                    cancelText: '取消',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                id: "inputID",
                                value: title,
                                autofocus: true,
                                placeholder: '创建一个根节点',
                            },
                        })
                    },
                    onOk: (val) => {
                        let inputVlaue = document.querySelector(".ivu-input-default").value;

                        for (let item of this.threeListRows) {
                            if (item.codeName == inputVlaue) {
                                var nametitle = inputVlaue;

                            }
                        }
                        if (nametitle == undefined) {
                            if (inputVlaue != 0) {
                                that.$request({
                                    method: "POST",
                                    url: "/kapply/idcCode/addMenu",
                                    headers: {
                                        'Content-Type': "application/json"
                                    },
                                    params: {
                                        "parentID": parentID,
                                        "codeName": inputVlaue,
                                        "codeType": "product",
                                    }
                                }).then(res => {
                                    that.theThree()
                                    that.popUpTitle = "添加成功"
                                    that.time();

                                }).catch(error => {
                                    that.theThree()
                                    that.popUpTitle = "失败"
                                    that.time();
                                })
                            } else {
                                that.popUpTitle = "名字不能为空"
                                that.time();
                            }

                        } else {
                            that.popUpTitle = "目录中已经相同名字"
                            that.time();
                        }
                    },

                })

            },

            //添加节点
            addNod(e, parentID, title) {
                title = ""
                e.stopPropagation();
                let that = this;
                // for (let item of this.threeListRows) {
                //     if (item.codeName == title) {
                //         that.popUpTitle = "目录下已有相同名字"
                //         that.time();
                //     }else{

                //     }
                // }
                that.$Modal.confirm({


                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: '确定',
                    cancelText: '取消',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                id: "inputID",
                                value: title,
                                autofocus: true,
                                placeholder: '请输入新的名字',
                            },
                        })
                    },


                    onOk: (val) => {
                        let inputVlaue = document.querySelector(".ivu-input-default").value;

                        for (let item of this.threeListRows) {
                            if (item.codeName == inputVlaue) {
                                var nametitle = inputVlaue;

                            }
                        }
                        if (nametitle == undefined) {
                            if (inputVlaue != 0) {
                                that.$request({
                                    method: "POST",
                                    url: "/kapply/idcCode/addMenu",
                                    headers: {
                                        'Content-Type': "application/json"
                                    },
                                    params: {
                                        "parentID": parentID,
                                        "codeName": inputVlaue,
                                        "codeType": "product",
                                    }
                                }).then(res => {
                                    that.theThree()
                                    that.popUpTitle = "添加成功"
                                    that.time();



                                }).catch(error => {
                                    that.theThree()
                                    that.popUpTitle = "失败"
                                    that.time();
                                })
                            } else {
                                that.popUpTitle = "名字不能为空"
                                that.time();
                            }
                        } else {
                            that.popUpTitle = "目录中已相同名字"
                            that.time();
                        }
                    },

                })

            },

            capital() {

            },

            //设置重点产品
            setKey(id, suc, name) {
                event.stopPropagation();
                console.log(this.power);

                if (this.power == 2) {

                    let that = this;
                    let prodID = { "prodID": id, }
                    that.$request({
                        method: "POST",
                        // url: "/kapply/idc/setImportant?prodID=444",
                        url: "/kapply/idcProduct/setImportant",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        // data:prodID
                        params: prodID
                    }).then(res => {
                        if (res.data.RetCode == '0000') {
                            for (let i in that.listRows) {
                                if (that.listRows[i].prodID == id) {
                                    console.log(that.listRows[i].prodID)
                                    // that.$set(that.listRows,i.recommendationFlag,3);
                                    that.listRows[i].recommendationFlag = 1;
                                    console.log(that.listRows)
                                    break;
                                }
                            }
                        }
                        console.log(res, this.listRows);

                        that.type = res.data.RetDesc;
                        that.bottomKey()
                        that.popUpTitle = `已设置为重点产品`
                        that.time();
                        // that.fnClick()

                    }).catch(function (error) {
                        // console.log(error)
                    })
                } else {
                    this.popUpTitle = "您没有权限"
                    this.time();
                }
            },

            //删除产品
            deleteKey(id, pardName, creator) {


                let that = this;
                event.stopPropagation()
                if (that.power == 2) {
                    that.userDelete(id, pardName)
                    // console.log(i);

                } else {
                    if (creator == that.userID) {
                        that.userDelete(id, pardName)

                    } else {
                        this.popUpTitle = "您只能删除自己发布的产品"
                        this.time();
                    }
                }
            },

            //把删除封装
            userDelete(id, pardName) {
                let that = this;
                let list = { 'prodID': id }
                that.$Modal.confirm({
                    content: `<p>是否删除——${pardName}</p>`,
                    okText: '确定',
                    cancelText: '取消',
                    onOk: (val) => {
                        that.$request({
                            method: "POST",
                            url: "/kapply/idcProduct/deleteProduct",
                            headers: { "Content-Type": "application/x-www-form-ulencoded" },
                            responseType: "JSON",
                            params: list
                        }).then(res => {
                            that.listRows.some((item, i) => {
                                if (item.prodID == id) {
                                    that.listRows.splice(i, 1);
                                    return true;
                                }
                            })
                            that.bottomKey()
                        })
                    },
                })
            },


            //取消重点产品
            cancelKey(parentID, suc) {
                event.stopPropagation();
                // console.log(parentID)
                let that = this;
                suc = 0;
                that.statue = suc;
                for (var i of that.listRows) {
                    // console.log(i);
                    if (i.prodId == parentID) {
                        i.recommendationFlag = suc;
                        // console.log(i.prodId);
                    }
                }
                if (that.power == 2) {
                    that.$request({
                        method: "POST",
                        url: "/kapply/idcProduct/cancelImportant",
                        headers: { "content-Type": "application/json" },
                        params: {
                            "prodID": parentID
                        }
                    }).then(res => {
                        console.log(res)
                        if (res.data.RetCode == '0000') {
                            for (let i in that.listRows) {
                                if (that.listRows[i].prodID == parentID) {
                                    console.log(that.listRows[i].prodID)
                                    // that.$set(that.listRows,i.recommendationFlag,3);
                                    that.listRows[i].recommendationFlag = 0;
                                    console.log(that.listRows)
                                    break;
                                }
                            }
                        }
                        that.bottomKey()
                        // console.log(res);
                        that.popUpTitle = "已取消重点产品"
                        that.time();

                    }).catch(error => {


                    })
                } else {
                    that.popUpTitle = "您没有权限"
                    that.time();
                }
            },

            //产品列表
            fnClick(itemss, indexss) {
                this.itemParentID = itemss.parentID
                this.parentName = itemss.title

                this.rightmsg = true;
                let that = this;
                that.$request({
                    methods: "get",
                    url: "/kapply/idcProduct/findProdList",
                    params: {
                        "prodClass": itemss.title,
                        "parentID": itemss.parentID,
                        "pageNum": 0,
                        "pageSize": this.pagesize
                    }
                }).then(res => {
                    //产品信息
                    that.listRows = res.data.DataRows
                    //产品个数
                    that.totalElements = res.data.PageInfo.totalElements;
                    res.data.DataRows.length > 0? that.PageShow = true : false;
                   

                }).catch(function (error) {
                    // console.log(error)
                })
            },

            //跳转产品详情
            listdetails(item) {

                let proId = item.prodID;
                let that = this;
                that.$request({
                    methods: "get",
                    url: "/kapply/idcProduct/findProdDetail",
                    params: { "prodID": proId }
                }).then(res => {
                    this.parameters = res.data.DataRows[0];
                    let val = window.JSON.stringify(this.parameters)
                    sessionStorage.setItem('key', val)
                    this.$router.push({
                        path: "treeDetails",
                    });
                }).catch(function (error) {

                })
            },

            //节点树
            theThree() {
                var that = this;
                that.$request({
                    method: "get",
                    url: "/kapply/idcCode/findThreeLevelMenu",
                }).then(res => {
                    const str = res.data.DataRows;
                    that.threeListRows = str;
                    that.list = {};
                    for (let i of str) {
                        if (i.parentID == 0) {
                            // this.list[i.codeID] = {
                            //     'title': i.codeName,
                            //     'content': {}
                            // }                            
                            that.$set(that.list, i.codeID, {
                                'title': i.codeName,
                                "parentID": i.parentID,
                                "codeID": i.codeID,
                                'content': {}
                            })
                            for (let j of str) {
                                if (i.codeID == j.parentID) {
                                    // this.list[i.codeID]["content"][j.codeID] = {
                                    //     'title': j.codeName,
                                    //     'content': {}
                                    // }

                                    that.$set(that.list[i.codeID]["content"], j.codeID, {
                                        'title': j.codeName,
                                        "parentID": j.parentID,
                                        "codeID": j.codeID,
                                        'content': {}
                                    })
                                    for (let x of str) {
                                        if (j.codeID == x.parentID) {
                                            // this.list[i.codeID]["content"][j.codeID]["content"][x.codeID] = {
                                            //     'title': x.codeName,
                                            //     'content': {}
                                            // }
                                            that.$set(that.list[i.codeID]["content"][j.codeID]["content"], x.codeID, {
                                                'title': x.codeName,
                                                "parentID": x.parentID,
                                                "codeID": x.codeID,
                                                'content': {}
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }).catch(err => {

                })
            },
            //加载重点产品
            bottomKey() {
                this.$request({
                    method: "GET",
                    url: "/kapply/idc/findProdByType",
                    // headers: {
                    //     "Content-Type": "application/json"
                    // },
                    params: {
                        "type": "importantProd",
                        "pageNum": 0,
                        "pageSize": 15
                    }
                }).then(res => {
                    this.bottomKeyList = res.data.DataRows;
                })

            }

        },

        created() {
            //获取用户权限
            this.sperUser()

            //加载尾部重点产品
            this.bottomKey()

            // 节点树
            this.theThree();





        },
    }
</script>
<style scoped>
    .highest {
        width: 100%;
    }

    .pigeIdc-main {
        max-width: 1200px;
        margin: 0 auto;
        height: 710px;
    }

    #scrollbar {
        height: 403px;
        width: 240px;
        border: 1px solid #ddd;
        overflow: scroll;
        font-size: 100%;
        margin-top: 30px
    }

    .treelist {
        margin: 0;
        padding: 5px;
        color: #333;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        font-family: inherit;
        vertical-align: baseline;
    }

    .focuson {
        padding: 30px 0;
        max-width: 1000px;
        display: flex;
        /* flex-wrap: wrap; */
        /* justify-content: space-around; */
        /* justify-content: flex-start; */
        flex-direction: row;
        flex-wrap: wrap;
        /* justify-items: center; */
        /* align-items: flex-start; */
        align-content: flex-start;
        height: 100%;
        transform: translateX(234px);
        overflow-y: auto;
        font-size: 16px;
        position: relative;
        top: -529px;



    }

    .focuson>div {

        width: 285px;
        height: 130px;
        padding-top: 10px;
        margin: 0 15px 20px 15px;
        text-align: center;
        border: 1px solid #dadce0;
        background: #ebf2f9;
        padding-left: 8px;
        padding-right: 8px;

    }

    .focuson>div>h4 {
        font-size: 20px;
        font-weight: bold;
        padding-left: 17px;
        padding-right: 17px;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .text-div:hover {
        border: 1px solid #00c1de;
        box-shadow: 0 0 2px #00c1de;
    }

    .text-wz {
        margin-bottom: 0;
        line-height: 19px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #171717;
        font-weight: 5;
        font-family: "宋体";
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 18px;
    }

    .text-div>button {
        transform: translatey(-27px);
    }

    .btn-zd {
        width: 100px;
        margin-left: 5px;
        border-radius: 2px;
        /* margin-top: 40px; */
        font-family: "宋体";
        border-color: #73777a !important;
        color: #73777a !important;
        font-size: 5px !important;
    }

    .btn-sc {
        width: 80px;
        border-radius: 2px;
        /* margin-left: 20px;
        margin-top: 40px; */
        font-family: "宋体";
        border-color: #73777a !important;
        color: #73777a !important;
        font-size: 5px !important;
        /* position: absolute; */
        /* bottom: ; */
    }

    .btn-zd:hover,
    .btn-sc:hover {
        background: #73777a !important;
        color: #fff !important;
    }

    .details {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box !important;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        height: 37px;
        margin-bottom: -2px;
        font-size: 13px;
    }

    .details>span:hover {
        color: blue;
    }

    >>>.ivu-menu-submenu-title {
        padding: 8px 0;
    }

    >>>.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
        padding: 8px 0 8px 60px !important;
    }

    >>>.bianju {
        margin-left: -10px !important;
    }

    .subject-cons {
        width: 100%;
        margin: 0 auto;
        line-height: 50px;
        background-color: #eefafc;
    }

    .subject-cons .subjects:before {

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

    .subject-cons .subjects {
        width: 1200px;
        margin: 0 auto;
        font-size: 16px;
        color: #00a2ca;
    }

    .focusons {
        padding: 30px 0;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        transform: translateX(-20px);
        font-size: 16px;

    }

    .focusons>div {
        float: left;
        width: 285px;
        height: 192px;
        padding-top: 18px;
        margin: 0 20px 20px 19px;
        text-align: center;
        border: 1px solid #dadce0;
        /* background: #ebf2f9; */
        padding-left: 8px;
        padding-right: 8px;
        cursor: pointer;
    }

    .focusons>div>h4 {
        font-size: 20px;
        font-weight: bold;
        padding-left: 17px;
        padding-right: 17px;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .text-divs:hover {
        border: 1px solid #00c1de;
        box-shadow: 0 0 2px #00c1de;
    }

    .text-wzs {
        margin-top: 20px;
        line-height: 23px;
        margin-bottom: 5px !important;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #171717;
        font-weight: 5;
        font-family: "宋体";
        height: 44.8px;
    }

    .detailss {
        transform: translateX(-90px);
        color: #33cde5 !important;

        margin-top: -10px !important;
        display: -webkit-box !important;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .detailss:hover {
        color: #00a2ca !important;
    }

    .text-divs>button {
        transform: translatey(-20px);
    }

    .btn-zds {
        width: 130px;
        margin-left: -20px;
        border-radius: 0;
        font-family: "宋体";
    }

    .btn-scs {
        width: 60px;
        border-radius: 0;
        margin-left: 30px;
        font-family: "宋体";
    }

    .btn-zds:hover,
    .btn-scs:hover {
        background: #73777a !important;
        color: #fff;
    }

    >>>.icon {
        width: 15px;
        height: 15px;
        margin: 0 3px;
    }

    .nodebutton {
        display: none;
    }

    .rootnode:hover>span {

        display: inline-block;
    }

    >>>.icon-root {
        margin-bottom: 2px;
        width: 17px;
        height: 17px;
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

    .none-border-t {
        border-top: none !important;
        border-bottom: none !important;
    }

    .subject-con .subject {
        width: 1200px;
        margin: 0 auto;
        font-size: 16px;
        color: #00a2ca;
        height: 40px;
        line-height: 40px;
    }

    .delMargin {
        margin-left: 0 !important;
    }

    .focusonHover:hover {
        border: 1px solid #00c1de;
        box-shadow: 0px 0px 14px 2px rgba(51, 205, 229, 0.5);

    }

    /* 权限下方按钮样式 */
    .PermissionsButton {
        width: 90%;
        display: flex;
        justify-content: space-around;
        margin: 0 10px;
        /* margin-bottom: -10px; */
        transform: translateY(28px)
    }

    /*  */
    .bottompx {
        bottom: 0 !important;
    }

    /* 分页样式 */
    .page {
        margin: 0 auto;
        justify-content: flex-end;
        height: 70px;
        position: absolute;
        bottom: 153px;
        left: 297px;
    }
</style>