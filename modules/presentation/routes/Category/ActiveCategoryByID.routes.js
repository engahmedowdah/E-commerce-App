import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveCategoryByIDController from "../../controllers/Category/ActiveCategoryByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /category/active:
 *   patch:
 *     summary: Activate a category by ID
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CategoryID: { type: "string" }
 *     responses:
 *       200:
 *         description: Category activated successfully
 *       400:
 *         description: Failed to activate category
 */
router.patch("/", asyncHandler(ActiveCategoryByIDController));

export default router;
