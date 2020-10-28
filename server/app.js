'use strict';

// const getLastCommitId = require('../chore/utils/getLastCommitId');

module.exports = class AppBootHook {
    constructor(app) {
        this.app = app;
    }

    configDidLoad() {
        // if (this.app.config.env !== 'local') {
        //     this.app.config.coreMiddleware.push('sentry');
        // }
    }

    // 所有的配置已经加载完毕，可以用来加载应用自定义的文件，启动自定义的服务
    didLoad() {
        // this.app.lastCommitId = getLastCommitId();
        // this.app.initSentry();
    }

    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
    async willReady() {
        await this.app.initAssetsMap();
    }
};
