<template>
    <div id="viewContainer">
        <div id="userWrap">
            <div id="userLeft">
                <div id="imgLogo"></div>
                <div id="userName">中国联通</div>
                <div
                    id="userBtn"
                    :class="[isUserBtnActive?'userBtnActive':'userBtn']"
                    @click="btnClick"
                >
                    <i id="iconxiaorenx" class="iconfont iconxiaorenx" />&nbsp;&nbsp;&nbsp;账号信息
                </div>
                <div
                    id="memberBtn"
                    :class="[isMemberBtnActive?'memberBtnActive':'memberBtn']"
                    @click="btnClick"
                >
                    <i id="iconhuiyuan" class="iconfont iconhuiyuan1" />&nbsp;&nbsp;&nbsp;会员信息
                </div>
            </div>
            <div :class="['userRight', isShowUser?'':'hideUser']">
                <div class="textTitle">账号信息</div>
                <div class="userList">
                    <Row class="userRow">
                        <Col class="userCol text1" span="5">上次登录时间：</Col>
                        <Col class="userCol text2" span="14">{{ this.$store.state.user.data.lastLoginTime | formatDate('YYYY-MM-DD HH:mm') }}</Col>
                        <Col class="userCol" span="5">

                        </Col>
                    </Row>
                    <Row class="userRow">
                        <Col class="userCol text1" span="5">手机号：</Col>
                        <Col class="userCol text2" span="14">{{ this.$store.state.user.data.telephone }}</Col>
                        <Col class="userCol" span="5">
                            <div class="editBtnDisable">修改</div>
                        </Col>
                    </Row>
                    <Row class="userRow">
                        <Col class="userCol text1" span="5">密码：</Col>
                        <Col class="userCol" span="14"><span class="colText">{{ text1 }}</span></Col>
                        <Col class="userCol" span="5">
                            <div class="editBtn" @click="modal = true">修改</div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div :class="['memberRight', isShowMember?'':'hideMember']">
                <div class="text2">会员信息</div>
                <div class="memberList">账号信息</div>
            </div>
        </div>
        <Modal v-model="modal" width="520" class="editPasswordModal" :mask-closable=false>
            <div class="modalText1">设置密码</div>
            <div  v-if="hasPwd" class="modalText2">原密码<label class="labelAlarm">{{ alarmText1 }}</label></div>
            <Input v-if="hasPwd"
                :class="[ 'modalInput', isPasswordAlarm ? 'passwordAlarm' : '' ]"
                type="password"
                v-model="password"
                size="large"
                placeholder="请输入原密码"
            />
            <div class="modalText2">新密码<label class="labelAlarm">{{ alarmText2 }}</label></div>
            <Input
                :class="[ 'modalInput', isNewPwd1Alarm ? 'newPwd1Alarm' : '' ]"
                type="password"
                v-model="newPwd1"
                size="large"
                :placeholder="text3"
            />
            <div class="modalText2">确认新密码<label class="labelAlarm">{{ alarmText3 }}</label></div>
            <Input
                :class="[ 'modalInput', isNewPwd2Alarm ? 'newPwd2Alarm' : '' ]"
                type="password"
                v-model="newPwd2"
                size="large"
                :placeholder="text4"
            />
            <div slot="footer">
                <Button type="info" size="large" long :loading="modal_loading" @click="editPassword">保存</Button>
            </div>
        </Modal>
        <Modal
            v-model="editPasswordResult"
            :closable=false
            :footer-hide=true
            :mask-closable=false
            width="380"
            height="240"
        >
            <div class="resultContent">
                <div class="result1">

                </div>
                <div class="result2"></div>
                <div class="resultText1">修改密码成功</div>
                <div class="resultText2">{{ timeText }} 秒后跳转至 <span class="loginText" @click="goLogin">登录</span></div>
            </div>
        </Modal>
    </div>

</template>

<script>

    export default {
        components: {
        },
        data () {
            return {
                isUserBtnActive: true,
                isMemberBtnActive: false,
                isShowUser: true,
                isShowMember: false,
                modal: false,
                modal_loading: false,
                password: '',
                newPwd1: '',
                newPwd2: '',
                isPasswordAlarm: false,
                isNewPwd1Alarm: false,
                isNewPwd2Alarm: false,
                alarmText1: '',
                alarmText2: '',
                alarmText3: '',
                editPasswordResult: false,
                timeText:10,
                handler: null,
                hasPwd: this.$store.state.user.data.hasPwd === '0' ? false : true,
                text1: this.$store.state.user.data.hasPwd === '0' ? '未设置' : '已设置',
                text2: this.$store.state.user.data.hasPwd === '0' ? '设置' : '修改',
                text3: this.$store.state.user.data.hasPwd === '0' ? '请输入密码' : '请输入新密码',
                text4: this.$store.state.user.data.hasPwd === '0' ? '请再次输入密码' : '请再次输入新密码',
                text5: this.$store.state.user.data.hasPwd === '0' ? '设置' : '修改'
            }
        },
        mounted(){
            console.log(this.$store.state);
        },
        methods: {
            btnClick: function (event) {
                // debugger
                if(event.currentTarget.id === 'userBtn'){
                    this.isUserBtnActive = true;
                    this.isMemberBtnActive = false;
                    this.isShowUser = true;
                    this.isShowMember = false;
                }else if(event.currentTarget.id === "memberBtn"){
                    this.isUserBtnActive = false;
                    this.isMemberBtnActive = true;
                    this.isShowUser = false;
                    this.isShowMember = true;
                }
            },
            editPassword () {
                debugger
                if(this.hasPwd){
                    if(!this.password){
                        this.isPasswordAlarm = true;
                        this.alarmText1 = '请输入原密码'
                        return;
                    }
                }

                if(!this.newPwd1){
                    this.isNewPwd1Alarm = true;
                    this.alarmText2 = '请输入新密码'
                    return;
                }
                if(!this.newPwd2){
                    this.isNewPwd2Alarm = true;
                    this.alarmText3 = '请再次输入新密码'
                    return;
                }
                if(this.newPwd1 != this.newPwd2){
                    this.isNewPwd2Alarm = true;
                    this.alarmText3 = '两次输入新密码不一致'
                    return;
                }
                this.modal_loading = true;
                const that = this;
                let url = '';
                let data = {};
                if(this.hasPwd){
                    url = '/auth/user/changePwd';
                    data = {
                        userName: this.$jsencrypt(this.$store.state.user.data.userName),
                        password: this.$untils.hash(this.password),
                        newPwd: this.$untils.hash(this.newPwd1)
                    }
                }else{
                    url = '/auth/user/initPassword';
                    data = {
                        userName: this.$jsencrypt(this.$store.state.user.data.userName),
                        password: this.$untils.hash(this.newPwd1)
                    }
                }
                this.$request({
                    method: 'post',
                    url: url,
                    headers: {
                        //'Access-Control-Expose-Headers': 'Authorization'
                        //'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data
                }).then(function (res) {
                    if( res.data && res.data.succeed === true){
                        that.modal_loading = false;
                        that.modal = false;
                        //that.$Notice.success('修改密码成功');
                        that.editPasswordResult=true;
                        let time = 10;
                        that.handler = setInterval(function(vue){
                            if(time === 0) {
                                clearInterval(that.handler);
                                that.$store.dispatch('loginOut');
                                that.$router.push('/login/password');
                                return;
                            }
                            time--;
                            that.timeText = time;

                        }, 1000, that);
                    }else {
                        that.$Notice.error({
                            title: '修改密码失败',
                            desc: res.data.message || '请联系系统管理员'
                        });
                        that.modal_loading = false;
                        //that.modal = false;
                        return;
                    }
                });
            },
            goLogin: function () {
                clearInterval(this.handler);
                this.$store.dispatch('loginOut');
                this.$router.push('/login/password');
            }
        }
    }
</script>

<style scoped>
    #routerView {
        height: calc(100% - 60px)
    }
    #userWrap {
        min-width: 1200px;
        width: 1200px;
        //height: 480px;
        height: calc(100% - 60px);
        position: relative;
        left: calc(50% - 600px);
        //top: calc(50% - 240px);
        top: 30px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    }
    #userLeft {
        position: absolute;
        left: 0px;
        width: 240px;
        height: 100%;
        background:rgba(248,248,248,1);
    }
    #imgLogo {
        width: 120px;
        height: 120px;
        position: absolute;
        left: 60px;
        top: 30px;
        box-sizing: content-box;
        background:url(../../assets/img/home/homeIcon.png) no-repeat center center/cover;
        background-size: 80%;
        border-radius: 50%;
        box-shadow:0px 0px 24px 0px rgba(27,112,228,0.3);

    }
    #userName {
        position: absolute;
        top: 170px;
        width: 240px;
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(34,34,34,1);
        text-align: center;
    }
    .userBtn {
        width: 240px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size:16px;
        font-family:Source Han Sans CN;
        color:rgba(102,102,102,1);
        font-weight:400;
        margin-top: 230px;
        cursor: pointer;
    }
    .userBtnActive {
        background:rgba(255,255,255,1);
        border-left: 4px solid rgba(27,112,228,1);
        line-height: 70px;
        text-align: center;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(27,112,228,1);
        margin-top: 230px;
        cursor: pointer;
    }
    .memberBtn {
        width: 240px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size:16px;
        font-family:Source Han Sans CN;
        color:rgba(102,102,102,1);
        font-weight:400;
        cursor: pointer;
    }
    .memberBtnActive {
        background:rgba(255,255,255,1);
        border-left: 4px solid rgba(27,112,228,1);
        line-height: 70px;
        text-align: center;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(27,112,228,1);
        cursor: pointer;
    }
    .userRight {
        position: absolute;
        right: 0px;
        width: 960px;
        height: 70px;
        padding-left: 50px;
        padding-right: 50px;
    }
    .hideUser {
        display: none;
    }
    .textTitle {
        margin-top: 20px;
        height: 70px;
        line-height: 70px;
        font-size:26px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(34,34,34,1);
    }
    .text1 {
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .text2 {
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    .userRow {
        height: 90px;
        border-bottom: 1px solid rgba(238,238,238,1);
    }
    .userCol {
        height: 90px;
        line-height: 90px;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
    }
    .editBtn {
        width:160px;
        height:50px;
        line-height: 50px;
        background:rgba(27,112,228,1);
        border-radius:2px;
        margin-top: 20px;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        cursor: pointer;
    }
    .editBtnDisable {
        width:160px;
        height:50px;
        line-height: 50px;
        background:rgba(231,231,231,1);
        border-radius:2px;
        margin-top: 20px;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(102,102,102,1);
        text-align: center;
        cursor: pointer;
    }
    .colText {
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(27,112,228,1);
    }
    /* @@@ */
    .memberRight {
        padding-left: 50px;
        padding-right: 50px;
        position: absolute;
        right: 0px;
        width: 960px;
        height: 70px;
        display: none;
    }
    .hideMember {
        display: none;
    }
    .modalText1 {
        font-size:20px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(0,0,0,1);
        text-align: left;
    }
    .modalText2 {
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .modalInput {
        height: 50px;
        border-radius: 0px;
    }
    .passwordAlarm {
        border: 1px solid red;
    }
    .newPwd1Alarm {
        border: 1px solid red;
    }
    .newPwd2Alarm {
        border: 1px solid red;
    }
    .labelAlarm {
        margin-left: 60px;
        font-size: 14px;
        color: red;
    }
    .editPasswordResult {
        height: 240px;
        width: 380px;
        position: absolute;
        left: calc(50% - 190px);
        top: calc(50% - 120px);
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 16px 0px rgba(0, 0, 0, 0.2);
        padding-top: 40px;
    }
    .resultSvg {
        font-size: 60px;
        color: #52c41a;
        text-align: center;
        margin-bottom: 20px;
    }
    .iconchenggong {
        font-size: 70px;
    }
    .loginText {
        cursor: pointer;
        color: #1B70E4;
        font-size:16px;
        font-weight: 600;
    }
    .resultText1 {
        margin-top:30px;
        font-size:20px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(102,102,102,1);
        text-align: center;
    }
    .resultText2 {
        margin-top: 15px;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
        text-align: center;
        margin-bottom: 20px;
    }
    .result1 {
        position: relative;
        width: 70px;
        height: 70px;
        background:url(../../assets/img/user/result1.png) no-repeat center center/cover;
        animation:circling 1.5s;
    }
    @keyframes circling {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .result2 {
        position: absolute;
        left: calc(50% - 20px);
        top: 55px;
        width: 40px;
        height: 40px;
        background:url(../../assets/img/user/result2.png) no-repeat center center/cover;
        animation:right 1.5s;
    }
    @keyframes right {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
    .resultContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 24px;
    }
</style>
<style>
    .editPasswordModal .ivu-input-large {
        height: 48px;
        border-radius: 0px;
    }
    .editPasswordModal .ivu-btn-large {
        height:50px;
        background:rgba(27,112,228,1);
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        border-radius:2px;
        border: 0px;
        margin-bottom: 20px;
    }
    .editPasswordModal .ivu-modal-body {
        padding-top: 20px;
        padding-left: 50px;
        padding-right: 50px;
    }
    .editPasswordModal .ivu-modal-footer {
        border-top: 0px;
        padding-left: 50px;
        padding-right: 50px;
    }
</style>
