import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateCategoryController from "../../controllers/Category/UpdateCategory.controller.js";

const router = express.Router();

/**
 * @openapi
 * /category:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CategoryID: { type: "string" }
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *               Slug: { type: "string" }
 *               IsActive: { type: "boolean" }
 *               AdminId: { type: "string" }
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Failed to update category
 */
router.put("/", asyncHandler(UpdateCategoryController));

export default router;
