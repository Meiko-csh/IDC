/**
 * Created by gel13 on 19/8/13.
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || '',
        isLogin: localStorage.getItem("isLogin") || false,
        isVip: localStorage.getItem("isVip") || '0',
        menuActiveName: "home"
    },
    mutations: {
        'saveLoginInfo': (state, data) => {
            localStorage.token = data.token;
            localStorage.isLogin = true;
            localStorage.user = JSON.stringify(data.user);
            state.token = data.token;
            state.isLogin = true;
            state.user = data.user;
            if(!!data.user.data) {
                localStorage.isVip = data.user.data.isVip;
                state.isVip = data.user.data.isVip;
            }
        },
        'removeLoginInfo': (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('isLogin');
            localStorage.removeItem('user');
            localStorage.removeItem('isVip');
            state.token = null;
            state.user = {};
            state.isLogin = false;
            state.isVip = '0';
        },
        'title': (state, data) => {
            state.title = data;
        },
        'changeMenuActive': (state, name) => {
            state.menuActiveName = name;
        }
    },
    actions: {
        'login': (context, res) => {
            context.commit('saveLoginInfo', res);
        },
        'loginOut': (context, res) => {
            //  退出登录
            context.commit('removeLoginInfo', res);
        }
    }
})