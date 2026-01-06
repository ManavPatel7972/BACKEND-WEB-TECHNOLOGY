import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.js";

const router = Router();

router.post("/create", verifyJwt, createProduct);
router.get("/all", verifyJwt, getAllProducts);
router.get("/:id", verifyJwt, getProductById);
router.patch("/update/:id", verifyJwt, updateProduct);
router.delete("/delete/:id", verifyJwt, deleteProduct);

export const productRoutes = router;
