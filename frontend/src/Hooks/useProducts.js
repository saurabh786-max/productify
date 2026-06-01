import {useQuery} from "@tanstack/react-query";
import { getAllProducts } from "../lib/api";

export const useProducts = ()=>{
    const result = useQuery({ queryKey:["products"] ,queryFn: async () => {
            const response = await getAllProducts();

            return response.data;
        }});
    return result;
}