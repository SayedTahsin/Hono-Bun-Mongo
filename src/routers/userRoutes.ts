import { Hono } from "hono";
import {
  createUser,
  getUserByMail,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const userRoutes = new Hono();

userRoutes.post("/", createUser);
userRoutes.get("/:mail", getUserByMail);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
