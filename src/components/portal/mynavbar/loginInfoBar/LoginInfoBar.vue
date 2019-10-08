<template>
    <div>
        <div id="loginBtnBar" :class="{ loginBtnBarHide: this.$store.state.isLogin }">
            <span><router-link to="/login/authcode">登录</router-link></span>
            <span> | </span>
            <span><router-link to="/register">注册</router-link></span>
        </div>
        <div id="loginInfoBar" :class="{ loginInfoBarHide: !this.$store.state.isLogin }">
            <Badge :count=this.messageCount id="badge" :class="[(this.$store.state.isVip==='1') ? 'badgeVip':'badgeNotVip']">
                <router-link to="/notice">
                    <i id="iconnotice-select" class="iconfont iconnotice-select"></i>
                </router-link>
            </Badge>
            <div id="huiyuan" :class="{ huiyuanHide: (this.$store.state.isVip==='1') }">
                <router-link to="/agreement">
                    <div class="iconWrapDiv">
                        <i id="iconhuiyuan" class="iconfont iconhuiyuan"></i>
                    </div>
                    <div class="textCenter1">成为会员</div>
                </router-link>
            </div>
            <div id="user">
                <Dropdown style="height: 40px;" placement="bottom-start" @on-click="selectAction">
                    <a href="javascript:void(0)">
                        <div class="iconWrapDiv">
                            <i id="icontouxiang" class="iconfont icontouxiang"></i>
                        </div>
                        <div class="textCenter1">{{ this.$store.state.user.data ? this.$store.state.user.data.userName : '' }}</div>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item name="userName"><Icon type="md-person" /> {{ this.$store.state.user.data ? this.$store.state.user.data.telephone : '' }}</Dropdown-item>
                        <Dropdown-item name="userInfo" :divided=true :click="editUserInfo"><Icon type="md-settings" /> 个人信息</Dropdown-item>
                        <Dropdown-item name="loginOut" :click="loginOut"><Icon type="md-log-out" /> 退出</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "LoginInfoBar",
        props: [
            "isLogin",
            "isVip"
        ],
        data () {
            return {
                messageCount: 0
            }
        },
        created() {
            if(this.$store.state.isLogin) {
                const that = this;
                setInterval(function () {
                    that.$request({
                        method: 'get',
                        url: '/log/message/queryMessageCount'
                    }).then(function (res) {
                        if( res.data && res.data.succeed === true){
                            that.messageCount = res.data.count;
                        }
                    });
                },300000)
            }
        },
        mounted: function(){

        },
        methods: {
            selectAction: function(action){
                if(action === "loginOut"){
                    this.loginOut();
                }else if(action === "userInfo"){
                    this.editUserInfo();
                    return;
                }else {
                    //  TODO
                    return;
                }
            },
            loginOut: function (userId) {
                // debugger
                // 登出
                this.$store.dispatch(
                    'loginOut',
                    {

                    }
                )
                this.$router.push({
                    path: '/login/authcode'
                })
            },
            editUserInfo: function () {
                // debugger
                this.$router.push({
                    path: '/user'
                })
            }
        }
    }
</script>
<style>
    .ivu-badge-count {
        top: -0.5em;
    }
    .ivu-select-dropdown {
        top: 100px;
    }
    .ivu-dropdown-rel {
        height: 40px;
    }
</style>
<style scoped>
    #loginInfoBar {
        position: absolute;
        right: 0px;
        height: 60px;
        width: 410px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(27,112,228,1);
    }
    #badge {
        position: absolute;
        display: inline-block;
        height: 40px;
        top: 10px;
        line-height: 40px;
    }
    .badgeVip {
        right: 180px;
    }
    .badgeNotVip {
        right: 308px;
    }
    .iconnotice-select {
        font-size: 26px;
        height: 100%;
        line-height: 40px;
    }
    .iconWrapDiv {
        position: absolute;
        height: 40px;
        line-height: 40px;
    }
    #huiyuan {
        position: absolute;
        height: 40px;
        width: 90px;
        top: 10px;
        right: 169px;

    }
    #iconhuiyuan {
        font-size: 26px;
        height: 100%;
        line-height: 40px;
    }
    #user {
        position: absolute;
        height: 40px;
        width: 90px;
        top: 10px;
        right: 53px;
    }
    #icontouxiang {
        font-size: 26px;
        height: 100%;
        line-height: 40px;
    }
    .textCenter1 {
        position: absolute;
        height: 40px;
        width: 100px;
        line-height: 40px;
        left: 30px;
    }
    a {
        height: 40px;
    }
    #loginBtnBar {
        position: absolute;
        right:83px;
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(27,112,228,1);
    }
    .loginBtnBarHide {
        display: none;
    }
    .loginInfoBarHide {
        display: none;
    }
    .huiyuanHide {
        display: none;
    }
</style>
