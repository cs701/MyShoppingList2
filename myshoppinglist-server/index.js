const express = require('express');

const bodyPaser = require('body-parser');

const {mysql} = require('./db.js');
var itemController = require('./controllers/itemController.js');

var app = express();

app.use(bodyPaser.json());

var hostName = 'localhost';
var port = 3000;

app.listen(port, hostName, function () {

    console.log(`Server is running at http://${hostName}:${port}`);

});

app.use('/list', itemController);
