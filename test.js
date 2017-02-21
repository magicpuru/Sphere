var AWS = require('aws-sdk');

exports.handler = function(event, context) {
  var res = v1.getLoad();
  console.log(event.key1);
  context.succeed("hello");

}
