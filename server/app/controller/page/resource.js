'use strict';


const ViewController = require('../../core/view-controller');

class ResourceController extends ViewController {
  async index() {
    const data = {
      Config: {
        title: '资源',
        description:
          '资源',
        keywords: '资源'
      },
    };
    await this.render('resource', data);
  }
  async publish() {
    const data = {
      Config: {
        title: '发布资源',
        description:
          '发布资源',
        keywords: '发布资源'
      },
    };
    await this.render('resource-publish', data);
  }
  async detail() {
    const data = {
      Config: {
        title: '资源详情',
        description:
          '资源详情',
        keywords: '资源详情'
      },
    };
    await this.render('resource-detail', data);
  }
}

module.exports = ResourceController;
