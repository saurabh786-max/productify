import { request } from "express"

const asyncHandler = (requestHandler)=>{
    return async (req, res,next)=>{
       await Promise.resolve(requestHandler(req,res,next))
        .catch((error)=>next(error))
    }

}

export default asyncHandler;