/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1658373275492_9633';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 模板
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // csrf安全关闭
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // session key 的配置
  config.session = {
    key: 'BLOG_EGG_SESSION_KEY',
    encrypt: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
