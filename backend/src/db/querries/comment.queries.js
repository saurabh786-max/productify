import { eq } from "drizzle-orm";
import { comments } from "../../models/schema.js"
import db from "../db.js"


export const createCommentQuerry = async(data)=>{
    const [comment] = await db.insert(comments).values(data).returning();
    return comment;
} 

export const deleteCommentQuerry = async(id)=>{
    const [comment] = await db.delete(comments).where(eq(comments.id,id)).returning();
    return comment;
};


export const getCommentByIdQuerry = async(id)=>{
    return db.query.comments.findFirst({
        where:eq(comments.id,id),
        with: {users:true},
    })
};
