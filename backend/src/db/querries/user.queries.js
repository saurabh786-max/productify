import e from "express";
import { users, usersRelation } from "../../models/schema.js"
import db from "../db.js"
import { eq } from "drizzle-orm";


export const createUserQuerry = async(data) =>{
    const [user] = await db.insert(users).values(data).returning();
    return user;
};

export const getUserByIdQuerry = async (id)=>{
    const user = await db.query.users.findFirst({
        wehre:eq(users.id,id),
    })
    return user;
};

export const getUserByEmailQuerry = async (email)=>{
    const user = await db.query.users.findFirst({
        where: eq(users.email, email),
    })
    return user;
}

export const updateUserQuerry = async(id,data)=>{
    const [updatedUser] = await db.update(users).set(data)
    .where(eq(users.id,id))
    .returning();
    return updatedUser;
}

export const upsertUserQuerry = async(data)=>{
    const [user] = await db.insert(users)
    .values(data).onConflictDoUpdate({
        target:users.id,
        set:{
            name:data.name,
            email:data.email,
            imageUrl: data.imageUrl,
            updatedAt:new Date(),
        }
    }).returning ();
    return user;
}