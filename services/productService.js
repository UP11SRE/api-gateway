const callService = require('../utils/circuitBreaker'); // Use wrapped Axios

module.exports = {
    async getProducts(userId,role, email) {
   try{
  const response = await callService('product', `getall?userId=${userId}&role=${role}&email=${email}`, 'get' );
  return response
   }
   catch(error){
    console.log("getProducts--->",error)
    return {};
   }
},

async getProductbyId(userId, role,email, productId) {
    try {
        const response = await callService('product', `/getbyid/${productId}?userId=${userId}&role=${role}&email=${email}`, 'get');
        return response;
    } catch (error) {
        console.log("getProducts--->", error);
        return {};
    }
},

async deleteProduct(userId,role, productId) {
    try{
   const response = await callService('product', `delete`,'post',{userId,role, email,productId} );
   return response
    }
    catch(error){
     console.log("getProducts--->",error)
     return {};
    }
 },

}