import {useMutation, useQuery} from "@tanstack/react-query";
import { deleteProduct, getAllProducts, getProduct } from "../lib/api";

export const useProducts = ()=>{
    const result = useQuery({ queryKey:["products"] ,queryFn: async () => {
            const response = await getAllProducts();

            return response.data;
        }});
    return result;
}



export const  useProduct = (id)=>{
    const result  = useQuery({
        queryKey:["product",id],
        queryFn: async ()=> {
            const response = await getProduct(id);
            return response.data;
        },
        enabled: !!id //double bang operator
    })
    return result;
}


export const  useDeleteProduct  = ()=>{
    const result = useMutation({mutationFn:deleteProduct})
    return result;
}