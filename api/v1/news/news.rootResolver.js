const authUser = require('./news.dao')

const rootResolver = {
    ...authUser
};

module.exports = rootResolver;
