import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createComment, deleteComment } from "../lib/api"
import { Variable } from "lucide-react";


export const useCreateComment = ()=>{
    const queryClient = useQueryClient();

    const result = useMutation({mutationFn:createComment,
       onSuccess:(_,Variables)=>{
        queryClient.invalidateQueries({queryKey:["product",Variables.productId]})
       } 
    })
    return result;
}
export const useDeleteComment = ()=>{
    const result = useMutation({mutationFn:deleteComment})
    return result;
}