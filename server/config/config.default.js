/* eslint valid-jsdoc: "off" */

'use strict';
const projectConfig = require('../../project.config');
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
  config.keys = appInfo.name + '_1602996739966_8199';

  // add your middleware config here
  config.middleware = [];
  config.project = projectConfig;
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
    mapping: {
      '.njk': 'nunjucks',
      '.nj': 'nunjucks'
    }
  };
  config.static = {
    maxAge: 0,
    prefix: projectConfig.assets.publicPath,
    dir: projectConfig.assets.outputPath
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
