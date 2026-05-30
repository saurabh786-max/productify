import { Router } from "express";
import { createUser, getUser, updateUser, upsertUser } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.rotue("/create").post(createUser);
userRouter.route("/update/:id").put(updateUser);
userRouter.route("/upsert").post(upsertUser);
userRouter.route("/get-user/:id").get(getUser);



export default userRouter;