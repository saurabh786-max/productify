import { eq } from "drizzle-orm";
import db from "../db/db.js";
import { users } from "../models/schema.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { date } from "drizzle-orm/mysql-core";

const createUser = asyncHandler(async (req,res)=>{
    const {id,name,email,imageUrl} = req.body;

    if(!id){
        throw new ApiError(400,"id is required")
    }

    if(!name){
        throw new ApiError(400,"name is required")
    }

    if(!email){
        throw new ApiError(400,"email is required")
    }
    const existingUser = await db.query.users.findFirst({
        where:eq(users.email,email)
    })
    if(existingUser){
        throw new ApiError(400,"user already exists")
    }
    const createdUser = await db.insert(users).values({id,name,email,imageUrl}).returning();
    res.status(201).json( new ApiResponse(201,createdUser,"user created successfully !!"))
})


const getUser = asyncHandler(async (req,res)=>{
    const {id} = req.params;

    const userdata = await db.select().from(users).where(eq(users.id,id));
    if(userdata.length === 0 ){
        throw new ApiError(404,"user not found")
    }
    res.status(200).json(new ApiResponse(200,userdata,"user data fetched successfully !!"))
})

const updateUser = asyncHandler(async(req,res)=>{
const {id} =req.params;
const {email,name,imageUrl} =req.body;
const updatedUser = await db.update(users).set({
    email:email,
    name:name,
    imageUrl:imageUrl,
    updatedAt:new Date(),
}).where(eq(users.id,id)).returning();
 
if(updatedUser.length === 0){
    throw new ApiError(404,"no users found with this id ")
}

res.status(200).json(new ApiResponse(200,updatedUser,"user updated successfully !!"))
})

const upsertUser = asyncHandler(async (req,res)=>{
    const {id,name,email,imageUrl} = req.body;
    
    if(!id){
        throw new ApiError(400,"id is required")
    }

    if(!name){
        throw new ApiError(400,"name is required")
    }

    if(!email){
        throw new ApiError(400,"email is required")
    }

    const user = await db.insert(users)
    .values({
        id,
        name,
        email,
        imageUrl,
    })
    .onConflictDoUpdate({
        target:users.id,
        set:{
            name,
            email,
            imageUrl,
            updatedAt: new Date(),
        }
    }).returning();

    res.status(200).json(new ApiResponse(200,user,"user upsert successfully !!"))
})
export{createUser,getUser,updateUser,upsertUser}