import Vue from 'vue';
import VueRouter from 'vue-router';

//引入store，为了登录验证
import store from '../store/store';
//import * as types from '../store/types'

const Portal = () => import('../views/portal/Portal');
const Home = () => import('../views/home/Home');
const Introduce = () => import('../views/introduce/Introduce');
const Achievement = () => import('../views/achievement/Achievement');
const Innovation = () => import('../views/innovation/Innovation');
const Trend = () => import('../views/trend/Trend');
const Join = () => import('../views/join/Join');
const Enrollment = () => import('../views/enrollment/Enrollment');
const Notice = () => import('../views/notice/Notice');
const NoticeDetail = () => import('../views/notice/NoticeDetail');
const User = () => import('../views/user/User');

const Register = () => import('../views/register/Register');
const AuthcodeLogin = () => import('../views/login/AuthcodeLogin');
const PasswordLogin = () => import('../views/login/PasswordLogin');

const Agreement = () => import('../views/member/Agreement');
const Memberapplication = () => import('../views/member/Memberapplication')
const MemberReview = () => import('../views/member/MemberReview')
const datam = () => import('../components/idc/datam')
// const issue = () => import('../components/idc/upload')
const treeList=()=>import('../components/idc/treeList')
const text=()=>import('../components/idc/text')


// const prodIssue=()=>import('../components/idc/prodIssue')
const prodIssue=()=>import('../components/idc/prodIssue')

const tail=()=>import('../components/idc/tail')
const treeDetails=()=>import('../components/idc/treeDetails')
const energyIssue=()=>import('../components/idc/energyIssue')
const idcIndex=()=>import('../components/idc/idcIndex')
const awaitwait=()=>import('../components/idc/await')
const marketingAwait=()=>import('../components/idc/marketingAwait')
const energyDetails=()=>import('../components/idc/energyDetails')

const fuzzy=()=>import('@/components/idc/fuzzy')
const idcproduct=()=>import('../views/mainIdc/idcproduct')

const idcEnergy=()=>import('../views/mainIdc/idcenergy')

// const Category = () => import('../views/category/Category')
// const Cart = () => import('../views/cart/Cart')
// const Profile = () => import('../views/profile/Profile')
// const Detail = () => import('../views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter);


//2. 创建router:每个人的路径请增加webCtx，这是为了动态开关history模式
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/datam', //idc专区 头
        component: datam
    },
    // {
    //     path: '/issue', //idc专区
    //     component: issue
    // },
    {
        path: '/awaitwait', //待开发
        name:2,
        component: awaitwait
    },
    {
        path: '/marketingAwait', //待开发
        name:3,
        component: marketingAwait
    },
    {
        path: '/treeList', //idc专区
        component: treeList
    },
    {
        path: '/text', //idc专区 
        component: text
    },
    {
        path: '/prodIssue', //idc专区 发布页面 idcProduct
        component: prodIssue
    },
    {
        path: '/idcProduct', //idc专区 发布产品
        name:0,
        component: idcproduct
    },
    {
        path:"/idcEnergy",   //idc 赋能专区
        name:1,
        component:idcEnergy,
    },
    {
        path:"/energyIssue",   //idc 赋能专区
        component:energyIssue,
    },
    {
        path:"/energyDetails",   //idc 赋能专区
        component:energyDetails,
    },
    {
        path: '/tail', //idc专区
        component: tail
    },
    {
        path: '/idcIndex', //idc专区
        component: idcIndex
    },
    {
        path:"/treeDetails",
        component:treeDetails,
        name:'treeDetails'
    },
    {
        path:"/fuzzy",
        component:fuzzy
    },
    {
        path: '/portal',
        component: Portal,
        children: [
            {
                path: '/home',  //  1.首页
                component: Home
            },
            {
                path: '/introduce',  //  2.联盟介绍
                component: Introduce
            },
            {
                path: '/achievement',  //  3.联盟成果
                component: Achievement
            },
            {
                path: '/innovation',  //  4.创新孵化
                component: Innovation
            },
            {
                path: '/trend',  //  5.联盟动态
                component: Trend
            },
            {
                path: '/join',  //  6.加入我们
                component: Join
            },
            {
                path: '/enrollment',  //  7.赛事报名
                component: Enrollment
            },
            {
                path: '/agreement',//协议页
                component:  Agreement
            }
            ,
            {
                path: '/notice',//通知页
                name:'Notice',
                component:  Notice
            },
            {
                path: '/notice/detail',//通知详情
                name:'NoticeDetail',
                component:  NoticeDetail
            },
            {
                path: '/user',//通知详情
                name:'User',
                component:  User
            }
        ]
    },
    {
        path: '/login/password',
        name: 'passwordLogin',
        component: PasswordLogin
    },
    {
        path: '/login/authcode',
        name: 'authcodeLogin',
        component: AuthcodeLogin
    },
    {
        path: '/register',
        component:  Register
    },{
        path: '/memberapplication',
        name:'memberapplication',
        component:  Memberapplication
    },{
        path:'/memberreview',
        name:'memberreview',
        component: MemberReview
    },
    {
        //测试登录模块用的假装有个repository路径
        path: '/repository',
        name: 'repository',
        meta: {
            requireAuth: true,
        },
        component: Home
    },
    //404一定要保持在最底部
    {
        name: '404',
        path: '/404',
        component: () => import('../views/notfound/NotFound.vue')
    },
    {
        path: '*',    // 此处需特别注意至于最底部
        redirect: '/404'
    }
];

//改成hash模式了，不依赖后端
const router = new VueRouter({
    routes,
    mode:'hash',
    //在此处加入以下内容,页面跳转自动到达页面顶端
    scrollBehavior(to,from,saveTop){
        if(saveTop){
            return saveTop;
        }else{
            return {x:0,y:0}
        }
    },
});

//登录验证token代码
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    // store.commit('login', window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
    //  解决ie浏览器导航栏显示问题
    store.commit('changeMenuActive', to.path.substring(1));

    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在

            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }

})

//登录验证token代码------end

export default router
