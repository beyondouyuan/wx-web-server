'use strict';


const ViewController = require('../../core/view-controller');

class NewsController extends ViewController {
  async index() {
    const data = {
      Config: {
        title: '新闻列表',
        description:
          '新闻列表',
        keywords: '新闻列表'
      },
    };
    await this.render('news', data);
  }
  async detail() {
    const data = {
      Config: {
        title: '新闻详情',
        description:
          '新闻详情',
        keywords: '新闻详情'
      },
    };
    await this.render('news-detail', data);
  }
}

module.exports = NewsController;
