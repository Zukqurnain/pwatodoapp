var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.listen(process.env.PORT || 3000);
console.log('working on', process.env.PORT);