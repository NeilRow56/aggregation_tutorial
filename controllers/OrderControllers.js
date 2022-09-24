import Order from "../models/Order"

 
//GET all orders
 
const allOrders = async (req, res) => {
   try {
       const orders = await Order
       .aggregate([
        // { $sort: {id: -1}}
        {
            $lookup: {
                from: 'products',
                localField: 'item',
                foreignField: 'name',
                as: 'output'
            }
        }
       ]).then(result => res.send(result))
    
 
    //    res.status(200).json({
    //        success: true,
    //        orders
           
    //    })
 
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }
 
     
}
// Create new order = /api/orders
 
const newOrder = async (req, res) => {
 
   try {
       const order = await Order.create(req.body);
      
   res.status(200).json({
       success: true,
       order
   })
      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
           
   }
}
 
export {
   allOrders,
   newOrder
}
