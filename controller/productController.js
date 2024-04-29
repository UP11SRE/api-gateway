
const productService = require('../services/productService');


module.exports = { 
    
 async getallProducts(req, res) {
  try {
    const userId = req.user.payload.userId;
    const email = req.user.payload.email;
    const role = req.user.payload.role;
    const products = await productService.getProducts( userId,role,email); 
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

async getProductbyId(req, res) {
    try {
      const userId = req.user.payload.userId;
      const email = req.user.payload.email;
      const role = req.user.payload.role;
      const productId = req.query.productId;
      const products = await productService.getProductbyId( userId,role,email, productId); 
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async deleteProduct(req, res) {
    try {
      const userId = req.user.payload.userId;
      const email = req.user.payload.email;
      const role = req.user.payload.role;
      const productId = req.query.productId;
      if(role != 'admin'){
        throw new Error("only Admin can delete the Product");
      }
      else{
      const products = await productService.deleteProduct( userId,role,email,productId ); 
      res.status(200).json(products);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

}


