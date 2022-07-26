'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 定义一个公共路径
  const baseRouter = app.config.baseRouter;
  // 增
  router.post(baseRouter + '/admin/login', controller.admin.adminLogin);
  router.post(baseRouter + '/admin/logout', controller.admin.adminLogout);
  // 查
  router.get('/admin/list', controller.admin.list);
  // 删
  router.delete('/admin/remove/:id', controller.admin.remove);
  // 修改
  router.post('/admin/updateData/:id', controller.admin.updateData);

};

// model -> router -> controller -> service -> model
