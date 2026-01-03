import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt.js";
import {
  allUser,
  login,
  register,
  updateUser,
  deleteUser,
  getUserById,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/all", verifyJwt, allUser);

router.patch("/update/:id", verifyJwt, updateUser);

router.delete("/delete/:id", verifyJwt, deleteUser);

router.get("/getUserById/:id", verifyJwt, getUserById);

export const userRoutes = router;
