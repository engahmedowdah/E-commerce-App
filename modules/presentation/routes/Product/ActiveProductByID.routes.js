import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveProductByIDController from "../../controllers/Product/ActiveProductByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /product/active:
 *   patch:
 *     summary: Activate a product by ID
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
 *         description: Product activated successfully
 *       400:
 *         description: Failed to activate product
 */
router.patch("/", asyncHandler(ActiveProductByIDController));

export default router;
