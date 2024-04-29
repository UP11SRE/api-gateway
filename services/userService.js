const callService = require('../utils/circuitBreaker'); // Use wrapped Axios

module.exports = {
    async register( email, password,  role, name) {
   try{
  const response = await callService('user', `register`,'post' ,{email, password,  role, name} );
  return response
   }
   catch(error){
    console.log("userRegistration--->",error)
    return {};
   }
},

async login(email,password) {
    try {
        const response = await callService('user', `login`, 'post' ,{email,password});
        return response;
    } catch (error) {
        console.log("userlogin--->", error);
        return {};
    }
},


}