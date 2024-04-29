const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const productController = require('../controller/productController');
const userController = require('../controller/userController');
const AuthMiddle = require('../AuthMiddle');
const productRateLimiter = require('../config/rateLimiter');

router.post('/register', productRateLimiter,userController.authenticate);
router.post('/login', productRateLimiter,userController.login);
router.get('/getall', productRateLimiter,AuthMiddle.authenticateToken,productController.getallProducts); //req.user
router.get('/getbyid/:id',productRateLimiter,AuthMiddle.authenticateToken,productController.getProductbyId)
//router.post('/add',productRateLimiter,intercomAuth,productController )
// router.post('/update', productRateLimiter,intercomAuth,productController)
router.post('/delete', productRateLimiter, AuthMiddle.authenticateToken, productController.deleteProduct)
router.post('/placeorder', productRateLimiter, AuthMiddle.authenticateToken, orderController.placeorder)
router.get('/:orderid',productRateLimiter, AuthMiddle.authenticateToken, orderController.getorderbyid );
router.get('/history', productRateLimiter, AuthMiddle.authenticateToken, orderController.orderhistory);
router.post('/cancel/:orderid', productRateLimiter, AuthMiddle.authenticateToken, orderController.cancelorder);


module.exports = router;
