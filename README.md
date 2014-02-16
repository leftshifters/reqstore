reqstore
========

Request storage middleware for connect or express

Overview
========

Attaches an empty object named `store` to every `req`. Provides a way to store intermediate results in the request object. Properties attached to the object will persist for the duration of the request.

Usage
=====
````
var reqstore = require('reqstore');
//...
app.use(reqstore());

// later in a route middleware
exports.dostuff = function(req, res, next) {
  req.store.item = { foo: 'bar' };
  next();
};

exports.domore = function(req, res, next) {
  var item = req.store.item;
  console.log(item);  // { foo: 'bar' }
  next();
};
````

LICENSE
=======

MIT
