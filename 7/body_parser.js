var connect = require('connect');
var app = connect()
  .use(connect.bodyParser())
  .use(function(req, res){
    res.end('hello : ' + req.body.username);
  }).listen(3000);
