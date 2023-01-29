const Order = require('./../../models/order');



module.exports.addOrder = async function(req,res){
    try {
        
        if(!req.body.sub_total || isNaN(req.body.sub_total)){
            return res.status(400).json({
                message : 'Bad request'
            })
        }else{
            await Order.create({
              user_id : req.user._id,
              phone : req.user.phone,
              sub_total : req.body.sub_total
            })

            return res.status(200).json({
                message : 'Order created successfully'
            })
        }
    } catch (error) {
        console.log(error);
        return res.json(500,{
            message : 'Internal server error'
        })
    }
    
}


module.exports.getOrderDetails = async function(req,res){

    try {

        let orders = await Order.find({user_id : req.user._id},{_id : 0,user_id:0,__v:0});
        // if the user does not have any orders we send status 404 and if not we send 200 with the orders array
        if(orders.length === 0){

            return res.status(404).json({
                message : 'No orders to show'
            })

        }else{

            return res.status(200).json({
                message : 'Orders fetched',
                data : {
                    orders : orders
                } 
            })
        }
        

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : 'Internal Server error'
        })
    }

}