import db from '../../../lib/dbConnect'
import nc from "next-connect";
import { allOrders, newOrder } from "../../../controllers/OrderControllers"
 
 
const handler = nc()
 
db.dbConnect()
 
handler.get(allOrders)
handler.post(newOrder)
 
export default handler