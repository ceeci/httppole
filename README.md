# httppole


## Installation && Quickstart

Install with npm:

```
npm install --save git+ssh://git@github.com/blairanderson/httppole.git
```

```javascript
var httppole = require('httppole');

var client = httppole.createClient({
  endpoint: 'localhost:4000' // endpoint of your edison screen
});

client.weather('98034', callback);
//=> screen updated with forecast!!!
//  => callback on screen update error/success
```

## jQuery

> include jquery.httppole.js

**add your endpoint**

```javascript
$.httppole.setEndpoint("localhost:3000")
$.httppole.weather("98034", callback);

```

## Node

**Requirement:** client requires an endpoint.
**An error will be thrown if it doesn't exist**

```javascript
expect(function(){
  httppole.createClient({});
}).to.throw("function createClient requires an endpoint")

```

### /message


```javascript
var httppole = require('httppole');

var client = httppole.createClient({
  endpoint: 'localhost:4000'
});

var screenMessage = "This is a message";
var screenLine = 1;
client.message(screenMessage, screenLine, function(error, success){
  if (error) {
    console.log('something went wrong with our edison', error);
    return callback(error);
  }
  return callback(null, "Successfully updated the screen");
});

```

### /weather/:query


```javascript
var httppole = require('httppole');

var client = httppole.createClient({
  endpoint: 'localhost:4000'
});

var query = "98034" || "Seattle" || "Maui" || "Paris,FR"
client.weather(query, function(error, success){
  if (error) {
    console.log('something went wrong with our edison', error);
    return callback(error);
  }
  return callback(null, "updated screen with forecast");
});


```

## Testing

From the repo root:

```
npm install
npm test
```
