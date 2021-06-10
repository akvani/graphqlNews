const express = require('express');
let app = express();
const appService = require('./app.service');


appService.connectionToDatabase();
appService.setAppMiddleware(app);
appService.apiSetUp(app);

module.exports =app;