import { getAuth } from "@clerk/express";
import {
  createProductQuery,
  deleteProductQuerry,
  getAllProductsQuerry,
  getProductById,
  getProductsByUserId,
  updateProductById,
} from "../db/querries/product.queries.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await getAllProductsQuerry();

  return res
    .status(200)
    .json(new ApiResponse(200, products, "products fetched successfully !!"));
});

const getProduct_id = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await getProductById(id);
  if (!product) {
    throw new ApiError(404, "product not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, product, "product fetched successfully "));
});
const getMyProducts = asyncHandler(async (req, res) => {
  const { userId } = getAuth(req);
  if (!userId) {
    throw new ApiError(401, "unauthorized request ");
  }
  const products = await getProductsByUserId(userId);
  if (!products) {
    throw new ApiError(404, "no user found with this id ");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        products,
        "products of the current user fetched successfully !!",
      ),
    );
});
const createProduct = asyncHandler(async (req, res) => {
  const { userId } = getAuth(req);
  if (!userId) {
    throw new ApiError(401, "unauthorised request ");
  }
  const { title, description, imageUrl } = req.body;
  if (!title || !description || !imageUrl) {
    throw new ApiError(400, "all the fields are required ");
  }
  const createdProduct = await createProductQuery({
    title,
    description,
    imageUrl,
    userId,
  });
  return res.status(201).json(
    new ApiResponse(
      201,
      createdProduct,
      "Product created successfully"
    )
  );
});

const updateProduct = asyncHandler(async (req, res) => {
  const { userId } = getAuth(req);
  if (!userId) {
    throw new ApiError(401, "unathorized requrest ");
  }
  const { id } = req.params;
  const { title, description, imageUrl } = req.body;

  const exsistingProduct = await getProductById(id);
  if (!exsistingProduct) {
    throw new ApiError(404, "product with this id is not exsisted !");
  }
  if (exsistingProduct.userId !== userId) {
    throw new ApiError(403, "you can only update your own product !!");
  }
  const products = await updateProductById(id, {
    title,
    description,
    imageUrl,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, products, "product update successfully "));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    throw new ApiError(401, "unauthorized request");
  }

  const { id } = req.params;
  const existingProduct = await getProductById(id);
  if (!existingProduct) {
    throw new ApiError(404, "product not found");
  }

  if (existingProduct.userId !== userId) {
    throw new ApiError(403, "you can only delete your own product");
  }

  const deletedProduct = await deleteProductQuerry(id);

  return res
    .status(200)
    .json(
      new ApiResponse(200, deletedProduct, "product deleted successfully !!"),
    );
});

export {
  getAllProducts,
  getProduct_id,
  getMyProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
