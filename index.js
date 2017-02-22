
var AWS = require('aws-sdk');
var v1= require('./api/load.js');



exports.handler = function(event, context) {
var rp = v1.getLoad();
  rp(v1.options)
      .then(function (body) {
          context.succeed(body);
      })
      .catch(function (err) {
        context.succeed(err);
      });

}
