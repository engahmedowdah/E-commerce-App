import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetCategoryByIDController from "../../controllers/Category/GetCategoryByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /category:
 *   get:
 *     summary: Get a category by ID
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
 *         description: Category fetched successfully
 *       404:
 *         description: Category not found
 */
router.get("/", asyncHandler(GetCategoryByIDController));

export default router;
