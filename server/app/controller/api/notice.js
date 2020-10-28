'use strict';


const { Controller } = require('egg');
const list = [{
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 1
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 2
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 3
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 4
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 5
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 6
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 7
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 8
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 9
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 10
}, {
  title: '我校隆重举行秋季学期开学典礼',
  desc: '',
  id: 11
}]

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    const res = {
      code: 0,
      msg: '请求成功',
      data: {
        list
      },
    };
    ctx.body = { ...res }
  }
  async detail() {
    const { ctx } = this;
    const res = {
      code: 0,
      msg: '请求成功',
      data: {
        id: ctx.query.id
      },
    };
    ctx.body = { ...res }
  }
}

module.exports = NewsController;
