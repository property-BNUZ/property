// const path = require('path')
// const vantTheme = path.resolve(__dirname, "./src/styles/theme.less")

module.exports = {
    publicPath: '',
    outputDir: 'property',
    assetsDir: 'static',
    devServer: {
        disableHostCheck: true,
        host: '127.0.0.1', // ip
        port: 8080, // 设置端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true, //允许跨域
                ws: true,
                pathRewrite: { //重写路径
                    '^/api': '/mock'
                }
            }
        }, //设置代理
        open: true,
    },
    // css: {
    //     loaderOptions: {
    //         less: {
    //             modifyVars: {
    //                 // 可在此编写样式变量
    //                 // 'blue': 'red',
    //                 // 也可以引入我们创建好的theme.less文件
    //                 hack: `true; @import "${vantTheme}";`,
    //             },
    //         },
    //     },
    // }
}

// function resolve(dir) {
//     return path.join(__dirname, dir)
// }