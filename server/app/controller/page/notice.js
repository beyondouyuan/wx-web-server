'use strict';


const ViewController = require('../../core/view-controller');

class NoticeController extends ViewController {
  async index() {
    const data = {
      Config: {
        title: '公告列表',
        description:
          '公告列表',
        keywords: '公告列表'
      },
    };
    await this.render('notice', data);
  }
  async detail() {
    const data = {
      Config: {
        title: '公告详情',
        description:
          '公告详情',
        keywords: '公告详情'
      },
    };
    await this.render('notice-detail', data);
  }
}

module.exports = NoticeController;
