import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteReviewController from "../../controllers/Review/DeleteReview.controller.js";

const router = express.Router();

/**
 * @openapi
 * /review:
 *   delete:
 *     summary: Delete a review by ID
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ReviewID: { type: "string" }
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       400:
 *         description: Failed to delete review
 */
router.delete("/", asyncHandler(DeleteReviewController));

export default router;
