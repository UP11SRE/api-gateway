
const callService = require('../utils/circuitBreaker'); // Use wrapped Axios


module.exports = { 
    
 async placeorder(userId,role,email,productId, quantity) {
  try {
    const response = await callService('order', 'placeorder', 'post', {userId,role,email,productId, quantity}); 
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

async getorderbyid(userId,role,email, orderId) {
    try {

      const response = await callService( 'order',`:${orderId}?userId=${userId}&role=${role}&email=${email}`, 'get'); 
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async orderhistory(userId,role,email) {
    try {

      const response = await callService('order',`history?userId=${userId}&role=${role}&email=${email}`, 'get' ); 
      res.status(200).json(response);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async cancelorder(userId,role, email,orderId) {
    try {

      const response = await callService('order', `cancel/:${orderId}`,'post',{userId,role,email} ); 
      res.status(200).json(response);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

}


