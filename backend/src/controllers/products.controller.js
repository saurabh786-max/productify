
import db from "../db/db";
import { products } from "../models/schema";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncHandler";

const createProducut  = asyncHandler(async (req,res)=>{
    const{title, description, imageUrl, userId} = req.body;
     if (!title) {
        throw new ApiError(400, "title is required");
    }

    if (!description) {
        throw new ApiError(400, "description is required");
    }

    if (!imageUrl) {
        throw new ApiError(400, "image url is required");
    }

    if (!userId) {
        throw new ApiError(400, "user id is required");
    }

    const createdProduct = await db.insert(products).values({title,description,imageUrl,userId}).returning();
    if(createdProduct.length === 0){
        throw new ApiError(401,"there is a problem while creating the product ")
    }
    res.status(201).json(new ApiResponse(201,createdProduct,"Product created successfully !!"))
})