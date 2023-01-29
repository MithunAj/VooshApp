const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Mithun:hHZ8ozd2WVCLQNvP@cluster0.duea2d3.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;


db.on('error',function(){
    console.log('Unable to open connection to db ');
})

db.once('open',function(){
    console.log('Successfully connected to MongoDB');
})

module.exports = db;