import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetProductReviewsByProductIDController from "../../controllers/Review/GetProductReviewsByProductID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /review/product:
 *   get:
 *     summary: Get all reviews for a product
 *     tags: [Review]
 *     parameters:
 *       - in: query
 *         name: ProductID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reviews for the product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get("/", asyncHandler(GetProductReviewsByProductIDController));

export default router;
