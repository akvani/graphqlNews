const mongoose = require('mongoose')
const { dbConfig } = require('../config').appConfig;

const createMongoConnection = () => {
    return mongoose.connect(dbConfig.mongoUrl);
}
const getMongoConnection = () => {
    return mongoose.connection();
}


module.exports = {
    createMongoConnection
}