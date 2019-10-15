import axios from 'axios';
import store from '../store/store'

//by tf
//对axios进行封装
//加入拦截器

export function request(config) {
    //引入base64编码，node的import没成功
    let Base64 = require('js-base64').Base64;
    // 1.创建axios的实例
    const instance = axios.create({
        // baseURL: process.env.VUE_APP_SERVER_HOST_PRE,
        baseURL: 'http://tt.wo.cn/',
        timeout: 100000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(
        config => {
            if (localStorage.token) {
                //config.headers.Authorization = store.state.token;
                config.headers.Authorization = localStorage.token;
            }

            //根据env文件环境变量判断是否启用base64编码
            ifEnableBase64(config);
            return config
        },
        err => {
            return Promise.reject(err)
        },
    )

    // 2.2.响应拦截
    instance.interceptors.response.use(response => {
            return response
        },
        error => {
            // debugger
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        // 401 清除token信息并跳转到登录页面
                        store.commit('removeLoginInfo')

                        // 只有在当前路由不是登录页面才跳转
                        router.currentRoute.path !== 'login' &&
                        router.replace({
                            path: 'login',
                            query: {redirect: router.currentRoute.path},
                        })
                }
            }
            // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
            return Promise.reject(error.response.data)
        },)

    // 3.发送真正的网络请求
    return instance(config)
}

//根据环境变量设置BASE64开关对函数进行base64编码：
//默认不启用
function ifEnableBase64(config) {
    config.headers["X-ifEnc"] = 0;
    //根据环境变量VUE_APP_BASE64来判断
    if ("true" === process.env.VUE_APP_BASE64) {
        config.headers["X-ifEnc"] = 1;
        //判断如果使用params参数，那么就是get请求
        if (config.params) {
            config.params = Base64.encode(JSON.stringify(config.params));
        }

        if (config.data) {
            const contentType = config.headers['Content-Type'];
            if (contentType === undefined || contentType === null) {
                config.headers['Content-Type'] = 'application/json';
            }
            config.data = Base64.encode(JSON.stringify(config.data));
        }
    }
}
