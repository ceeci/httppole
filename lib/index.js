var request = require('superagent');

function HTTPPole(options) {
  this.endpoint = options.endpoint;
}

HTTPPole.prototype.message = function(message, line, callback){
  var url = this.endpoint+"/message"
  var data = {
    message: message,
    line: line
  };
  request.post(url)
    .set('Accept', 'application/json')
    .send(data)
    .end(function(error, response){
      if (error) {
        return callback(new Error("Something Went wrong with the request"));
      }

      return callback(null, response);
    });
}

HTTPPole.prototype.weather = function(query, callback){
  var url = this.endpoint+"/weather" + "/" + query
  request.post(url)
    .set('Accept', 'application/json')
    .end(function(error, response){
      if (error) {
        return callback(new Error("Something Went wrong with the request"));
      }
      return callback(null, response);
    });
}

module.exports = HTTPPole;
