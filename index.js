
var AWS = require('aws-sdk');
var v1= require('./api/load.js');

exports.handler = function(event, context) {
  var res = v1.getLoad();
  console.log(event.key1);
  context.succeed(res);

}
