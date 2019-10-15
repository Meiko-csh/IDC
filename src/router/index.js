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
