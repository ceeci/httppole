function HTTPPole(){
    this.endpoint = "localhost:3000";
}

HTTPPole.prototype.setEndpoint = function(endpoint){
  this.endpoint = endpoint;
};

HTTPPole.prototype.message = function(message, line, callback){
  var url = this.endpoint+"/message"
  var data = {
    message: message,
    line: line
  };
  $.post(url, data).success(function(){
    callback(null, "It worked")
  }).error(function(){
    callback("it didn't work")
  });
}

HTTPPole.prototype.weather = function(query, callback){
  var url = this.endpoint+"/weather" + "/" + query
  $.post(url).success(function(){
    callback(null, "it worked")
  }).error(function(){
    callback(new Error("something went wrong"))
  })
}

$(function(){
  $.fn.httppole = new HTTPPole({});
})
