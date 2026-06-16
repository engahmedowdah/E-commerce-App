import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetProductReviewsByProductIDController from "../../../controllers/Review/GetProductReviewsByProductID.controller.js";
const router = express.Router();

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get product reviews by Product ID
 *     tags: [Reviews]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ProductID
 *             properties:
 *               ProductID:
 *                 type: string
 *                 description: The Product ID
 *     parameters:
 *       - $ref: '#/components/parameters/PageParam'
 *       - $ref: '#/components/parameters/LimitParam'
 *       - $ref: '#/components/parameters/SortParam'

 *     responses:
 *       200:
 *         description: List of product reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Review'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     totalItems:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     currentPage:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     stats:
 *                       type: object
 *                       properties:
 *                         helpfulReviews:
 *                           type: integer
 *                         notHelpfulReviews:
 *                           type: integer
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", asyncHandler(GetProductReviewsByProductIDController));
export default router;
