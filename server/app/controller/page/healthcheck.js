'use strict';

const { Controller } = require('egg');

class HealthCheckController extends Controller {
    async index() {
        this.ctx.body = new Date().getTime();
    }
}

module.exports = HealthCheckController;
