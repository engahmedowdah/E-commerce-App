import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateReviewController from "../../../controllers/Review/CreateReview.controller.js";
const router = express.Router();
/**
 * @swagger
 * /review:
 *   post:
 *     summary: Create a new Review
 *     tags: [Reviews]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *               ProductID: "6535c90b3d7b3110acb4d24d"
 *               Rating: 5
 *               Comment: "Excellent product! Highly recommended."
 *     responses:
 *       201:
 *         description: Review created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Review'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateReviewController));
export default router;
