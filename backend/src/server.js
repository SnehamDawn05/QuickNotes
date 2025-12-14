import express from "express";
import noteRoutes from "./routers/noteRouters.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app= express();
const PORT=process.env.PORT;

connectDB();

app.use("/api/notes", noteRoutes);

app.listen(PORT,()=>{
    console.log("Server running on port ",PORT);
});