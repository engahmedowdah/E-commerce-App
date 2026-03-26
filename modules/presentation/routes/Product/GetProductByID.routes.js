import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetProductByIDController from "../../controllers/Product/GetProductByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /product:
 *   get:
 *     summary: Get a product by ID
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
 *         description: Product fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get("/", asyncHandler(GetProductByIDController));

export default router;
