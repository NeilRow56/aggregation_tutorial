import Product from "../models/Product"
 
//GET all products
 
const allProducts = async (req, res) => {
   try {
       const products = await Product.find()
 
       res.status(200).json({
           success: true,
           products
       })
 
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }
 
     
}
// Create new product = /api/products
 
const newProduct = async (req, res) => {
 
   try {
       const product = await Product.create(req.body);
      
   res.status(200).json({
       success: true,
       product
   })
      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
           
   }
}
 
export {
   allProducts,
   newProduct
}
