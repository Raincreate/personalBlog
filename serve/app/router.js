'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 增
  router.post('/admin/login', controller.admin.adminLogin);
  // 查
  router.get('/admin/list', controller.admin.list);
  // 删
  router.delete('/admin/remove/:id', controller.admin.remove);
  // 修改
  router.post('/admin/updateData/:id', controller.admin.updateData);

};

// model -> router -> controller -> service -> model
