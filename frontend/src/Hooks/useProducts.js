import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { deleteProduct, getAllProducts, getMyProducts, getProduct, updateProduct } from "../lib/api";

export const useProducts = ()=>{
    const result = useQuery({ queryKey:["products"] ,queryFn: async () => {
            const response = await getAllProducts();
            return response.data;
        }});
    return result;
}

export const useMyProducts = ()=>{
    const result = useQuery({ queryKey:["myProducts"] ,queryFn: async () => {
            const response = await getMyProducts();
            return response.data;
        }});
    return result;

}

export const  useProduct = (id)=>{
    const result  = useQuery({
        queryKey:["product",id],
        queryFn: async ()=> {
            const response = await getProduct(id);
            console.log("response-data",response.data.data);
            console.log("response",response);
            
            return response.data;
        },
        enabled: !!id //double bang operator
    })
    return result;
}


export const  useDeleteProduct  = ()=>{
    const queryCLient = useQueryClient();
    const result = useMutation({mutationFn:deleteProduct,
        onSuccess: ()=>{
            queryCLient.invalidateQueries({queryKey:["myProducts"]})
        }
    })
    return result;
}

export const useUpdateProduct = () =>{
    const result = useMutation({mutationFn:updateProduct});
    return result;
}