
//moment works with date and time
const moment = require('moment');
//middleware
const logger = function(req, res, next){
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}${moment().format()}`);
    console.log('Hello from logger middleware')
    
    next();
}

module.exports = logger;