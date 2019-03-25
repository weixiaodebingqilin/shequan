const path = require('path');
module.exports = {
    // production(打包环境);   development(开发环境)
    baseUrl: process.env.NODE_ENV === 'production' ? '//114.116.11.4:8080' : '/',
    // 配置 webpack-dev-server 行为。
    devServer: {
        proxy: {
            '/sell': {
                target: 'http://114.116.11.4:8080',
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/sell': '/' // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http//114.116.11.4:8080'
                }
            }
        }
        
    },
    // 配置less
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [
            path.resolve(__dirname, './src/assets/style/glob.less'),
          ],
        },
      },
}
