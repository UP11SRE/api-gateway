
const orderService = require('../services/orderService');


module.exports = { 
    
 async placeorder(req, res) {
  try {
    const userId = req.user.payload.userId;
    const email = req.user.payload.email;
    const role = req.user.payload.role;

    const {productId, quantity} = req.body;
    const response = await orderService.placeorder( userId,role,email,productId, quantity); 
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

async getorderbyid(req, res) {
    try {
      const userId = req.user.payload.userId;
      const email = req.user.payload.email;
      const role = req.user.payload.role;
      const orderId = req.query.orderId;
      const response = await orderService.getorderbyid( userId,role, email,orderId); 
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async orderhistory(req, res) {
    try {
      const userId = req.user.payload.userId;
      const email = req.user.payload.email;
      const role = req.user.payload.role;
      const response = await orderService.orderhistory( userId,role,email ); 
      res.status(200).json(response);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async cancelorder(req, res) {
    try {
      const userId = req.user.payload.userId;
      const email = req.user.payload.email;
      const role = req.user.payload.role;
      const orderId = req.query.orderId;
      const response = await orderService.cancelorder( userId,role, email, orderId); 
      res.status(200).json(response);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

}


