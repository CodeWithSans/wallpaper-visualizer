import express from "express";
import { calculateScore } from "../services/entropyEngine.js";
import { info } from "../utils/logger.js";

const router = express.Router();

router.get('/',(req,res)=>{
    const score = calculateScore();
    info(`Entropy score requested :${score}`);

    res.status(200).json({score:score,
        timestamp:Date.now()
    });
});

export default router;