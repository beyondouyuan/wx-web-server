'use strict';


const ViewController = require('../../core/view-controller');

class HomeController extends ViewController {
  async index() {
    const data = {
      Config: {
        title: '微信',
        description:
          '微信',
        keywords: '微信'
      },
    };
    await this.render('home', data);
  }
}

module.exports = HomeController;
