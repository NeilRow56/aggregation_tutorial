import { dbConnect } from "../../../lib/dbConnect"
import nc from "next-connect";
import { allClients, newClient } from "../../../controllers/ClientControllers"
 
 
const handler = nc()
 
dbConnect()
 
handler.get(allClients)
handler.post(newClient)
 
export default handler