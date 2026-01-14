import { Router } from "express";
const router = Router();

import {
  issueBook,
  returnBook,
  getAllIssuedBooks,
  getIssuedBooksByUser,
  getIssuedBookById,
} from "../controllers/issue.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

router.post("/issueBook", verifyJwt, authorizeRoles("STUDENT"), issueBook);

router.post(
  "/return/:issueId",
  verifyJwt,
  authorizeRoles("STUDENT"),
  returnBook
);

router.get("/allIssueBooks", verifyJwt, authorizeRoles("ADMIN"), getAllIssuedBooks);

router.get(
  "/user/:userId",
  authorizeRoles("STUDENT"),
  verifyJwt,
  getIssuedBooksByUser
);

router.get("/:id", verifyJwt, authorizeRoles("ADMIN"), getIssuedBookById);

export default router;
