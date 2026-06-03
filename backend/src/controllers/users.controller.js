import { getAuth } from "@clerk/express";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import db from "../db/db.js";
import { upsertUserQuerry } from "../db/querries/user.queries.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const syncUser = asyncHandler(async (req,res)=>{
    const {email, name, imageUrl} = req.body;
    const {userId} = getAuth(req);

    if (!userId){
        throw new ApiError(401,"unauthorised request ")
    }
    if(!email || !name || !imageUrl){
        throw new ApiError(400,"all fields are required !!")
    }

    const user = await upsertUserQuerry({
        id:userId,
        email:email,
        name:name,
        imageUrl:imageUrl
    })
    if(!user){
        throw new ApiError(500, "failed to sync the user ")
    }
   return res.status(201).json(new ApiResponse(201,user,"user created or updated successfully !!"))
})



export{syncUser}