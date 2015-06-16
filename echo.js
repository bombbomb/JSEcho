var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.post('/', function (req, res) {
    console.log("\n ======================== \n");
    console.log(req.body);

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
});

var server = app.listen(1337, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('JSEcho listening at http://%s:%s', host, port);

});