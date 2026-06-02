import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getMyProducts, getProduct_id, updateProduct } from "../controllers/products.controller.js";
import { requireAuth } from "@clerk/express";


const productRouter = Router();

productRouter.route('/').get(getAllProducts);
productRouter.route('/my-products').get(requireAuth(),getMyProducts);
productRouter.route('/:id').get(getProduct_id);
productRouter.route('/delete/:id').delete(requireAuth(),deleteProduct);
productRouter.route('/update-product/:id').put(requireAuth(),updateProduct)
productRouter.route("/create-product").post(createProduct);
export default productRouter;