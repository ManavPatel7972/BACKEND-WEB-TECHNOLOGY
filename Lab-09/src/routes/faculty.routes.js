import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt.js";
import {
  register,
  login,
  allFaculty,
  updateFaculty,
  deleteFaculty,
  getFacultyById,
} from "../controllers/faculty.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/all", verifyJwt, allFaculty);

router.patch("/update/:id", verifyJwt, updateFaculty);

router.delete("/delete/:id", verifyJwt, deleteFaculty);

router.get("/getUserById/:id", verifyJwt, getFacultyById);

export const facultyRoutes = router;
