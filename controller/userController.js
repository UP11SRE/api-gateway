
const userService = require('../services/userService');


module.exports = { 
    
 async authenticate(req, res) {
  try {
    const { email, password,  role, name } = req.body;
    const response = await userService.register( email, password,  role, name ); 
    console.log("response", response);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

async login(req, res) {
    try {
      const {email,password} = req.body;
      
      const response = await userService.login( email,password ); 
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

}


