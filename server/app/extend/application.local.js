'use strict';

module.exports = {
    async initAssetsMap() {
        this.on('request', async ctx => {
            // 页面加载才获取
            if (ctx.method === 'GET' && /\/api\//.test(ctx.req.url) === false) {
                this.assetsMap = await ctx.helper.getAssetsMap();
            }
        });
    },

    /**
     * 开发环境无需开启
     */
    initSentry() {}
};
