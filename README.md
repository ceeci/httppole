# httppole


## Installation && Quickstart

Install with npm:

```
npm install --save git+ssh://git@github.com/blairanderson/httppole.git
```

```javascript
var httppole = require('httppole');

var client = httppole.createClient({
  endpoint: 'localhost:4000'
});

client.weather('98034', callback);

```

## API

### httppole

**Requirement:** client requires an endpoint. 
**An error will be thrown if it doesn't exist**

```javascript
expect(function(){
  httppole.createClient({});
}).to.throw("function createClient requires an endpoint")

```

To send a message:


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

It can show some weather on the pole:


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
