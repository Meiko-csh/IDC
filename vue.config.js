//详细配置参见官方文档https://cli.vuejs.org/zh/config/
const webpack = require("webpack");
module.exports = {

    //项目路径设置别名
    configureWebpack: {
        resolve: {
            //这个项目脚手架用cli3自动默认@是src，cli2中没有
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                PoPper: ['popper.js', 'default']
            })
        ]
    },

    //by tf 以下配置暂且保留，复制网上的配置文件


    // /** 区分打包环境与开发环境
    //  * process.env.NODE_ENV==='production'  (打包环境)
    //  * process.env.NODE_ENV==='development' (开发环境)
    //  * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
    //  */
    // 基本路径
    // 从 Vue CLI 3.3 起已弃用，改成publicPath
    publicPath: process.env.VUE_APP_MY_NG_NAME,
    // 输出文件目录
    // outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    // lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    //compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // chainWebpack: () => {},
    //如果想要引入babel-polyfill可以这样写
    // configureWebpack: (config) => {
    //   config.entry = ["babel-polyfill", "./src/main.js"]
    // },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    //vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    // productionSourceMap: true,
    // css相关配置
    //css: {
    // 是否使用css分离插件 ExtractTextPlugin
    //   extract: true,
    // 开启 CSS source maps?
    //   sourceMap: false,
    // css预设器配置项
    //   loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
    // },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    //parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    //   pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        // host: '127.0.0.1',
        port: 9099,
        // https: false,
        // hotOnly: false,
        proxy: {
            'api': {
                target: process.env.VUE_APP_SERVER_HOST,
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }, // 设置代理
        // before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: []
      }
    }
};