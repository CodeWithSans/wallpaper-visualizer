import  express from "express";
import {addEvent} from "../services/entropyEngine.js";
import {info ,error} from "../utils/logger.js";

const router = express.Router();
router.post('/',(req,res)=>{
   const event =req.body;

   if(!event || !event.type){
    error('Invalid event received - missing type');
    return res.status(400).json({message:"Invalid event received"});
   }
   addEvent(event);

   
   res.status(200).json({message:"Event received"});
});
export default router;