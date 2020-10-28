'use strict';


const { Service } = require('egg');


class BaseService extends Service {
    async requestService({
        url,
        method = 'GET',
        data
    }) {
        const { app, ctx } = this;
        const agentBase = app.config.agentBase;
        const {
            server: { baseAPI }
        } = agentBase;
        const uri = `${baseAPI}/${url}`;


        const setting = {
            contentType: 'json',
            dataType: 'json',
            ...options
        };
        if (!setting.headers) {
            setting.headers = {};
        }

        const result = await ctx.curl(uri, {
            ...setting,
            method,
            data: data,
            timing: true
        });
        const body = result ? result.data : {};

        return body;
    }
}

module.exports = BaseService;
