'use strict';


const { Controller } = require('egg');
const list = [{
  title: '资源列表标题',
  desc: '2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀，2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀',
  id: 1
}, {
  title: '资源列表标题',
  desc: '2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀',
  id: 2
}, {
  title: '资源列表标题',
  desc: '2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀',
  id: 3
}, {
  title: '资源列表标题',
  desc: '2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀',
  id: 4
}, {
  title: '资源列表标题',
  desc: '2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀',
  id: 5
}, {
  title: '资源列表标题',
  desc: '2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀',
  id: 6
}, {
  title: '资源列表标题',
  desc: '2020年9月1日清晨，阳光明媚，秋高气爽。我校4100多师生相聚在共青湖畔美丽的两中校园怀',
  id: 7
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
