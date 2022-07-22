'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const { ctx } = this;
        const dataList = {
            list: [
                { id: 1, title: 'this is ', url: '/news/1' },
                { id: 2, title: 'this is ', url: '/news/2' },
            ]
        };
        await ctx.render('news/list.tpl', dataList);
    }
}

module.exports = NewsController;
