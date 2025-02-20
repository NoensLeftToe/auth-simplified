import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res)=>{
res.send("hello sorrel");
})


app.use(express.json())// allows us to parse incoming requests: req.body

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    connectDB();
    console.log("app is running on locahost:", PORT);
})