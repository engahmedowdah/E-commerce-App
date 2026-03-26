import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateProductController from "../../controllers/Product/UpdateProduct.controller.js";
const router = express.Router();
/**
 * @openapi
 * /product:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id: { type: "string" }
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *               Price: { type: "number" }
 *               Stock: { type: "number" }
 *               CategoryID: { type: "string" }
 *               CollectionID: { type: "string" }
 *               Images: { type: "array", items: { type: "string" } }
 *               IsActive: { type: "boolean" }
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 */
router.put("/", asyncHandler(UpdateProductController));
export default router;
