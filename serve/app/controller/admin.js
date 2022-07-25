'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      userName: {
        type: 'string',
        min: 5,
        max: 20,
        // format: /^[\u4e00-\u9fa5A-Za-z0-9_]{5,20}$/,
      },
      password: {
        type: 'password',
        // compare: "re-password",
        min: 4,
        max: 20,
        format: /^[A-Za-z0-9_]{4,20}$/,
      },
    };
  }

  async adminLogin() {
    const { ctx, service } = this;
    // console.log('这是controller中的ctx:', this);
    const data = ctx.request.body;
    // 验证信息
    ctx.validate(this.createRule, data);
    // console.log('body:', body);
    const res = await service.admin.adminLogin(data);
    // console.log('这是controller中的res:', res);
    ctx.body = res;
  }

  async list() {
    const { ctx, service } = this;
    const res = await service.admin.list();
    ctx.body = res;
  }

  async remove() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const res = await service.admin.remove(id);
    ctx.body = res;
  }

  async updateData() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const res = await service.admin.updateData(id);
    ctx.body = res;
  }
}

module.exports = AdminController;
