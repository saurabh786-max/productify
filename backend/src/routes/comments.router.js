import { Router } from "express";
import { createComment, deleteComment } from "../controllers/comment.controller.js";
import { requireAuth } from "@clerk/express";

const commentRouter = Router();

commentRouter.route("/create-comment/:productId").post(requireAuth(),createComment);
commentRouter.route("/delete-comment/:commentId").delete(requireAuth(),deleteComment);