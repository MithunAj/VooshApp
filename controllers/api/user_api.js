
const jwt = require('jsonwebtoken');
const User = require('../../models/user')

module.exports.addUser = async function(req,res){
    try {
        let user = await User.findOne({phone : req.body.phone});
        if(!user){
            await User.create(req.body);
            return res.status(200).json({
                message : 'User added successfully'
            })
        }else{
            return res.status(422).json({
                message : 'Phone number already exists, try signing in'
            })
        }
    } catch (error) {
        console.log('There was an error trying to add User',error);
        return res.status(500).json({
            message : 'Internal server error'
        })
    }
}


module.exports.createSession = async function(req,res){
   
    try {
        let user = await User.findOne({phone : req.body.phone});

        if(!user){
            return res.status(422).json({
                message : 'Invalid username'
            })
        }

        if(user){
           
           user.comparePassword(req.body.password, function(err,isMatch){


            if(err){
                console.log("Error during comparing passwrod",err)
                return res.status(500).json({
                    message : 'Internal Server error'
                })
            }


            if(isMatch){
                return res.status(200).json({
                    message : 'Sign in successfull',
                    data : {
                        JwtToken : jwt.sign(user.toJSON(),'vooshapp',{expiresIn: 600000})
                    }
                })
            }else{
                return res.status(422).json({
                    message : 'Password does not match'
                })
            }

           }) 

        }    

        
    } catch (error) {
        console.log('Some internal error',error);
        return res.status(500).json({
            message : 'Internal Server Error'
        })
    }
    
}
