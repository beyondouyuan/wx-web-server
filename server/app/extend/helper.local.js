/**
 * 本地开发环境专用
 */
'use strict';

const pageStyleAssets = require('./helpers/pageStyleAssets');
const pageScriptAssets = require('./helpers/pageScriptAssets');
const toJSONString = require('./helpers/toJSONString');
const getDevServerAssetsMap = require('./helpers/getDevServerAssetsMap');
const getAssetsMap = require('./helpers/getAssetsMap');
module.exports = {
    pageStyleAssets,
    pageScriptAssets,
    toJSONString,
    // getAssetsMap
    getAssetsMap: getDevServerAssetsMap
};
