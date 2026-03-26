import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteCategoryController from "../../controllers/Category/DeleteCategory.controller.js";

const router = express.Router();

/**
 * @openapi
 * /category:
 *   delete:
 *     summary: Delete a category by ID
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
 *         description: Category deleted successfully
 *       400:
 *         description: Failed to delete category
 */
router.delete("/", asyncHandler(DeleteCategoryController));

export default router;
