var colors = require('colors');
var logger = require('tracer').colorConsole({
  format: "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
})
var express = require('express');

var app = express();

app.use(express.static('public'))

const port = 8545;

app.listen(port, () => { logger.log(`listening on ${port}`) })


