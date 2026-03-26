import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetReviewByIDController from "../../controllers/Review/GetReviewByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /review:
 *   get:
 *     summary: Get a review by ID
 *     tags: [Review]
 *     parameters:
 *       - in: query
 *         name: ReviewID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Review not found
 */
router.get("/", asyncHandler(GetReviewByIDController));

export default router;
