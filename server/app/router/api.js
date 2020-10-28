'use strict';
/**
 * api router
 */

module.exports = app => {
    const {
        router,
        controller,
    } = app;

    app.router.opts.prefix = '/api';

    router.get('/join', controller.api.join.index);
    router.get('/news', controller.api.news.index);
    router.get('/news/detail', controller.api.news.detail);
    router.get('/constitution', controller.api.constitution.index);
    router.get('/group', controller.api.group.index);
    router.get('/notice', controller.api.notice.index);
    router.get('/notice/detail', controller.api.notice.detail);
    router.get('/resource', controller.api.resource.index);
    router.get('/resource/detail', controller.api.resource.detail);
};
