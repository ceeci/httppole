var express = require('express'),
    app = express(),
    parser = require('body-parser'),
    expect = require('chai').expect,
    assert = require('assert');


var httppole = require('../httppole');

app.use(parser.json());
app.post('/weather/:query', function(req, res) {
  res.json(req.body);
});

app.post('/message', function(req, res) {
  res.json(req.body);
});

app.listen(4000);

// curl --data "message=Welcome to 5 Guys Burgers" 10.0.201.133:3000/weather/morelia,mx
// curl --data "message=Welcome to 5 Guys Burgers" 10.0.201.133:3000/weather/98034
// curl --data "message=Total: 1.99         .&line=1" 10.0.201.133:3000/message

describe('createClient()', function () {
    it('requires an endpoint', function () {
      expect(function(){
        httppole.createClient({});
      }).to.throw("function createClient requires an endpoint")
    });

    it('can send a message with a line', function(done){
      var client = httppole.createClient({endpoint: 'localhost:4000'});

      client.message("This is a message", 1, function(error, success){
        expect(error).to.eq(null);
        expect(success).to.eq('this is a message')
        done()
      });
    });

    it('can query a zipcode', function(){
      var client = httppole.createClient({endpoint: 'localhost:4000'});

      client.weather("98034", function(error, success){
        expect(error).to.eq(null);
        expect(success).to.eq({query: "98034"})
        done()
      });
    });
});
