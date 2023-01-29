const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.ObjectId,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    sub_total : {
        type : Number,
        required : true
    }
})


const Order = mongoose.model('Order',orderSchema);

module.exports = Order;