<template>
    <div id="header">
        <router-link to="/home"><div id="logo"></div></router-link>
        <div id="loginLink" v-if="!isShowLogin">
            我已注册，现在就
            <span id="loginBtn">
                <router-link to="/login/authcode">登录</router-link>
            </span>
        </div>
        <div id="backLink" v-if="isShowBack">
            <router-link to="/home"><span class="backBtn">返回首页</span></router-link>
             |
            <router-link to="/join"><span class="backBtn">加入我们</span></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "LoginHeader",
        props: [
            "isShowLogin",
            "isShowBack"
        ]
    }
</script>
<style scoped>
    #header {
        width: 100%;
        background-color: #1E1E1E;
        height: 60px;
        position: relative;
        top: 0px;
    }
    #loginLink {
        position: absolute;
        height: 60px;
        line-height: 60px;
        right: 84px;
        font-size: 14px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 600;
        color: #999999;
    }
    #backLink {
        position: absolute;
        height: 60px;
        line-height: 60px;
        right: 84px;

    }
    #loginBtn {
        cursor: pointer;
        color: #1B70E4;
        font-size:16px;
        font-weight: 600;
    }
    .backBtn {
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    #logo {
        position: absolute;
        height: 100px;
        width: 300px;
        top: -20px;
        background: url("../../assets/img/login/loginLogo.png") no-repeat center center;
        background-size:auto 100%;
        -moz-background-size: 100% 100%;
    }
</style>
