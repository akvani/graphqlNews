const bodyparser = require('body-parser')
const api = require('./api')

const db = require('./db')

const connectionToDatabase = () => {
    db.createMongoConnection();
    db.createMongoConnection();
}
const setAppMiddleware = (app) => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: false }))
}

const apiSetUp = (app) => {
    app.use('/api/v1', api);
}

module.exports = {
    connectionToDatabase,
    setAppMiddleware,
    apiSetUp
}