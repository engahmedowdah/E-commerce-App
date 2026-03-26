import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateReviewController from "../../controllers/Review/CreateReview.controller.js";

const router = express.Router();

/**
 * @openapi
 * /review:
 *   post:
 *     summary: Create a new review
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductID: { type: "string" }
 *               UserID: { type: "string" }
 *               Rating: { type: "number" }
 *               Comment: { type: "string" }
 *     responses:
 *       201:
 *         description: Review created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateReviewController));

export default router;
