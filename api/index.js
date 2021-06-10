const router = require('express').Router();

// Router Uses News Modules
router.use('/news', require('./v1/index'))

// export Modules Router to App
module.exports = router