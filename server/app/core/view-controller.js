'use strict';

const { Controller } = require('egg');


class ViewController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * 渲染react页面
     * @param {string} pageName 页面名称
     * @param {object} locals 数据
     * @param {object} options 配置
     * @return {Promise<String>} result - return a promise with a render result
     */
    async render(pageName, locals = {}, options = {}) {
        const { app, ctx, config } = this;
        const ConfigLocals = Object.assign(
            {},
            locals.Config
        );
        ConfigLocals.pageName = pageName;
        ConfigLocals.env = config.env;
        const newLocals = {
            Config: ConfigLocals,
            Data: locals.data || {}
        };
        return await ctx.render('react', newLocals, options);
    }
}

module.exports = ViewController;
