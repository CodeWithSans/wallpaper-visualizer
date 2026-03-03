import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import eventsRoutes from "./routes/events.js";
import entropyRoutes from "./routes/entropy.js";
import {info} from "./utils/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/events",eventsRoutes);
app.use("/api/entropy",entropyRoutes);

app.listen(PORT,()=>{
    info(`Server running on port ${PORT}`);
});
