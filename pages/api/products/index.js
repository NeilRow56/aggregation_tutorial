import db from "../../../lib/dbConnect"
import nc from "next-connect";
import { allProducts, newProduct } from "../../../controllers/ProductControllers"
 
 
const handler = nc()
 
db.dbConnect()
 
handler.get(allProducts)
handler.post(newProduct)
 
export default handler