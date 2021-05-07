var port = (process.env.PORT || 3000);
var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
	res.send('hello world');
});

app.get('/services', function (req, res) {
	res.send(process.env.VCAP_SERVICES);
})

app.listen(port);