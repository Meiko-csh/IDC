<template>
    <div id="loginPage">
        <login-header is-show-login="true"></login-header>
        <div id="loginContent">
            <Row id="contentWrap">
                <i-col id="wrapCon1" span="12">
                    <div id="con1Img">
                        <div id="con1ImgTitle1">2019中国联通</div>
                        <div id="con1ImgTitle2">5G应用创新生态大会</div>
                        <div id="con1ImgTitle3">——中国联通5G应用创新联盟会员大会</div>
                    </div>
                </i-col>
                <i-col id="wrapCon2" span="12">
                    <div id="con2Form">
                        <div>
                            <div id="formRow1Div1">账号密码登录</div>
                            <router-link to="/login/authcode">
                                <div id="formRow1Div2"><i id="icongengduo1" class="iconfont icongengduo1"></i>短信快捷登录</div>
                            </router-link>
                        </div>
                        <input id="account"
                               :class="[ isUserNameAlarm ? 'userNameAlarm' : 'userNameNotAlarm' ]"
                               placeholder="请输入手机号"
                               v-model="userName"
                               @focus='inputFocus'
                        ></input>
                        <div>
                            <input
                                id="authCode"
                                :class="[ isPasswordAlarm ? 'passwordAlarm' : 'passwordNotAlarm' ]"
                                type='password'
                                placeholder="请输入密码"
                                v-model="password"
                                @focus='inputFocus'
                            ></input>
                        </div>
                        <div id="alarm" :class="[ isAlarm ? '' : 'alarmHide' ]">{{ alarmText }}</div>
                        <div id="forgetPassword">忘记密码</div>
                        <div id="loginSubmit" v-on:click="login">登录</div>
                        <div id="register">
                            <router-link to="/register">免费注册</router-link>
                        </div>
                    </div>
                </i-col>
            </Row>
        </div>
        <div id="loginFooter">
            <div class="footerContent">Copyright Reserved © 2019 联通5G应用创新联盟 版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京ICP备11000964号</div>
            <div class="footerContent">邮箱hqs-cu5gaia@chinaunicom.cn</div>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>

</template>

<script>
    import LoginHeader from '../../components/loginHeader/LoginHeader';

    export default {
        components: {
            LoginHeader
        },
        data () {
            return {
                isActive: false,
                textContent: '发送验证码',
                userName: '',
                password: '',
                isUserNameAlarm: false,
                isPasswordAlarm: false,
                isAlarm: false,
                alarmText: '',
                spinShow: false
            }
        },
        mounted(){
            console.log(this.$store.state);
        },
        methods: {
            sendAuthCode: function (event) {
                if(this.isActive === true){
                    return;
                }
                this.$request({
                    method:'post',
                    url:'/auth/user/sendSMSCaptchaCode',
                    //headers: {'Content-Type': 'application/json'},
                    data:{
                        "telephone":"18615529081",
                        "type":1
                    }
                }).then(function (res) {
                    console.log(res);

                });
                // 发送验证码
                this.$set(this, 'isActive', true);
                let time = 60;
                this.$set(this, 'textContent', time);

                const handler = setInterval(function(vue){
                    if(time === 0) {
                        clearInterval(handler);
                        vue.$set(vue, 'isActive', false);
                        vue.$set(vue, 'textContent', '发送验证码');
                        return;
                    }
                    time--;
                    vue.$set(vue, 'textContent', time);

                }, 1000, this);

            },
            login: function (userId, password) {

                if(!this.userName) {
                    this.isUserNameAlarm = true;
                }
                if(!this.password) {
                    this.isPasswordAlarm = true;
                }
                if(this.isUserNameAlarm || this.isPasswordAlarm) {
                    this.isAlarm = true;
                    this.alarmText = '请输入用户名和密码'
                    return;
                }
                this.spinShow = true;
                const that = this;
                this.$request({
                    method: 'post',
                    url: '/auth/user/login',
                    headers: {
                        //'Access-Control-Expose-Headers': 'Authorization'
                        //'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: {
                        userName: this.$jsencrypt(this.userName),
                        //userName: this.userName,
                        password: this.$untils.hash(this.password)
                    }
                }).then(function (res) {
                    if( res.data && res.data.succeed === true){
                        // 登录
                        that.$store.dispatch(
                            'login',
                            {
                                user: res.data,
                                token: res.headers.authorization
                            }
                        );
                        //let redirect = decodeURIComponent(this.$route.query.redirect || '/home');
                        that.$router.push({
                            path: '/home'
                        })
                    }else {
                        that.$Notice.error({
                            title: '登录系统失败'
                        });
                        that.spinShow = false;
                        return;
                    }
                });
                //  加密
                /* const salt = 'FO2NV9JX6OIA8PO7';
                const hash = crypto.createHash('md5');
                hash.update(password + salt);
                let hashPassword = hash.digest('hex');
                console.log(hashPassword); */

            },
            inputFocus: function (event) {
                if(event.currentTarget.id === 'account') {
                    this.isUserNameAlarm = false;
                }
                if(event.currentTarget.id === 'authCode') {
                    this.isPasswordAlarm = false;
                }
                this.isAlarm = false;
            }
        }
    }
</script>

<style scoped>
    #loginPage {
        height: 100%;
    }
    #loginContent {
        width: 1200px;
        height: 480px;
        overflow: hidden;
        z-index: 6;
        position: relative;
    //top: 60px;
    //bottom: 60px;
        top: calc(50% - 300px);
        left: calc(50% - 600px);
    }
    #contentWrap {
        height: 480px;
        top: calc(50% - 240px);
    }
    #wrapCon1 {
        height: 100%;
        border-right: 1px solid #E7E7E7;
    }
    #con1Img {
        position: absolute;
        width: 461px;
        height: 365px;
        right: 108px;
        top: 69px;
        background: url("../../assets/img/login/loginBg.png") no-repeat center center;
        background-size:auto 100%;
        -moz-background-size: 100% 100%;
        padding-left: 30px;
        padding-top: 18px;
    }
    #con1ImgTitle1 {
        position: absolute;
        top: -29px;
        font-size: 20px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(153,153,153,1);
    }
    #con1ImgTitle2 {
        width: 461px;
        height: 48px;
        font-size: 48px;
        line-height: 48px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(34,34,34,1);
    }
    #con1ImgTitle3 {
        font-size: 22px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(51,51,51,1);
    }
    #wrapCon2 {
        height: 100%;
    }
    #con2Form {
        position: absolute;
        height: 400px;
        width: 398px;
        padding-top: 40px;
        padding-left: 30px;
        margin-left: 125px;
        top: calc(50% - 200px);
        cursor: pointer;
    }
    #con2Form:hover {
        box-shadow:0px 0px 30px 0px rgba(27,112,228,0.3);
        border-radius:0px 0px 6px 6px;
    }
    #formRow1Div1 {
        display: inline-block;
        font-size: 28px;
        line-height: 42px;
        font-family:SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(34,34,34,1);
    }
    #formRow1Div2 {
        display: inline-block;
        position: absolute;
        right: 30px;
        font-size: 16px;
        line-height: 42px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(27,112,228,1);
    }
    #formRow1Div2:hover {
        cursor: pointer;
    }
    #account {
        width: 338px;
        height: 44px;
        border-radius:4px;
        margin-top: 58px;
        padding-left: 14px;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        //color: rgba(204,204,204,1);
    }
    .userNameAlarm {
        border: 1px solid red;
    }
    .userNameNotAlarm {
        border: 1px solid rgba(231,231,231,1);
    }
    #authCode {
        display: inline-block;
        width: 338px;
        height: 44px;
        border-radius: 4px;
        margin-top: 16px;
        padding-left: 14px;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
    }
    .passwordAlarm {
        border: 1px solid red;
    }
    .passwordNotAlarm {
        border: 1px solid rgba(231,231,231,1);
    }
    .authCodeBtn {
        display: inline-block;
        position: absolute;
        right: 30px;
        width: 128px;
        height: 44px;
        line-height: 44px;
        background: rgba(250,250,250,1);
        border: 1px solid rgba(231,231,231,1);
        border-radius: 4px;
        margin-top: 16px;
        text-align: center;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(204,204,204,1);
        cursor: pointer;
    }
    .active {
        display: inline-block;
        position: absolute;
        right: 30px;
        width: 128px;
        height: 44px;
        line-height: 44px;
        box-shadow: 0px 4px 10px 0px rgba(27,112,228,0.5);
        border-radius: 4px;
        margin-top: 16px;
        text-align: center;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        background:linear-gradient(90deg,rgba(27,112,228,1),rgba(30,123,250,1));
        color:rgba(255,255,255,1);
        cursor: pointer;
    }
    .userNameAlarm {
        border: 1px solid red;
    }
    .passwordAlarm {
        border: 1px solid red;
    }
    .alarmHide {
        display: none;
    }
    #alarm {
        margin-top: 15px;
        font-size:14px;
        position: absolute;
        left: 0px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:red;
    }
    #forgetPassword {
        margin-top: 15px;
        font-size:14px;
        position: absolute;
        right: 30px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    #loginSubmit {
        width:338px;
        height:44px;
        background:linear-gradient(90deg,rgba(27,112,228,1),rgba(30,123,250,1));
        box-shadow:0px 4px 10px 0px rgba(27,112,228,0.5);
        border-radius:4px;
        margin-top: 50px;
        text-align: center;
        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height: 44px;
    }
    #loginSubmit:hover {
        cursor: pointer;
    }
    #register {
        margin-top: 10px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(27,112,228,1);
    }
    #loginFooter {
        width: 100%;
        height: 60px;
        background-color: #F7F8FA;
        position: absolute;
        bottom: 0px;
        padding: 10px 0 10px 0;
        font-family: SourceHanSansCN-Regular;
        font-size: 12px;
        font-weight: normal;
        color: #909090;
    }

    .footerContent {
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
</style>
