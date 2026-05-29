import express from "express";
import {clerkMiddleware} from "@clerk/express"
import cors from "cors"

const app = express();
 app.use(express.json({limit:"16kb"}))
 app.use(express.urlencoded({extended:true}))
 app.use(cors())
 app.use(clerkMiddleware()) // auth obj will be attached to the req



export default app;