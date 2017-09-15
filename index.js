'use strict';

var base64url = require('base64url');

module.exports = { prefix, tags };

function prefix(serviceName) {
  return serviceName
    .split('-')
    .map(function(part) {
      return part.charAt(0);
    })
    .join('');
}

function tags(opts) {
  return Object.keys(opts)
    .map(function(key) {
      if (!opts[key]) return;
      if (key === 'id') return base64url(String(opts[key]));
      if (key === 'to') return 't~' + base64url(String(opts[key]));
      if (key === 'from') return 'f~' + base64url(String(opts[key]));
      // return key + '~' + opts[key];
    })
    .filter(Boolean);
}
