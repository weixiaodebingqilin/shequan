const path = require('path');
module.exports = {
    // production(打包环境);   development(开发环境)
    publicPath: process.env.NODE_ENV === 'production' ? 'http://39.96.35.240:9012' : '/',
    // 配置 webpack-dev-server 行为。
    devServer: {
        proxy: {
            '/sell': {
                target: 'http://39.96.35.240:9012',
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/sell': '/' // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http//114.116.11.4:8080'
                }
            }
        }
        
    },
    // 配置less
    chainWebpack: config => {
      const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
      types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },

    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
}
function addStyleResource(rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
          patterns: [
              path.resolve(__dirname, 'src/assets/style/glob.less'), // 需要全局导入的less
              // path.resolve(__dirname, 'src/styles/mixin.less'),
          ],
      })
}
