import { Router } from "express";
const router = Router();

import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  getBooksByCategory,
} from "../controllers/book.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

router.post("/create", verifyJwt, authorizeRoles("ADMIN"), createBook);

router.get("/getAllBooks", verifyJwt, authorizeRoles("ADMIN", "STUDENT"), getAllBooks);
router.get(
  "/category/:category",
  verifyJwt,
  authorizeRoles("ADMIN", "STUDENT"),
  getBooksByCategory
);

router.get("/:id", verifyJwt, authorizeRoles("ADMIN", "STUDENT"), getBookById);

router.put("/update/:id", verifyJwt, authorizeRoles("ADMIN"), updateBook);

router.delete("/delete/:id", verifyJwt, authorizeRoles("ADMIN"), deleteBook);

export default router;
