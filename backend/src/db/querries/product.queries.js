import { eq } from "drizzle-orm";
import { commentRelation, comments, products } from "../../models/schema.js";
import db from "../db.js";

export const createProductQuery = async (data) => {

    const [product] = await db
        .insert(products)
        .values(data)
        .returning();

    return product;
};

export const getAllProductsQuerry = async()=>{
    return await  db.query.products.findMany({with:{users:true},
        orderBy: (products,{desc})=>[desc(products.createdAt)]
        // the square brackets are required because Drizzle orm's orderBy expects an array, even for a single column 
    })
};

export const getProductById = async(id)=>{
    return await  db.query.products.findFirst({
        where: eq(products.id,id),
        with:{
            users:true,
            comments:{
                with:{users:true},
                orderBy: (comments, {desc})=>[desc(comments.createdAt)]
            },
        }
    })
};

export const getProductsByUserId = async(userId)=>{
    return await db.query.products.findMany({
        where:eq(products.userId,userId),
        with:{
            users:true,
        },
        orderBy:(products,{desc})=>[desc(products.createdAt)],
    })
};


export const updateProductById = async(id,data)=>{
   const [product] = await db.update(products).set(data).where(eq(products.id,id)).returning();
   return product;
}

export const deleteProductQuerry = async(id)=>{
    const[product]= await db.delete(products).where(eq(products.id,id)).returning();
    return product;
};