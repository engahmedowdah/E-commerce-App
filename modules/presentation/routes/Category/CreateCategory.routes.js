import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateCategoryController from "../../controllers/Category/CreateCategory.controller.js";

const router = express.Router();

/**
 * @openapi
 * /category:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *               Slug: { type: "string" }
 *               AdminId: { type: "string" }
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateCategoryController));

export default router;
