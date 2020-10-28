'use strict';

module.exports = function pageScriptAssets(name) {
    const { app, config } = this;
    const projectConfig = config.project;
    const assetsMap = app.assetsMap;
    let resultHtml = '';
    const url = config.env === 'dev' || config.env === 'local' ? `http://${projectConfig.assets.devServer.hostname}:${projectConfig.assets.devServer.port}`: '';
    if (!name || !assetsMap) {
        return resultHtml;
    }

    const assets = assetsMap[name];
    if (assets && assets.js) {
        if (!Array.isArray(assets.js)) {
            assets.js = [ assets.js ];
        }
        assets.js.forEach(assetUrl => {
            resultHtml += `<script src="${url}${assetUrl}" crossorigin="anonymous"></script>\n`;
        });
    }
    return resultHtml;
};
