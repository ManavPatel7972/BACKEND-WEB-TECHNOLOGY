import { Router } from "express";
const router = Router();

import {
  register,
  login,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

router.post("/register", register);
router.post("/login", login);

router.post("/", verifyJwt, authorizeRoles("ADMIN"), createUser);

router.get("/", verifyJwt, authorizeRoles("ADMIN"), getAllUsers);

router.get("/:id", verifyJwt, authorizeRoles("ADMIN"), getUserById);

router.put("/:id", verifyJwt, authorizeRoles("ADMIN"), updateUser);

router.delete("/:id", verifyJwt, authorizeRoles("ADMIN"), deleteUser);

export default router;
