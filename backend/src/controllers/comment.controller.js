import { getAuth } from "@clerk/express";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createCommentQuerry, deleteCommentQuerry, getCommentByIdQuerry } from "../db/querries/comment.queries.js";


const createComment = asyncHandler(async (req,res)=>{
    const {userId} = getAuth(req);
    if(!userId){
        throw new ApiError(401,"unauthorized request");
    }
    const {productsId} =req.params;
    const {content} = req.body;
    if(!content){
        throw new ApiError(404, "product not found ");
    }
    const comment = await createCommentQuerry({
        content,
        userId,
        productsId
    });
    return res.status(201).json(new ApiResponse(201,comment,"comment created successfully !!"));

});
const deleteComment = asyncHandler(async (req,res)=>{
    const {userId} = getAuth(req);
     if(!userId){
        throw new ApiError(401,"unauthorized request");
    }
    const {commentId} = req.params;
    const existingComment = await getCommentByIdQuerry(commentId);
    if(!existingComment){
        throw new ApiError(404,"comment not found !")
    }
if(existingComment.userId !== userId){
    throw new ApiError(403,"you can delete your own comment !!")
}

const deletedComment = await deleteCommentQuerry(commentId);

return res.status(200).json(new ApiResponse(200,deletedComment,"comment deleted successfully !!"))
})

export{createComment,deleteComment}