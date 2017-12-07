import mongoose from 'mongoose';

module.exports = function () {
    var config = require('./config');
    mongoose.set('debug', config.debug);

    const db = mongoose.connect(config.mongoUri, {
        useMongoClient: true
    });

    require('../app/models/user.model');
    return db;
} 
