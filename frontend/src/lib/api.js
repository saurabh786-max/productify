import api from "./axios";
// user api
export const syncUser = async (userData)=>{
    const {data} = await api.post("/users/sync", userData);
    return data;
}

// Products API

export const getAllProducts = async()=>{
    const {data} = await api.get("/products");
    return data;
};

export const getMyProducts = async()=>{
   const {data} = await api.get("/products/my-products");
   return data;
}


// get single product api 

export const getProduct = async(id)=>{
    const {data} = await api.get(`/products/${id}`);
    return data;
};

export const createProduct = async(productData) =>{
   const {data} = await api.post("/products/create-product",productData);
   return data;
}

export const deleteProduct = async(id)=>{
    const {data} = await api.delete(`/products/delete/${id}`);
    return data;
}

export const updateProduct = async ({id, ...productData})=>{
    const {data} = await api.put(`/products/update-product/${id}`,productData);
    return data;
};

// comment api

export const createComment = async({productId, content})=>{
    const {data} = await api.post(`/comments/create-comment/${productId}`,{content});
    return data;
}

export const deleteComment = async ({commentId})=>{
    const {data} = await api.delete (`/comments/delete-comment/${commentId}`);
    return data;
};