'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;

    const {
        page: { healthcheck }
    } = controller;

    router.get(`/healthcheck`, healthcheck.index);
    require('./router/page')(app);
    require('./router/api')(app);
};
