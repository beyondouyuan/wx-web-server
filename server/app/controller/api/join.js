'use strict';


const ViewController = require('../../core/view-controller');

class JoinController extends ViewController {
  async index() {
    const data = {
      Config: {
        title: '加入我们',
        description:
          '加入我们',
        keywords: '加入我们'
      },
    };
    await this.render('join', data);
  }
}

module.exports = JoinController;
