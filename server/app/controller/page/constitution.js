'use strict';


const ViewController = require('../../core/view-controller');

class ConstitutionController extends ViewController {
  async index() {
    const data = {
      Config: {
        title: '章程',
        description:
          '章程',
        keywords: '章程'
      },
    };
    await this.render('constitution', data);
  }
}

module.exports = ConstitutionController;
