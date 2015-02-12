/*! httppole v0.0.0 - MIT license */

var Client = require('./lib/index.js');

module.exports.createClient = function(options){
  if (!options.endpoint) {
    throw "function createClient requires an endpoint";
  }
  
  return new Client(options);
};
