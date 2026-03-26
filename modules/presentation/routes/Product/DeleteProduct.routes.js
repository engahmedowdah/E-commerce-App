import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteProductController from "../../controllers/Product/DeleteProduct.controller.js";

const router = express.Router();

/**
 * @openapi
 * /product:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductID: { type: "string" }
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete("/", asyncHandler(DeleteProductController));

export default router;
