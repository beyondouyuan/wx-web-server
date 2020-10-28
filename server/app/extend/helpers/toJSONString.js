'use strict';

module.exports = function toJSONString(data) {
    return typeof data === 'undefined' ? '' : JSON.stringify(data);
};
