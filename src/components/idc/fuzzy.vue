<template>
    <div>

        <div class="outBox" @click="fuzzy($event)">
            <!-- @blur='focusq' -->
            <input type="text" name="" id="" class="idc-fuzzt" @input='search' v-model="opscontent"
                @change="opscontentchange" >
            <div class="fuzztList" v-show="opsfous">

                <div v-for="(item,i) of item" :key="item.id" class="ops" @click="slect(i)">
                    <p>{{item.name}}</p>
                    <p>电话:{{item.phone}}</p>
                    <p>邮箱:{{item.email}}</p>
                    <p>部门:{{item.dept}}</p>
                </div>
            </div>
            <div class="div-small div-small-three"><small v-show="opscontentShow">此项不能为空</small></div>

        </div>


    </div>
</template>
<script>
    import { request } from 'http'
    export default {
        props: ['tasks'],
        data() {
            return {
                IndexSubscript: 1,
                opsfous: false,
                //姓名
                name: '',
                //手机号
                phone: '',
                //邮箱
                email: '',
                //部门
                dept: '',
                //id
                personID: 123,
                address: '',
                item: [],
                opscontentShow: false,
                num: 1,

            }
        },
        watch: {


            // opscontentt:function(){
            //     this.opscontent=this.tasks
            //     console.log( this.opscontent);

            // }
        },

        created() {


            // this.opscontent=this.inputName

        },
        mounted() {
            this.opscontent = this.tasks
            console.log(this.tasks, '000000')
        },

        methods: {
            // opscontentchange() {

            //     this.opscontentShow = this.opscontent == "" ? true : false;
            //     this.opscontent=this.tasks
            //     console.log(this.tasks);

            //     console.log(123);
            //     ++this.num;

            // },
  
            opscontentchange() {
                this.opscontentShow = this.opscontent == "" ? true : false;
            },
            // trgger(){
            //     this.$emit('lickserch', this.opscontent)
            // },
            search() {
                this.$emit('lickserch', this.opscontent)
                if (this.opscontent != "") {
                    // this.opsfous = true
                    let that = this;
                    that.$request({
                        methods: 'get',
                        url: '/auth/user/getUserInfoBySearch',
                        // headers:{
                        //     'Content-Type':'application/json;charset=utf-8'
                        // },
                        params: {
                            "orgId": 99,
                            "inputText": that.opscontent
                        },
                    }).then(function (res) {


                        if (res.data.length == 0) {
                            that.opsfous = false
                        } else {
                            that.opsfous = true
                        }
                        that.item = res.data
                        // this.name=res.data.name;
                        // console.log(res.data)
                    }).catch(function (err) {
                        console.log(err);
                        console.log("退出登录请求后台失败");
                    });
                } else {
                    this.opsfous = false
                }
            },

            // focusq() {
            //     this.opsfous = false
            // },
            slect(i) {
                this.$emit('lickserch', 19089865343)
                this.opscontent = this.item[i].name;
                this.personID = this.item[i].id;
                this.dept = this.item[i].dept;
                this.phone = this.item[i].phone;
                this.email = this.item[i].email;
                this.$emit('fyzzyID', this.opscontent, this.personID, this.dept, this.phone, this.email)
                this.opsfous = false;
            },

            fuzzy(e) {
                let funFuzzy = document.querySelector(':not(outBox)');
                //  funFuzzy.onclick=function(e){
                //     e.stopPropagation();
                //    this.opsfous = false
                //      console.log(123)
                //  }
                funFuzzy.onclick = e => {
                    e.stopPropagation();
                    this.opsfous = false
                };
            }
        }
    }
</script>
<style>
    .outBox {
        width: 230px;
        height: auto;
        margin-left: -10px;
    }

    /* overflow: hidden; */
    .idc-fuzzt {
        width: 188px;
        height: 32px;
        /* width: 100%; */
        display: inline-block;
        line-height: 1.5;
        padding: 5px 7px;
        font-size: 12px;
        border: 1px solid #dcdee2;
        border-radius: 2px;
        color: #999;
        position: relative;
    }

    .idc-fuzzt:hover {
        border-color: #00c1de !important;
    }

    .fuzztList {
        display: block;
        position: relative;
        width: 120%;
        background: #fff;
        border: 1px solid #dcdee2;
        margin: 0px;
        z-index: 1;
        height: 300px;
        overflow-y: auto;
        padding-top: 10px;
    }

    .ops {
        color: #999;
        /* width: 100%; */
        margin: 0 12px;
        margin-bottom: 5px;
        line-height: 20px;
        padding-bottom: 10px;
        cursor: pointer;
        border-bottom: 1px solid #e6e6e6;
        word-break: break-all;
        word-wrap: break-word;
    }

    .ops:hover {
        color: #67daec;
        cursor: pointer
    }

    .ops p {
        margin-bottom: 5px;
        font-size: 14px !important;
        font-family: "宋体";
        word-wrap: break-word;
    }

    .div-small {

        height: 17px;
        line-height: 10px;
        font-size: 16px;
        color: #f50f50;



    }

    .div-small-three {
        line-height: 18px;
    }
</style>