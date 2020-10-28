'use strict';
/**
 * views router
 */

module.exports = app => {
    const {
        router,
        controller,
    } = app;

    // app.router.opts.prefix = '';

    router.get('/home', controller.page.home.index);
    router.get('/join', controller.page.join.index);
    router.get('/news', controller.page.news.index);
    router.get('/news/detail', controller.page.news.detail);
    router.get('/constitution', controller.page.constitution.index);
    router.get('/group', controller.page.group.index);
    router.get('/notice', controller.page.notice.index);
    router.get('/notice/detail', controller.page.notice.detail);
    router.get('/resource', controller.page.resource.index);
    router.get('/resource/detail', controller.page.resource.detail);
    router.get('/publish', controller.page.resource.publish);
};
