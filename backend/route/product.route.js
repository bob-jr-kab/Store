import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get(`/`, getProducts);

router.post(`/`, createProduct);

// Update a product by ID
router.put(`/:id`, updateProduct);

// Delete a product by ID
router.delete(`/:id`, deleteProduct);

export default router;
