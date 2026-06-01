import express from "express";
import {clerkMiddleware} from "@clerk/express"
import cors from "cors"
import userRouter from "./src/routes/users.routes.js";
import productRouter from "./src/routes/products.router.js";

const app = express();
 app.use(express.json({limit:"16kb"}))
 app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
 app.use(clerkMiddleware()) // auth obj will be attached to the req

// settling routes for users

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);


export default app;