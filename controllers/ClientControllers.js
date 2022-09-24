import Client from "../models/Client"
 
//GET all clients
 
const allClients = async (req, res) => {
   try {
       const clients = await Client.find()
 
       res.status(200).json({
           success: true,
           clients
       })
 
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }
 
     
}
// Create new client = /api/clients
 
const newClient = async (req, res) => {
 
   try {
       const client = await Client.create(req.body);
      
   res.status(200).json({
       success: true,
       client
   })
      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
           
   }
}
 
export {
   allClients,
   newClient
}