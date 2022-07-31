'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  // 定义一个公共路径
  const baseRouter = app.config.baseRouter;
  // router.resources(
  //   "categories",
  //   baseRouter + "/categories",
  //   jwt,
  //   controller.categories
  // ); // 分类

  // 增
  router.resources('categories', baseRouter + '/categories', jwt, controller.categories)
  router.post(baseRouter + '/admin/login', controller.admin.adminLogin);
  router.post(baseRouter + '/admin/logout', controller.admin.adminLogout);
  // 查
  router.get('/admin/list', controller.admin.list);
  // 删
  router.delete('/admin/remove/:id', controller.admin.remove);
  // 修改
  router.post('/admin/updateData/:id', controller.admin.updateData);

  router.resources('about', baseRouter + '/about', jwt, controller.about)


};

// model -> router -> controller -> service -> model
