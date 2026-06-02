import { useMutation } from "@tanstack/react-query"
import { createProduct } from "../lib/api"

export const useCreateProduct = ()=>{
   const result =  useMutation({mutationFn:createProduct})

   return result;
}