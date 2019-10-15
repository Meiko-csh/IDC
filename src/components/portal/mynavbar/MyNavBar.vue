<template>
    <Menu mode="horizontal" ref="navMenu" :active-name="activeMenuName">
        <div class="width-max-1k4 narBarInnerWrapper" style="position: relative">
            <a href="#/home" class="wrapper-header-nav-logo">
                <img class="logoImg" src="@/assets/img/home/homeIcon.png">
            </a>
            <router-link to="/home" append>
            <Menu-item name="home">
                首页
            </Menu-item>
        </router-link>
            <router-link to="/join" append>
            <Menu-item name="join">
                加入我们
            </Menu-item>
        </router-link>
        <router-link to="/introduce" append>
            <Menu-item name="introduce">
                联盟介绍
            </Menu-item>
        </router-link>
        <router-link to="/achievement" append>
            <Menu-item name="achievement">
                联盟成果
            </Menu-item>
        </router-link>
        <router-link to="/innovation" append>
            <Menu-item name="innovation">
                创新孵化
            </Menu-item>
        </router-link>
        <router-link to="/trend" append>
            <Menu-item name="trend">
                联盟动态
            </Menu-item>
        </router-link>
        <router-link to="/enrollment" append>
            <Menu-item name="enrollment">
                赛事报名
            </Menu-item>
        </router-link>
        <login-info-bar></login-info-bar>
        </div>
    </Menu>
</template>



<script>
    import LoginInfoBar from './loginInfoBar/LoginInfoBar';
    export default {
        name: "MyNavBar",
        data() {
            return {
                activeMenuName: this.$store.state.menuActiveName
            }
        },
        components: {
            LoginInfoBar
        },
        mounted() {
            this.$nextTick(() => {
                //this.shop = this.$route.path.slice(1)
                //this.$refs.shop.updateActiveName()
            })
        },
        computed: {

        },
        watch:{
            activeMenuName(val, oldVal){
                console.log("a: "+val, oldVal);
            },
            '$store.state.menuActiveName': function (val) {
                this.$refs.navMenu.currentActiveName = val;
                this.$nextTick(() => {
                    this.$refs.navMenu.updateActiveName()
                })

            }

        }
    }
</script>

<style scoped>
    .logoImg {
        float: left;
        height: 40px;
        margin: 10px 34px 10px 67px;
    }
    .ivu-menu-item-selected {
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        border-bottom: 4px solid #2d8cf0;
    }

    a {
        height: 100%;
    }

    .narBarInnerWrapper li {
        height: 60px!important;
    }
</style>
