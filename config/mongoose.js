const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/voosh');

const db = mongoose.connection;


db.on('error',function(){
    console.log('Unable to open connection to db ');
})

db.once('open',function(){
    console.log('Successfully connected to MongoDB');
})

module.exports = db;