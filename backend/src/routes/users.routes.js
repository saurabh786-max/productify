import { Router } from "express";
import { syncUser } from "../controllers/users.controller.js";
import { requireAuth } from "@clerk/express";
// import { createUser, getUser, updateUser, upsertUser } from "../controllers/users.controller.js";

const userRouter = Router();

// userRouter.rotue("/create").post(createUser);
// userRouter.route("/update/:id").put(updateUser);
userRouter.route("/upsert").post(requireAuth(),syncUser);
// userRouter.route("/get-user/:id").get(getUser);



export default userRouter;