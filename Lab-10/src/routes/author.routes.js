import { Router } from "express";
const router = Router();

import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} from "../controllers/author.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

router.post("/", verifyJwt, authorizeRoles("ADMIN"), createAuthor);

router.get("/", verifyJwt, authorizeRoles("ADMIN", "STUDENT"), getAllAuthors);

router.get(
  "/:id",
  verifyJwt,
  authorizeRoles("ADMIN", "STUDENT"),
  getAuthorById
);

router.put("/:id", verifyJwt, authorizeRoles("ADMIN"), updateAuthor);

router.delete("/:id", verifyJwt, authorizeRoles("ADMIN"), deleteAuthor);

export default router;
