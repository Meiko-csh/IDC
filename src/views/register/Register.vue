<template>
    <div>
        <login-header></login-header>
        <div  v-bind:style="{minHeight: Height+'px'}">
        <Form ref="registerInfo" :model="registerInfo" :rules="ruleInline" inline>
        <div class="register-wrap"  :style="{marginTop: hightpercent+'%'}">
            <div  class ="background-img" ></div>
            <h3>欢迎注册中国联通5G应用创新联盟</h3>
            <div class="register-text">
                <FormItem prop="serialnumber" >
                    <Input  type="text" size="large"  class="input-width" placeholder="请输入手机号" v-model="registerInfo.serialnumber" />
                </FormItem>

                 <FormItem prop="authcode">
                        <Input type="text" id="authcode"  class="input-width1" size="large"  placeholder="请输入验证码" v-model="registerInfo.authcode" />
                     <button id="sendsms" v-on:click="sendsms('registerInfo')" v-bind:disabled = "isDisabled" type="button">发送验证码
                         <span v-show="!show" class="count">({{count}} s)</span>
                     </button>
                 </FormItem>



                  <FormItem prop="password">
                      <Input type="password" size="large"  class="input-width" placeholder="请设置您的密码" v-model="registerInfo.password" />
                  </FormItem>
                  <FormItem prop="repassword">
                      <Input  type="password" size="large"  class="input-width"  placeholder="请再次输入密码" v-model="registerInfo.repassword" />
                  </FormItem>
                <!--<button  class='register' v-on:click="register('registerInfo')" type="button">注册</button>-->
                <div class='register' v-on:click="register('registerInfo')">注册</div>
            </div>
            <div  class ="background-img2" ></div>
        </div>
        </Form>

            </div>
        <div id="loginFooter">
            <div class="footerContent">Copyright Reserved © 2019 联通5G应用创新联盟 版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京ICP备11000964号</div>
            <div class="footerContent">邮箱hqs-cu5gaia@chinaunicom.cn</div>
        </div>

    </div>
</template>
<script>
    import MyNavBar from '../../components/portal/mynavbar/MyNavBar';
    import LoginHeader from '../../components/loginHeader/LoginHeader';
    export default {
        name: "Register",
        components: {
            MyNavBar,
            LoginHeader
        },
        data() {

            const validateSerialnumber = (rule, value, callback) => {
                var n=/^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|4|5|6|7|8|9]|19[8|9])\d{8}$/
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                } else if (!n.test(this.registerInfo.serialnumber)) {
                    callback(new Error('手机号码格式错误!'));
                } else {
                    callback();
                }
            };
            const validateAuthcode = (rule, value, callback) => {
                var a=/^[0-9]*$/
                var b=/^\d{6}$/
                if (value === '') {
                    callback(new Error('请输入验证码'));
                }else if(!a.test(this.registerInfo.authcode)){
                    callback(new Error('验证码只能为数字'));
                } else if(!b.test(this.registerInfo.authcode)){
                    callback(new Error('验证码位数错误'));
                }
                else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                var b1= /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,32}$/
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else if(!b1.test(this.registerInfo.password)){
                    callback(new Error('密码为8-32位的字母、数字和特殊符号的组合'));
                }
                else {
                    if (this.registerInfo.repassword !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.registerInfo.validateField('repassword');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerInfo.repassword) {
                    callback(new Error('两次输入的密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                hightpercent: 4,
                Height: 0,
                ruleInline: {
                    serialnumber: [
                        { validator: validateSerialnumber, trigger: 'blur' }
                    ],authcode: [
                        { validator: validateAuthcode, trigger: 'blur' }
                    ],password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],repassword: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                },
                isDisabled: false,
                registerInfo:{
                    serialnumber : '',
                    authcode : '',
                    password : '',
                    repassword : ''
                },
                show: true,
                count: '',
                timer: null,
            }
        },
        mounted(){

            this.Height = document.documentElement.clientHeight -60;
            window.onresize = ()=> {this.Height = document.documentElement.clientHeight -60}
            if (document.documentElement.clientHeight>800){
                this.hightpercent=8;
            }
        },
        methods: {
            sendsms(name) {
                var that=this;
                this.$refs[name].validateField('serialnumber',(valid) => {
                        if (!valid) {
                            this.getsmscode()
                            /*
                            var telephonecode=this.registerInfo.serialnumber;
                            this.$request({
                                method: 'post',
                                url: '/auth/user/validateTel',
                                //headers: {'Content-Type': 'application/json'},
                                data: {
                                    "telephone": that.$jsencrypt(telephonecode)
                                }
                            }).then(function (response) {
                                //console.log(response);
                                //console.log(response.data.status);
                                //console.log(response.status);
                                if (response.status === 200 && response.data.status === 402) {
                                    that.$Message.error('该手机号码已经被注册,请直接登录');
                                    that.timefunc();
                                } else {
                                    that.getsmscode();

                                }
                            })
                                .catch(function (error) { // 请求失败处理
                                    console.log(error);
                                });*/


                        }
                        })
            },
            timefunc(){
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                            this.isDisabled = true
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                            this.isDisabled = false
                        }
                    }, 1000)
                }
            },
            getsmscode(){
                var that=this;
                var telephonecode=this.registerInfo.serialnumber;
                this.$request({
                    method: 'post',
                    url: '/auth/user/sendSMSCaptchaCode',
                    //headers: {'Content-Type': 'application/json'},
                    data: {
                        "telephone": that.$jsencrypt(telephonecode),
                        "type": 1

                    }
                })
                    .then(function (response) {
                        //console.log(response);
                        //console.log(response.data);
                        if (response.status === 200 && response.data.status === 200) {
                            that.$Message.success('验证码发送成功!');
                            that.timefunc();
                        } else {
                            that.$Message.error('验证码发送失败,请稍后重试');
                            that.timefunc();
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            },

            register(name) {
                var that=this.$Message;
                var that1=this.$router
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$request({
                            method: 'post',
                            url: '/auth/user/register',
                            //headers: {'Content-Type': 'application/json'},
                            data: {
                                "telephone": this.$jsencrypt(this.registerInfo.serialnumber),
                                "captchaCode": this.registerInfo.authcode,
                                "password": this.$untils.hash(this.registerInfo.password)

                            }
                        })
                            .then(function (response) {
                                //console.log(response);
                                if(response.status===200 && response.data.status==200){
                                    that.success('注册成功!');
                                    let _this=that1.push({
                                        path: '/login/password'
                                    });
                                    setTimeout(function()  {
                                        _this.end()
                                    }, 3000);
                                }else if(response.status===200 &&response.data.status==402){
                                    that.error(response.data.message)
                                }else{
                                    that.error('注册失败！')
                                }

                            })
                            .catch(function (error) { // 请求失败处理
                                console.log(error);
                            });
                    }

                });
            }
        },
        computed:{

        }
    }
</script>
<style>
    .register-text .ivu-input-large {
        font-size: 14px;
        padding: 6px 7px;
        height: 44px;
    }

    .register-wrap .ivu-form-item-error-tip {
        position: absolute;
        top: 100%;
        left: 0;
        font-size: 14px;
        line-height: 1;
        padding-top: 6px;
        color: #ed4014;
    }

    </style>
<style scoped>

    .background-img{
        width:135px;
        height:125px;
        float: left;
        background: url('../../assets/img/login/circle.png') ;
        background-position: 100% 100%;
    }
    .background-img2{
        width:135px;
        height:125px;
        float: right;
        position: absolute;
        margin:433px 0px 0px 1050px;
        background: url('../../assets/img/login/circle.png') ;
        background-position: 0% 0%;
    }
    .register-wrap{
        width:1180px;
        height:551px;
        margin:auto;
        /*margin-top: 4%;*/
        position: relative;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 30px 0px rgba(27,112,228,0.15);
    }
    .register-text{
        text-align: center;
        position: absolute;
        margin:141px 415px 0px 415px;

    }
    .input-width{
        width:350px;
    }


    h3{
        width:450px;
        height:23px;
        position: absolute;
        margin:68px 495px 50px 405px;
        font-size:24px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        line-height:26px;
    }
    input{
        width:350px;
        height:44px;
        padding:0px 10px;
        /*margin:20px 0px 20px 0px;*/
        border:1px solid rgba(231,231,231,1);
        border-radius:4px;

    }
    #authcode{
        width:190px;
        height:44px;
        margin:auto;
        vertical-align: top;
        margin-right: 20px;
        border:0px solid rgba(231,231,231,1);
        border-radius:4px;
    }
    #sendsms{
        width:140px;
        height:44px;
        background:rgba(250,250,250,1);
        border:1px solid rgba(231,231,231,1);
        border-radius:4px;
        font-size:14px;
        text-align: center;
        color:rgba(153,153,153,1);
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height: 44px;
    }
    #sendsms:hover {
        cursor: pointer;
    }
    /*button{
        width:350px;
        height:44px;
        background:linear-gradient(90deg,rgba(27,112,228,1),rgba(30,123,250,1));
        box-shadow:0px 4px 10px 0px rgba(27,112,228,0.5);
        border-radius:4px;
    }*/
    .register{
        width:350px;
        height:44px;
        background:linear-gradient(90deg,rgba(27,112,228,1),rgba(30,123,250,1));
        box-shadow:0px 4px 10px 0px rgba(27,112,228,0.5);
        border-radius:4px;
        margin-top: 45px;
        text-align: center;
        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height: 44px;
    }
    .register:hover {
        cursor: pointer;
    }
    #loginFooter {
        width: 100%;
        height: 60px;
        position: relative;
        background-color: #F7F8FA;
        bottom:0px;
        padding: 10px 0 10px 0;
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        font-weight: normal;
        color: #909090;
    }

    .footerContent {
        text-align: center;
    }
    .myCarousel {
        height: 3300px;
        /*background-color: aquamarine;*/
    }

    /*页脚文字居中*/
    .layout-footer-center {
        text-align: center;
    }

    /*layout背景色*/
    .ivu-layout {
        background-color: #fff;
    }

</style>
