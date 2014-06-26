/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var cssshrink = require('cssshrink');

module.exports = function(content, file, conf){
    return cssshrink.shrink(content); 
};
