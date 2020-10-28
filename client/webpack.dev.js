const path = require('path');
const url = require('url');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const projectConfig = require('../project.config');
const AssetsPlugin = require('assets-webpack-plugin');
const ip = require('ip');
const myIp = ip.address();

module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        // 输出环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new AssetsPlugin({
            prettyPrint: true,
            path: path.resolve(__dirname, '../server/app/public'),
            metadata: {
                'build-time': Date.now(),
            },
            useCompilerPath: true,
            // update: true,
            filename: projectConfig.assets.assetsMapFileName
        }),
    ],
    // const publicPath = url.resolve(
    //     `http://${myIp}:${projectConfig.assets.devServer.port}`,
    //     projectConfig.assets.publicPath
    // );
    // webpackConfig.output.publicPath = publicPath;
    // webpackConfig.devServer = {
    //     host: '0.0.0.0', // 不要修改，只有这个ip才能实现本地局域网访问
    //     port: projectConfig.assets.devServer.port,
    //     publicPath,
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //     },
    //     open: false,
    //     clientLogLevel: 'error', // 在开发工具(DevTools)的控制台将显示警告消息
    // };
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        // compress: true,
        // port: 9000,
        // hot: true,
        host: '0.0.0.0', // 不要修改，只有这个ip才能实现本地局域网访问
        port: projectConfig.assets.devServer.port,
        publicPath: url.resolve(
            `http://${myIp}:${projectConfig.assets.devServer.port}`,
            projectConfig.assets.publicPath
        ),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        open: false,
        clientLogLevel: 'error', // 在开发工具(DevTools)的控制台将显示警告消息
    },

    optimization: {
        minimize: false, // 开发环境不要锁
        namedModules: true, //取代插件中的 new webpack.NamedModulesPlugin()
        namedChunks: true,
        runtimeChunk: {
            name: "runtime"
        }
    }
})