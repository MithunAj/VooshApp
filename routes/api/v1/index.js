const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/user_api');
const orderController = require('../../../controllers/api/order_api')
const passport = require('passport');


router.post('/add-user',userController.addUser);

router.post('/login-user',userController.createSession);

router.post('/add-order',passport.authenticate('jwt',{session: false}),orderController.addOrder);

router.get('/get-order',passport.authenticate('jwt',{session: false}),orderController.getOrderDetails);

module.exports = router;