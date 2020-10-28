const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");




module.exports = merge(base, {
    mode: 'production',
    // devtool: 'isource-map',
    plugins: [
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns:['static-manifest.json','img/*'],
        //     // cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
        //     // exclude:  ['shared.js'], // 跳过文件
        // }), // 无需指定目录，会自动找到配置的输出目录进行清除
        // new ManifestPlugin(), // 输出打包文件清单
        new OptimizeCSSAssetsPlugin({

        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[hash].css",
            chunkFilename: "[id].css"
        }),
        // 输出环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
    optimization: {
        minimize: true, //取代 new UglifyJsPlugin(/* ... */)
        minimizer: [new TerserPlugin({
            //开启并行压缩，true为默认值，可设数值， 同样项目小不建议使用，可能反而延长时间
            parallel: true,
            //开启压缩缓存
            cache: true,
            // parallel: true, // 多线程打包
        })], // 自定义压缩配置，比如用什么插件来压缩代码
        splitChunks: { // 代码分割配置
            chunks: "initial",
            minSize: 30000, //模块大于30k会被抽离到公共模块
            minChunks: 1, //模块出现2次就会被抽离到公共模块
            maxAsyncRequests: 5, //异步模块，一次最多只能被加载5个
            maxInitialRequests: 3, //入口模块最多只能加载3个
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        },
    },

})