const path = require('path');

module.exports = {
    // production(打包环境);   development(开发环境)
    publicPath: './',
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

    chainWebpack: config => {
        // 配置less
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
        const cdn = {
            // inject tinymce into index.html
            // why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
            js: [
                'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js',
                // '//at.alicdn.com/t/font_1179524_w5guqoem65g.js'
                '//at.alicdn.com/t/font_1179524_bv5dgsbkgc.js'
            ]
        }
        config.plugin('html')
            .tap(args => {
                args[0].cdn = cdn
                return args
            })
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test

        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end()
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                // 如果有element的话
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })
                    config.optimization.runtimeChunk('single')
                }
            )
    },
}
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, 'src/assets/style/glob.less'), // 需要全局导入的less
            ],
        })
}
function resolve(dir) {
    return path.join(__dirname, dir)
}
