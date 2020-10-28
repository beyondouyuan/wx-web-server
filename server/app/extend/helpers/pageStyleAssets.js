'use strict';

module.exports = function pageStyleAssets(name) {
    const { app, config } = this;
    const projectConfig = config.project;
    const assetsMap = app.assetsMap;
    let resultHtml = '';
    const url = config.env === 'dev' || config.env === 'local' ? `http://${projectConfig.assets.devServer.hostname}:${projectConfig.assets.devServer.port}`: '';
    if (!name || !assetsMap) {
        return resultHtml;
    }

    const assets = assetsMap[name];
    if (assets && assets.css) {
        if (!Array.isArray(assets.css)) {
            assets.css = [ assets.css ];
        }
        assets.css.forEach(assetUrl => {
            resultHtml += `<link rel="stylesheet" href="${url}${assetUrl}">\n`;
        });
    }
    return resultHtml;
};
