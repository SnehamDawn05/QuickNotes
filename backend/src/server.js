import express from "express";
import noteRoutes from "./routers/noteRouters.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimitter from "./middleware/rateLimitter.js";
import cors from "cors";

dotenv.config();

const app= express();
const PORT=process.env.PORT;


//middleware
app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(express.json()) //this middleware will parse the json(req.body)
app.use(rateLimitter)

app.use("/api/notes", noteRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running on port ",PORT);
    });
})

