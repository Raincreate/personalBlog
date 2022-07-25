
const Service = require('egg').Service;

class AdminService extends Service {
  async adminLogin(params) {
    // console.log('body123:', body);
    const { ctx } = this;
    const oldUser = await ctx.model.Admin.findOne({
      userName: params.userName,
    });
    console.log('oldUser:', oldUser);
    if (!oldUser) {
      return {
        msg: '用户不存在',
      };
    }

    // console.log('ctx:', ctx);
    // console.log('body:', body);
    // console.log('ctx.model.Admin.find:', ctx.model.Admin.find(body));
    // const res = await ctx.model.Admin.create(body);
    // console.log('-------------');
    // console.log('res:', res);
    // return res;
  }

  async list() {
    const { ctx } = this;
    const res = await ctx.model.Admin.find();
    console.log('list中的res:', res);
    return res;
  }

  async remove(id) {
    const { ctx } = this;
    const res = await ctx.model.Admin.deleteOne({ _id: id });
    return res;
  }

  async updateData(id) {
    const { ctx } = this;
    const res = await ctx.model.Admin.updateOne({ _id: id }, { userName: 'wangwu1234' });
    return res;
  }
}

module.exports = AdminService;
