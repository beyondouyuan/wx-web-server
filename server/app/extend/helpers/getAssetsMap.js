'use strict';

const fs = require('fs');
const path = require('path');

module.exports = async function getAssetsMap() {
    const projectConfig = this.config.project;

    const assetsMapFileJSON = path.resolve(
        projectConfig.assets.outputPath,
        projectConfig.assets.assetsMapFileName
    );
    console.log(`assetsMapFileJSON => ${assetsMapFileJSON}`)
    let assetsMap = null;
    if (fs.existsSync(assetsMapFileJSON)) {
        // 写一个潜在风险：
        // require存在缓存，更变内容后多次调用会出现问题
        // 按理部署正式环境不存在
        assetsMap = require(assetsMapFileJSON);
    } else {
        this.logger.error(new Error('assetsMap文件不存在'));
    }

    // 没有页面，只有 `metadata`
    if (Object.keys(assetsMap).length < 2) {
        this.logger.error(new Error('assetsMap数据不完整'));
    }
    console.log(`assetsMap => ${assetsMap}`)

    return assetsMap;
};
