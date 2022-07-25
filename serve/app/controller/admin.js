'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor(ctx) {
    super(ctx);
  }

  async adminLogin() {
    const { ctx, service } = this;
    // console.log('这是controller中的ctx:', this);
    const body = ctx.request.body;
    // console.log('body:', body);
    const res = await service.admin.adminLogin(body);
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
