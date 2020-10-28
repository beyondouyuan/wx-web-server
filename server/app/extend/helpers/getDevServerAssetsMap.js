'use strict';

const url = require('url');

module.exports = async function getDevServerAssetsMap() {
    const { app, config } = this;
    const projectConfig = config.project;
    let assetsMap = {};

    const assetsJsonUrl = url.resolve(
        `http://${projectConfig.assets.devServer.hostname}:${projectConfig.assets.devServer.port}`,
        url.resolve(
            projectConfig.assets.publicPath,
            projectConfig.assets.assetsMapFileName
        )
    );

    try {
        const hostName = this.ctx.request.host.split(':')[0];
        console.log(`hostName => ${hostName}`)
        const response = await app.curl(assetsJsonUrl, { dataType: 'json' });
        let assetsMapString = JSON.stringify(response.data);
        assetsMapString = assetsMapString.replace(/:\/\/[\w\.]+:/g, `://${hostName}:`);

        assetsMap = JSON.parse(assetsMapString);
        console.log(assetsMap)
    } catch (err) {
        console.log('============= getDerServerAssetsMap START:');
        console.dir(err);
        console.log('============= getDerServerAssetsMap END:');
    }

    // 没有页面，只有 `metadata`
    if (Object.keys(assetsMap).length < 1) {
        this.logger.error(new Error('assetsMap数据不完整'));
    }

    return assetsMap;
};
