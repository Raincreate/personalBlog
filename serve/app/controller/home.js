'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, config } = this;
    // console.log('ctx.request:', ctx.query);
    ctx.body = 'hello world';
    console.log('config.env:----', config.env);
  }
}

module.exports = HomeController;
