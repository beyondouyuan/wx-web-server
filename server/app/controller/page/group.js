'use strict';


const ViewController = require('../../core/view-controller');

class groupController extends ViewController {
  async index() {
    const data = {
      Config: {
        title: '校友群',
        description:
          '校友群',
        keywords: '校友群'
      },
    };
    await this.render('group', data);
  }
}

module.exports = groupController;
