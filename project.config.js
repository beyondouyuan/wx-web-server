'use strict';

const path = require('path');

const ENV = process.env;


const config = {
    cwd: __dirname,

    assets: {
        cwd: path.join(__dirname, 'client'),
        outputPath: path.join(__dirname, 'server/app/public'),
        publicPath: `/static/`,
        assetsMapFileName: 'static-manifest.json',

        devServer: {
            hostname: ENV.CLIENT_HOSTNAME || '127.0.0.1', // 主机名
            port: ENV.CLIENT_PORT || 7002 // 外部使用的主机端口
        }
    },

    server: {
        cwd: path.join(__dirname, 'server'),
        devServer: {
            hostname: ENV.SEVER_HOSTNAME || '127.0.0.1', // 主机名
            port: ENV.SEVER_PORT || 7001, // 外部使用的主机端口
        }
    },

};
module.exports = config;
